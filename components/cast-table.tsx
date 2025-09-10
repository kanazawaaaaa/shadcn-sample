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
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CastMember {
  番号: string
  配信等: string
  枠: string
  OS: string
  種別: string
  役名: string
  出演者: string
  一話あたりの出演料?: string
  協力費?: string
  地上波ランク?: string
  事務所: string
  住所: string
  担当?: string
  出演話: string
  話数カウント: {
    "#1": string
    "#2": string
    "#3": string
    "#4": string
    "#5": string
    "#6": string
    "#7": string
    "#8": string
    "#9": string
    "#10": string
  }
  計: string
  Hulu出演料?: string
  Huluランク?: string
  許諾契約: string
}

interface CastTableProps {
  data?: CastMember[]
}

// CSVデータを元にしたサンプルデータ（実際のCSVを解析して使用）
const sampleCastData: CastMember[] = [
  {
    番号: "001",
    配信等: "同時配信あり",
    枠: "通常枠", 
    OS: "配信OSあり(１話あたり)",
    種別: "アミューズ",
    役名: "町田涼",
    出演者: "田中花子",
    事務所: "株式会社アミューズ",
    住所: "〒150-8570 渋谷区桜丘町20-1 渋谷インフォスタワー12F",
    出演話: "全10話",
    話数カウント: {
      "#1": "○",
      "#2": "○", 
      "#3": "○",
      "#4": "○",
      "#5": "○",
      "#6": "○",
      "#7": "○",
      "#8": "○",
      "#9": "○",
      "#10": "○"
    },
    計: "10",
    許諾契約: "許諾済み"
  },
  {
    番号: "002",
    配信等: "同時配信あり",
    枠: "通常枠",
    OS: "配信OSあり(１話あたり)", 
    種別: "音事協",
    役名: "町田恵",
    出演者: "山田太郎",
    事務所: "株式会社 サンミュージックプロダクション",
    住所: "〒160-8501 新宿区左門町4番地 四谷アネックス2F",
    出演話: "全10話",
    話数カウント: {
      "#1": "○",
      "#2": "○",
      "#3": "○", 
      "#4": "○",
      "#5": "○",
      "#6": "○",
      "#7": "○",
      "#8": "○",
      "#9": "○",
      "#10": "○"
    },
    計: "10",
    許諾契約: "許諾済み"
  },
  {
    番号: "003",
    配信等: "同時配信あり",
    枠: "通常枠",
    OS: "配信OSあり(１話あたり)",
    種別: "音事協", 
    役名: "町田芽",
    出演者: "佐藤美咲",
    事務所: "株式会社　研音",
    住所: "〒106-0032 港区六本木 7-4-1 研音ビル5F",
    出演話: "全10話",
    話数カウント: {
      "#1": "○",
      "#2": "○",
      "#3": "○",
      "#4": "○", 
      "#5": "○",
      "#6": "○",
      "#7": "○",
      "#8": "○",
      "#9": "○",
      "#10": "○"
    },
    計: "10",
    許諾契約: "未作成"
  }
]

const getOSBadgeVariant = (os: string) => {
  if (os.includes("OSあり")) return "default"
  if (os.includes("OSなし")) return "secondary" 
  return "outline"
}

const getKindBadgeVariant = (kind: string) => {
  switch (kind) {
    case "アミューズ":
      return "default"
    case "音事協":
      return "secondary"
    case "地上波買取":
      return "outline"
    case "スタート":
      return "destructive"
    default:
      return "outline"
  }
}

export function CastTable({ data = sampleCastData }: CastTableProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>キャスト表</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[120px]">出演者</TableHead>
                    <TableHead className="min-w-[100px]">役名</TableHead>
                    <TableHead className="min-w-[80px]">種別</TableHead>
                    <TableHead className="min-w-[120px]">配信OS</TableHead>
                    <TableHead className="min-w-[200px]">事務所</TableHead>
                    <TableHead className="min-w-[120px]">出演話</TableHead>
                    <TableHead className="text-center">話数詳細</TableHead>
                    <TableHead className="w-16 text-center">計</TableHead>
                    <TableHead className="min-w-[120px] text-center">許諾契約</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((cast, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="font-medium text-sm">{cast.出演者}</div>
                      </TableCell>
                      <TableCell className="text-sm">{cast.役名}</TableCell>
                      <TableCell>
                        <Badge variant={getKindBadgeVariant(cast.種別)} className="text-xs">
                          {cast.種別}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getOSBadgeVariant(cast.OS)} className="text-xs">
                          {cast.OS.includes("OSあり") ? "配信権あり" : "配信権なし"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground max-w-[200px]">
                        <div className="truncate font-medium">{cast.事務所}</div>
                        <div className="truncate text-xs opacity-75">{cast.住所}</div>
                      </TableCell>
                      <TableCell className="text-xs">{cast.出演話}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {Object.entries(cast.話数カウント).map(([episode, status]) => (
                            <div
                              key={episode}
                              className={`w-6 h-6 text-xs flex items-center justify-center rounded border ${
                                status === "○" 
                                  ? "bg-green-100 text-green-800 border-green-300"
                                  : status === "●" || status.includes("●")
                                  ? "bg-blue-100 text-blue-800 border-blue-300"
                                  : "bg-gray-50 text-gray-400 border-gray-200"
                              }`}
                              title={`${episode}: ${status}`}
                            >
                              {episode.replace("#", "")}
                            </div>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-center font-mono font-medium">
                        {cast.計}
                      </TableCell>
                      <TableCell className="text-center">
                        {cast.許諾契約 === "未作成" ? (
                          <Link href="/contract/detail">
                            <Button variant="outline" size="sm">
                              許諾契約を作成する
                            </Button>
                          </Link>
                        ) : (
                          <Badge variant="default" className="text-xs">
                            {cast.許諾契約}
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center text-sm text-muted-foreground">
            <div>合計 {data.length} 名の出演者</div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                <span>出演</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></div>
                <span>写真のみ/EX</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gray-50 border border-gray-200 rounded"></div>
                <span>出演なし</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
