"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, Search, X } from "lucide-react"

interface SearchFormData {
  freeword: string
  aiQuery: string
  contractType: string
  contractStatus: string
  contentTitle: string
  contentGenre: string
  distributorName: string
  distributionPeriodFrom: string
  distributionPeriodTo: string
  creatorName: string
  creatorRole: string
  performerName: string
  performerRole: string
  productionCompany: string
  rightType: string[]
  territoryRegion: string
  budgetRange: string
}

export function SearchForm() {
  const [formData, setFormData] = useState<SearchFormData>({
    freeword: "",
    aiQuery: "",
    contractType: "",
    contractStatus: "",
    contentTitle: "",
    contentGenre: "",
    distributorName: "",
    distributionPeriodFrom: "",
    distributionPeriodTo: "",
    creatorName: "",
    creatorRole: "",
    performerName: "",
    performerRole: "",
    productionCompany: "",
    rightType: [],
    territoryRegion: "",
    budgetRange: "",
  })

  const [selectedRights, setSelectedRights] = useState<string[]>([])

  const handleInputChange = (field: keyof SearchFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleRightTypeToggle = (rightType: string) => {
    setSelectedRights(prev => 
      prev.includes(rightType) 
        ? prev.filter(r => r !== rightType)
        : [...prev, rightType]
    )
  }

  const removeRightType = (rightType: string) => {
    setSelectedRights(prev => prev.filter(r => r !== rightType))
  }

  const handleSearch = (searchType?: 'freeword' | 'ai') => {
    const searchParams = {
      ...formData,
      rightType: selectedRights,
      searchType: searchType || 'freeword'
    }
    console.log("検索パラメータ:", searchParams)
    
    if (searchType === 'ai') {
      console.log("AI検索を実行:", formData.aiQuery)
      // TODO: AI検索の実装
      alert(`AI検索を実行します: ${formData.aiQuery}`)
    } else {
      console.log("フリーワード検索を実行:", formData.freeword)
      // TODO: フリーワード検索の実装
      alert(`フリーワード検索を実行します: ${formData.freeword}`)
    }
  }

  const handleReset = () => {
    setFormData({
      freeword: "",
      aiQuery: "",
      contractType: "",
      contractStatus: "",
      contentTitle: "",
      contentGenre: "",
      distributorName: "",
      distributionPeriodFrom: "",
      distributionPeriodTo: "",
      creatorName: "",
      creatorRole: "",
      performerName: "",
      performerRole: "",
      productionCompany: "",
      rightType: [],
      territoryRegion: "",
      budgetRange: "",
    })
    setSelectedRights([])
  }

  const rightTypes = [
    "配信権", "放送権", "DVD化権", "海外配信権", "二次利用権", 
    "商品化権", "音楽利用権", "翻案権", "翻訳権", "上映権"
  ]

  const contentGenres = [
    "ドラマ", "映画", "アニメ", "バラエティ", "ドキュメンタリー", 
    "ニュース", "スポーツ", "音楽", "教育", "その他"
  ]

  const creatorRoles = [
    "脚本家", "監督", "プロデューサー", "原作者", "演出家", 
    "撮影監督", "音楽監督", "美術監督", "編集者"
  ]

  const performerRoles = [
    "主演", "助演", "脇役", "声優", "ナレーター", "MC", "ゲスト"
  ]

  return (
    <div className="space-y-6">
      {/* 検索方法選択タブ */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">検索</CardTitle>
          <CardDescription>
            作品名、人名、会社名、権利種別などで検索できます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="freeword" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="freeword">フリーワード検索</TabsTrigger>
              <TabsTrigger value="ai">AI検索</TabsTrigger>
            </TabsList>
            
            {/* フリーワード検索タブ */}
            <TabsContent value="freeword" className="mt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="freewordInput" className="text-sm font-medium">検索キーワード</Label>
                </div>
                <div className="flex gap-2">
                  <Input
                    id="freewordInput"
                    placeholder="例：映画タイトル、出演者名、制作会社名など"
                    value={formData.freeword}
                    onChange={(e) => handleInputChange("freeword", e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={() => handleSearch('freeword')}
                    className="px-6"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    検索
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* AI検索タブ */}
            <TabsContent value="ai" className="mt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="aiSearchInput" className="text-sm font-medium">自然言語で検索</Label>
                  <p className="text-xs text-muted-foreground mb-3">
                    自然な文章で検索したい内容を入力してください。AIが検索条件を理解して結果を返します。
                  </p>
                </div>
                <div className="space-y-3">
                  <Textarea
                    id="aiSearchInput"
                    placeholder="例：&ldquo;田中太郎が出演している2023年のドラマで、Netflixで配信されているもの&rdquo;、&ldquo;予算が1000万円以上の映画契約で、海外配信権が含まれているもの&rdquo;など"
                    value={formData.aiQuery}
                    onChange={(e) => handleInputChange("aiQuery", e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      💡 具体的な条件を含めるとより正確な結果が得られます
                    </div>
                    <Button 
                      onClick={() => handleSearch('ai')}
                      className="px-6"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      AI検索
                    </Button>
                  </div>
                </div>
                
                {/* AI検索の例文 */}
                <div className="mt-4 p-4 bg-muted/30 rounded-md">
                  <p className="text-sm font-medium mb-2">検索例：</p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p>• &ldquo;山田花子が脚本を担当したアニメ作品で、2022年以降に放送されたもの&rdquo;</p>
                    <p>• &ldquo;配信期間が今年中に終了する契約で、海外展開が含まれているもの&rdquo;</p>
                    <p>• &ldquo;予算5000万円以上のバラエティ番組の制作契約&rdquo;</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 詳細検索条件 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">詳細検索条件</CardTitle>
          <CardDescription>
            より詳細な条件を指定して検索できます
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="contract" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="contract">契約情報</TabsTrigger>
              <TabsTrigger value="content">コンテンツ</TabsTrigger>
              <TabsTrigger value="people">人物・組織</TabsTrigger>
              <TabsTrigger value="rights">権利・配信</TabsTrigger>
            </TabsList>
            
            {/* 契約情報タブ */}
            <TabsContent value="contract" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contractType">契約種別</Label>
                  <Select value={formData.contractType} onValueChange={(value) => handleInputChange("contractType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="契約種別を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="distribution">配信契約</SelectItem>
                      <SelectItem value="production">制作契約</SelectItem>
                      <SelectItem value="talent">出演契約</SelectItem>
                      <SelectItem value="licensing">ライセンス契約</SelectItem>
                      <SelectItem value="music">音楽利用契約</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contractStatus">契約ステータス</Label>
                  <Select value={formData.contractStatus} onValueChange={(value) => handleInputChange("contractStatus", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="ステータスを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">草稿</SelectItem>
                      <SelectItem value="negotiating">交渉中</SelectItem>
                      <SelectItem value="signed">締結済み</SelectItem>
                      <SelectItem value="active">契約中</SelectItem>
                      <SelectItem value="expired">期限切れ</SelectItem>
                      <SelectItem value="terminated">解除済み</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budgetRange">予算範囲</Label>
                  <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange("budgetRange", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="予算範囲を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1m">100万円未満</SelectItem>
                      <SelectItem value="1m-5m">100万円〜500万円</SelectItem>
                      <SelectItem value="5m-10m">500万円〜1,000万円</SelectItem>
                      <SelectItem value="10m-50m">1,000万円〜5,000万円</SelectItem>
                      <SelectItem value="over-50m">5,000万円以上</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            {/* コンテンツタブ */}
            <TabsContent value="content" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contentTitle">コンテンツタイトル</Label>
                  <Input
                    id="contentTitle"
                    placeholder="番組名、映画タイトルなど"
                    value={formData.contentTitle}
                    onChange={(e) => handleInputChange("contentTitle", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contentGenre">ジャンル</Label>
                  <Select value={formData.contentGenre} onValueChange={(value) => handleInputChange("contentGenre", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="ジャンルを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      {contentGenres.map((genre) => (
                        <SelectItem key={genre} value={genre.toLowerCase()}>{genre}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="productionCompany">制作会社</Label>
                  <Input
                    id="productionCompany"
                    placeholder="制作会社名"
                    value={formData.productionCompany}
                    onChange={(e) => handleInputChange("productionCompany", e.target.value)}
                  />
                </div>
              </div>
            </TabsContent>

            {/* 人物・組織タブ */}
            <TabsContent value="people" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="creatorName">クリエイター名</Label>
                  <Input
                    id="creatorName"
                    placeholder="脚本家、監督、プロデューサーなど"
                    value={formData.creatorName}
                    onChange={(e) => handleInputChange("creatorName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="creatorRole">クリエイター役職</Label>
                  <Select value={formData.creatorRole} onValueChange={(value) => handleInputChange("creatorRole", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="役職を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      {creatorRoles.map((role) => (
                        <SelectItem key={role} value={role.toLowerCase()}>{role}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="performerName">実演家名</Label>
                  <Input
                    id="performerName"
                    placeholder="俳優、声優、出演者など"
                    value={formData.performerName}
                    onChange={(e) => handleInputChange("performerName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="performerRole">実演家役職</Label>
                  <Select value={formData.performerRole} onValueChange={(value) => handleInputChange("performerRole", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="役職を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      {performerRoles.map((role) => (
                        <SelectItem key={role} value={role.toLowerCase()}>{role}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            {/* 権利・配信タブ */}
            <TabsContent value="rights" className="space-y-6 mt-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-base font-medium">権利種別</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                    {rightTypes.map((rightType) => (
                      <div key={rightType} className="flex items-center space-x-2 py-1">
                        <Checkbox
                          id={rightType}
                          checked={selectedRights.includes(rightType)}
                          onCheckedChange={() => handleRightTypeToggle(rightType)}
                        />
                        <Label htmlFor={rightType} className="text-sm font-normal cursor-pointer">{rightType}</Label>
                      </div>
                    ))}
                  </div>
                  {selectedRights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 p-3 bg-muted/50 rounded-md">
                      {selectedRights.map((rightType) => (
                        <Badge key={rightType} variant="secondary" className="px-3 py-1">
                          {rightType}
                          <button
                            onClick={() => removeRightType(rightType)}
                            className="ml-2 hover:text-red-500 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="distributorName">配信先</Label>
                    <Input
                      id="distributorName"
                      placeholder="Netflix, Amazon Prime, テレビ局など"
                      value={formData.distributorName}
                      onChange={(e) => handleInputChange("distributorName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="territoryRegion">配信地域</Label>
                    <Select value={formData.territoryRegion} onValueChange={(value) => handleInputChange("territoryRegion", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="地域を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="japan">日本</SelectItem>
                        <SelectItem value="asia">アジア</SelectItem>
                        <SelectItem value="north-america">北米</SelectItem>
                        <SelectItem value="europe">ヨーロッパ</SelectItem>
                        <SelectItem value="worldwide">全世界</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="distributionPeriodFrom">配信期間（開始）</Label>
                    <Input
                      id="distributionPeriodFrom"
                      type="date"
                      value={formData.distributionPeriodFrom}
                      onChange={(e) => handleInputChange("distributionPeriodFrom", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="distributionPeriodTo">配信期間（終了）</Label>
                    <Input
                      id="distributionPeriodTo"
                      type="date"
                      value={formData.distributionPeriodTo}
                      onChange={(e) => handleInputChange("distributionPeriodTo", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
            <Button variant="outline" onClick={handleReset} className="px-6">
              リセット
            </Button>
            <Button onClick={() => handleSearch('freeword')} className="px-6">
              <Search className="w-4 h-4 mr-2" />
              詳細検索
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
