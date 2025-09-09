import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
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
                  <BreadcrumbLink href="/contents">作品情報</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>バラエティ E</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">バラエティ E</h2>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">放送・配信日</label>
                    <input 
                      type="text" 
                      defaultValue="2024/4/2（火）～" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">時間・枠</label>
                    <input 
                      type="text" 
                      defaultValue="火曜プラチナイト①（2359-2424）" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">RG,単発,配信オリジナル</label>
                    <Select defaultValue="RG">
                      <SelectTrigger className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <SelectValue placeholder="タイプを選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="RG">RG</SelectItem>
                        <SelectItem value="単発">単発</SelectItem>
                        <SelectItem value="配信オリジナル">配信オリジナル</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">ジャンル</label>
                    <Select defaultValue="バラエティ">
                      <SelectTrigger className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <SelectValue placeholder="ジャンルを選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ドラマ">ドラマ</SelectItem>
                        <SelectItem value="バラエティ">バラエティ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">委員会（製著）</label>
                    <input 
                      type="text" 
                      defaultValue="製著：日テレ" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">総合編成</label>
                    <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 items-center">
                      <Badge variant="secondary">田中 健一</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">コンビ</label>
                    <input 
                      type="text" 
                      defaultValue="" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">VAP（サブ担）</label>
                    <div className="flex h-auto min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 items-center gap-2 flex-wrap">
                      <Badge variant="secondary">佐藤 美咲</Badge>
                      <Badge variant="secondary">高橋 拓也</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">番組CP/P</label>
                    <div className="flex h-auto min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 items-center gap-2 flex-wrap">
                      <Badge variant="secondary">鈴木 雄太</Badge>
                      <Badge variant="secondary">山田 花子</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">配信オリジナルコンテンツ有無</label>
                    <input 
                      type="text" 
                      defaultValue="ー" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">同時配信</label>
                    <input 
                      type="text" 
                      defaultValue="ー" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">TADA ※配信期間記入</label>
                    <input 
                      type="text" 
                      defaultValue="1週間" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">TVer ※配信期間記入</label>
                    <input 
                      type="text" 
                      defaultValue="1週間" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Hulu ※配信期間記入</label>
                    <input 
                      type="text" 
                      defaultValue="1年間" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">放送内配信告知尺</label>
                    <input 
                      type="text" 
                      defaultValue="" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">特記</label>
                  <textarea 
                    defaultValue="配信開始時間：各ブロックごとに配信開始"
                    rows={4}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <Tabs defaultValue="comments" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="comments">コメント</TabsTrigger>
                    <TabsTrigger value="history">変更履歴</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="comments" className="space-y-4">
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
                          <p className="text-sm">TVerの配信ページ確認：「バラエティ E」のシリーズ内に「バラエティ E DEEP」という枠を作成する？それとも「バラエティ E」と別ページにする？
                            同一ページにするなら、合体サムネを作っていただくのがベターかも。<br />
                            ・お気に入り登録が一緒になる、ユーザから見るとわかりやすい<br />
                            ・ランキングでどちらかしか掲載されない<br />
                          </p>
                        </div>
                        
                        <div className="border rounded-md p-3 bg-muted/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">佐藤 美咲</Badge>
                              <span className="text-sm text-muted-foreground">2024/4/16 09:15</span>
                            </div>
                          </div>
                          <p className="text-sm">1シリーズにまとめる想定で番組へ最終確認中（シリーズサムネの作成も併せて相談中）</p>
                        </div>
                        
                        <div className="border rounded-md p-3 bg-muted/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">山田 花子</Badge>
                              <span className="text-sm text-muted-foreground">2024/4/17 11:45</span>
                            </div>
                          </div>
                          <p className="text-sm">↑で確定しました</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <textarea 
                          placeholder="コメント"
                          rows={3}
                          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <div className="flex justify-end">
                          <Button type="button">送信</Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="history" className="space-y-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">変更履歴</h3>
                      <div className="space-y-3">
                        <div className="border rounded-md p-3 bg-muted/50">
                          <div className="flex items-center justify-between mb-1">
                            <Badge variant="secondary">作成</Badge>
                            <span className="text-sm text-muted-foreground">2024/4/2 10:00</span>
                          </div>
                          <p className="text-sm font-medium">鈴木 雄太</p>
                          <p className="text-sm text-muted-foreground">作品情報を新規作成しました</p>
                        </div>
                        
                        <div className="border rounded-md p-3 bg-muted/50">
                          <div className="flex items-center justify-between mb-1">
                            <Badge variant="secondary">更新</Badge>
                            <span className="text-sm text-muted-foreground">2024/4/5 15:20</span>
                          </div>
                          <p className="text-sm font-medium">田中 健一</p>
                          <p className="text-sm text-muted-foreground">放送時間を変更しました（23:59-24:24 → 24:04-24:29）</p>
                        </div>
                        
                        <div className="border rounded-md p-3 bg-muted/50">
                          <div className="flex items-center justify-between mb-1">
                            <Badge variant="secondary">更新</Badge>
                            <span className="text-sm text-muted-foreground">2024/4/10 13:45</span>
                          </div>
                          <p className="text-sm font-medium">佐藤 美咲</p>
                          <p className="text-sm text-muted-foreground">配信プラットフォーム情報を更新しました</p>
                        </div>
                        
                        <div className="border rounded-md p-3 bg-muted/50">
                          <div className="flex items-center justify-between mb-1">
                            <Badge variant="secondary">更新</Badge>
                            <span className="text-sm text-muted-foreground">2024/4/15 16:30</span>
                          </div>
                          <p className="text-sm font-medium">高橋 拓也</p>
                          <p className="text-sm text-muted-foreground">番組制作スタッフ情報を追加しました</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
