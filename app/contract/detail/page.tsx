import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
          <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/contract">契約</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>ドラマシリーズ A 脚本家契約</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">ドラマシリーズ A 脚本家契約</h2>
                
                {/* 契約詳細 */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">契約詳細</h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">契約者名</label>
                      <input 
                        type="text" 
                        defaultValue="鈴木 雄太" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">契約種別</label>
                      <Select defaultValue="脚本家契約">
                        <SelectTrigger className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <SelectValue placeholder="契約種別を選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="脚本家契約">脚本家契約</SelectItem>
                          <SelectItem value="演出家契約">演出家契約</SelectItem>
                          <SelectItem value="プロデューサー契約">プロデューサー契約</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">契約期間</label>
                      <input 
                        type="text" 
                        defaultValue="2024/4/1 - 2025/3/31" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">基本料</label>
                      <input 
                        type="text" 
                        defaultValue="¥500,000" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Hulu料率</label>
                      <input 
                        type="text" 
                        defaultValue="5%" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">TADA料率</label>
                      <input 
                        type="text" 
                        defaultValue="3%" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">TVer料率</label>
                      <input 
                        type="text" 
                        defaultValue="3%" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">支払条件</label>
                      <Select defaultValue="月末締翌月末払い">
                        <SelectTrigger className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <SelectValue placeholder="支払条件を選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="月末締翌月末払い">月末締翌月末払い</SelectItem>
                          <SelectItem value="月末締翌々月末払い">月末締翌々月末払い</SelectItem>
                          <SelectItem value="15日締当月末払い">15日締当月末払い</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">担当者</label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 items-center">
                        <Badge variant="secondary">田中 健一</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">特記事項</label>
                    <textarea 
                      defaultValue="海外配信時は別途協議"
                      rows={4}
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* 保存ボタン */}
                  <div className="flex justify-center">
                    <Button className="min-w-[120px]">
                      保存
                    </Button>
                  </div>
                </div>

                {/* コメント */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">コメント</h3>
                  <div className="space-y-3">
                    <div className="border rounded-md p-3 bg-muted/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">田中 健一</Badge>
                          <span className="text-sm text-muted-foreground">2024/4/15 14:30</span>
                        </div>
                      </div>
                      <p className="text-sm">配信料率について最終確認中。海外展開も予定しているため、追加の契約が必要になる可能性があります。</p>
                    </div>
                    
                    <div className="border rounded-md p-3 bg-muted/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">佐藤 美咲</Badge>
                          <span className="text-sm text-muted-foreground">2024/4/16 09:15</span>
                        </div>
                      </div>
                      <p className="text-sm">料率について番組側と合意済み。契約書作成に進みます。</p>
                    </div>
                    
                    <div className="border rounded-md p-3 bg-muted/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">鈴木 雄太</Badge>
                          <span className="text-sm text-muted-foreground">2024/4/17 11:45</span>
                        </div>
                      </div>
                      <p className="text-sm">契約内容について了承しました。</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="relative">
                      <textarea 
                        placeholder="コメント"
                        rows={3}
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 pr-20 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      <Button 
                        type="button" 
                        size="sm"
                        className="absolute bottom-2 right-2"
                      >
                        送信
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 変更履歴 */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">変更履歴</h3>
                  <div className="space-y-3">
                    <div className="border rounded-md p-3 bg-muted/50 relative">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="secondary">作成</Badge>
                        <span className="text-sm text-muted-foreground">2024/4/1 09:00</span>
                      </div>
                      <p className="text-sm font-medium">田中 健一</p>
                      <p className="text-sm text-muted-foreground">契約情報が新規作成されました</p>
                      <div className="mt-3 flex items-end justify-end">
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground mb-1">通知されたユーザー</p>
                          <div className="flex gap-1">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/avatars/sato.png" alt="佐藤 美咲" />
                              <AvatarFallback className="text-xs">佐</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/avatars/suzuki.png" alt="鈴木 雄太" />
                              <AvatarFallback className="text-xs">鈴</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3 bg-muted/50 relative">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="secondary">更新</Badge>
                        <span className="text-sm text-muted-foreground">2024/4/10 15:20</span>
                      </div>
                      <p className="text-sm font-medium">田中 健一</p>
                      <p className="text-sm text-muted-foreground">配信料率が設定されました（Hulu: 5%, TADA: 3%, TVer: 3%）</p>
                      <div className="mt-3 flex items-end justify-end">
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground mb-1">通知されたユーザー</p>
                          <div className="flex gap-1">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/avatars/sato.png" alt="佐藤 美咲" />
                              <AvatarFallback className="text-xs">佐</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/avatars/suzuki.png" alt="鈴木 雄太" />
                              <AvatarFallback className="text-xs">鈴</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3 bg-muted/50 relative">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="secondary">更新</Badge>
                        <span className="text-sm text-muted-foreground">2024/4/16 11:30</span>
                      </div>
                      <p className="text-sm font-medium">佐藤 美咲</p>
                      <p className="text-sm text-muted-foreground">特記事項が追加されました（海外配信時は別途協議）</p>
                      <div className="mt-3 flex items-end justify-end">
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground mb-1">通知されたユーザー</p>
                          <div className="flex gap-1">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/avatars/tanaka.png" alt="田中 健一" />
                              <AvatarFallback className="text-xs">田</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/avatars/suzuki.png" alt="鈴木 雄太" />
                              <AvatarFallback className="text-xs">鈴</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
