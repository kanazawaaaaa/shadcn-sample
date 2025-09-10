"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// CSVデータから生成したタスクの型定義
type Task = {
  id: string
  content: string
  taskType: string
  assignee: string
  createdDate: string
}

// サンプルデータ（CSVデータを基に作成）
const tasks: Task[] = [
  {
    id: "1",
    content: "ドラマシリーズ A キャスト表作成",
    taskType: "入力",
    assignee: "横山健太",
    createdDate: "10日前"
  },
  {
    id: "2", 
    content: "事務所 B 住所 連絡先",
    taskType: "入力",
    assignee: "ドラマ制作班",
    createdDate: "3日前"
  }
]

// タスク種別に応じたBadgeの色を取得
const getTaskTypeBadgeVariant = (taskType: string) => {
  switch (taskType) {
    case "入力":
      return "default" as const
    case "確認":
      return "secondary" as const
    case "完了":
      return "outline" as const
    default:
      return "default" as const
  }
}

// 担当者に応じたBadgeの色を取得
const getAssigneeBadgeVariant = (assignee: string) => {
  // 個人名の場合とチーム名の場合で色を分ける
  if (assignee.includes("班") || assignee.includes("部") || assignee.includes("デスク")) {
    return "secondary" as const
  } else {
    return "outline" as const
  }
}

// 作成日の表示コンポーネント
const CreatedDateDisplay = ({ createdDate }: { createdDate: string }) => {
  const isOverdue = createdDate === "10日前"
  
  if (isOverdue) {
    return (
      <div className="flex items-center gap-2 text-red-600">
        <span className="text-lg animate-pulse">🔥</span>
        <span className="font-bold text-red-700 animate-pulse">
          {createdDate}
        </span>
      </div>
    )
  }
  
  return (
    <span className="text-muted-foreground">
      {createdDate}
    </span>
  )
}

export function MytaskTable2() {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>内容</TableHead>
              <TableHead>タスク種別</TableHead>
              <TableHead>担当者</TableHead>
              <TableHead>作成日</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.length ? (
              tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">
                    {task.content}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getTaskTypeBadgeVariant(task.taskType)}>
                      {task.taskType}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getAssigneeBadgeVariant(task.assignee)}>
                      {task.assignee}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <CreatedDateDisplay createdDate={task.createdDate} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  タスクがありません。
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}