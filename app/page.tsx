import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MytaskTable1 } from "@/components/mytask-table1"
import { MytaskTable2 } from "@/components/mytask-table2"
import { MytaskTable3 } from "@/components/mytask-table3"

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
                  <BreadcrumbPage>マイタスク</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div>
                <h1 className="text-2xl font-bold">マイタスク一覧</h1>
              </div>
              <Tabs defaultValue="a" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="a">契約関係の承認者の場合</TabsTrigger>
                  <TabsTrigger value="b">制作の場合</TabsTrigger>
                  <TabsTrigger value="c">権利情報デスクの場合</TabsTrigger>
                </TabsList>
                <TabsContent value="a" className="mt-4">
                  <div className="space-y-4">
                    <p>※ 前のタスク（契約書の作成であったり、申請だったり）が完了すると自動的に次のタスクが作成されます。</p>
                    <MytaskTable1 />
                  </div>
                </TabsContent>
                <TabsContent value="b" className="mt-4">
                  <div className="space-y-4">
                    <p>※ 作成日から一定期間を過ぎたタスクは強調表示されると共に、催促の通知が自動的に送信されます。</p>
                    <MytaskTable2 />
                  </div>
                </TabsContent>
                <TabsContent value="c" className="mt-4">
                  <div className="space-y-4">
                    <p>※ システム外とのやりとりもタスク化することで、完了後の後続タスクの自動作成が可能になります。</p>
                    <MytaskTable3 />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
