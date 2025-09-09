"use client"

import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// ダミーデータの型定義
interface ContentsData {
  id: number
  title: string
  performerProcessing: boolean
  castListStatus: string
  oldJohnnyStatus: boolean
  armaApplicationStatus: string
  contributionRateStatus: string
}

// ダミーデータ
const dummyData: ContentsData[] = [
  {
    id: 1,
    title: "ドラマシリーズ A",
    performerProcessing: true,
    castListStatus: "完了",
    oldJohnnyStatus: true,
    armaApplicationStatus: "申請中",
    contributionRateStatus: "作成済み"
  },
  {
    id: 2,
    title: "ドラマシリーズ B",
    performerProcessing: false,
    castListStatus: "進行中",
    oldJohnnyStatus: false,
    armaApplicationStatus: "未申請",
    contributionRateStatus: "未作成"
  },
  {
    id: 3,
    title: "ドラマシリーズ C",
    performerProcessing: true,
    castListStatus: "完了",
    oldJohnnyStatus: false,
    armaApplicationStatus: "承認済み",
    contributionRateStatus: "作成中"
  },
  {
    id: 4,
    title: "ドラマシリーズ D",
    performerProcessing: false,
    castListStatus: "未開始",
    oldJohnnyStatus: true,
    armaApplicationStatus: "申請中",
    contributionRateStatus: "作成済み"
  },
  {
    id: 5,
    title: "バラエティ E",
    performerProcessing: true,
    castListStatus: "進行中",
    oldJohnnyStatus: false,
    armaApplicationStatus: "承認済み",
    contributionRateStatus: "未作成"
  },
  {
    id: 6,
    title: "バラエティ F",
    performerProcessing: true,
    castListStatus: "完了",
    oldJohnnyStatus: true,
    armaApplicationStatus: "未申請",
    contributionRateStatus: "作成中"
  },
  {
    id: 7,
    title: "バラエティ G",
    performerProcessing: false,
    castListStatus: "進行中",
    oldJohnnyStatus: true,
    armaApplicationStatus: "申請中",
    contributionRateStatus: "作成済み"
  },
  {
    id: 8,
    title: "バラエティ H",
    performerProcessing: true,
    castListStatus: "完了",
    oldJohnnyStatus: false,
    armaApplicationStatus: "承認済み",
    contributionRateStatus: "作成済み"
  },
  {
    id: 9,
    title: "音楽番組 I",
    performerProcessing: false,
    castListStatus: "未開始",
    oldJohnnyStatus: true,
    armaApplicationStatus: "未申請",
    contributionRateStatus: "未作成"
  },
  {
    id: 10,
    title: "スポーツ番組 J",
    performerProcessing: true,
    castListStatus: "進行中",
    oldJohnnyStatus: false,
    armaApplicationStatus: "申請中",
    contributionRateStatus: "作成中"
  }
]

// ステータスに応じたBadgeの色を決定する関数
const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "完了":
    case "承認済み":
    case "作成済み":
      return "default" as const
    case "進行中":
    case "申請中":
    case "作成中":
      return "secondary" as const
    case "未開始":
    case "未申請":
    case "未作成":
      return "outline" as const
    default:
      return "outline" as const
  }
}

export function ContentsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader className="bg-muted sticky top-0 z-10">
          <TableRow>
            <TableHead>タイトル</TableHead>
            <TableHead>実演家処理</TableHead>
            <TableHead>キャスト表</TableHead>
            <TableHead>旧ジャニーズ</TableHead>
            <TableHead>aRma申請</TableHead>
            <TableHead>寄与率</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <Link 
                  href={`/contents/detail?id=${item.id}`}
                  className="hover:text-primary hover:underline"
                >
                  {item.title}
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant={item.performerProcessing ? "default" : "outline"}>
                  {item.performerProcessing ? "有" : "無"}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={getStatusBadgeVariant(item.castListStatus)}>
                  {item.castListStatus}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={item.oldJohnnyStatus ? "default" : "outline"}>
                  {item.oldJohnnyStatus ? "有" : "無"}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={getStatusBadgeVariant(item.armaApplicationStatus)}>
                  {item.armaApplicationStatus}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={getStatusBadgeVariant(item.contributionRateStatus)}>
                  {item.contributionRateStatus}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
