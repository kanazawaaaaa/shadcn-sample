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
  simultaneousStreaming: string
  tada: string
  tver: string
  hulu: string
  castListStatus: string
}

// ダミーデータ
const dummyData: ContentsData[] = [
  {
    id: 1,
    title: "ドラマシリーズ A",
    simultaneousStreaming: "配信中",
    tada: "24/4/1OA分～",
    tver: "24/4/1OA分～",
    hulu: "無し",
    castListStatus: "完了"
  },
  {
    id: 2,
    title: "ドラマシリーズ B",
    simultaneousStreaming: "ー",
    tada: "1週間",
    tver: "1週間",
    hulu: "1年間",
    castListStatus: "完了"
  },
  {
    id: 3,
    title: "ドラマシリーズ C",
    simultaneousStreaming: "ー",
    tada: "1週間",
    tver: "1週間",
    hulu: "1年間",
    castListStatus: "完了"
  },
  {
    id: 4,
    title: "ドラマシリーズ D",
    simultaneousStreaming: "有",
    tada: "1週間",
    tver: "1週間",
    hulu: "1年間",
    castListStatus: "完了"
  },
  {
    id: 5,
    title: "バラエティ E",
    simultaneousStreaming: "ー",
    tada: "1週間",
    tver: "1週間",
    hulu: "1年間",
    castListStatus: "対応中"
  },
  {
    id: 6,
    title: "バラエティ F",
    simultaneousStreaming: "ー",
    tada: "#1:据え置き #2以降:4週間",
    tver: "#1:据え置き #2以降:4週間",
    hulu: "無期限",
    castListStatus: "対応中"
  },
  {
    id: 7,
    title: "バラエティ G",
    simultaneousStreaming: "ー",
    tada: "1週間",
    tver: "1週間",
    hulu: "1年間",
    castListStatus: "ー"
  },
  {
    id: 8,
    title: "バラエティ H",
    simultaneousStreaming: "有",
    tada: "1週間",
    tver: "1週間",
    hulu: "1年間",
    castListStatus: "完了"
  },
  {
    id: 9,
    title: "音楽番組 I",
    simultaneousStreaming: "ー",
    tada: "見逃し配信(OA後-次回放送開始前迄)",
    tver: "見逃し配信(OA後-次回放送開始前迄)",
    hulu: "ー",
    castListStatus: "ー"
  },
  {
    id: 10,
    title: "スポーツ番組 J",
    simultaneousStreaming: "ー",
    tada: "見逃し配信(OA後-次回放送開始前迄)",
    tver: "見逃し配信(OA後-次回放送開始前迄)",
    hulu: "ー",
    castListStatus: "ー"
  }
]

// ステータスに応じたBadgeの色を決定する関数
const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "完了":
    case "配信中":
    case "有":
      return "default" as const
    case "対応中":
      return "secondary" as const
    case "ー":
    case "無し":
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
            <TableHead>同時配信</TableHead>
            <TableHead>TADA</TableHead>
            <TableHead>TVer</TableHead>
            <TableHead>Hulu</TableHead>
            <TableHead>キャスト表</TableHead>
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
                <span className="text-sm">{item.simultaneousStreaming}</span>
              </TableCell>
              <TableCell>
                <span className="text-sm">{item.tada}</span>
              </TableCell>
              <TableCell>
                <span className="text-sm">{item.tver}</span>
              </TableCell>
              <TableCell>
                <span className="text-sm">{item.hulu}</span>
              </TableCell>
              <TableCell>
                <Badge variant={getStatusBadgeVariant(item.castListStatus)}>
                  {item.castListStatus}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
