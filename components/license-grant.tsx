"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash2, Save, Shield, Network, Film, Languages } from "lucide-react";

// --- Types (minimal) ---
type WindowItem = {
  type: "initial" | "catchup" | "renewal";
  start: string; // YYYY-MM-DD
  end?: string; // YYYY-MM-DD | undefined
};

type HoldbackItem = {
  type: "tvod" | "svod" | "avod" | "est" | "theatrical" | "broadcast";
  start: string; // YYYY-MM-DD
  end?: string;
};

type ClearanceSnapshot = {
  performer: string;
  music: string;
  trademark: string;
};

// --- Prefilled JSON (from your sample) ---
const prefilled = {
  title: "ドラマ「未来への道」配信許諾契約",
  grant_id: "GR-2025-01234",
  contract_id: "CT-2025-04567",
  scope: "season" as const,
  work_id: "WK-NTV-999",
  season_no: 1,
  distribution_types: ["svod"] as ("svod" | "avod" | "tvod" | "est")[],
  territories: ["JP"],
  languages_sub: ["ja", "en"],
  languages_dub: [] as string[],
  windows: [
    { type: "initial", start: "2025-10-01", end: "2026-03-31" },
    { type: "catchup", start: "2025-10-01", end: "2025-10-31" },
  ] as WindowItem[],
  exclusivity: { level: "period", notes: "国内SVOD独占" },
  holdbacks: [{ type: "tvod", start: "2026-04-01" }] as HoldbackItem[],
  drm_required: ["Widevine", "PlayReady", "FairPlay"],
  watermarking: "forensic",
  download_to_go: true,
  promo_rights: { trailer: true, clip_max_seconds: 30, sns_boost: false },
  credit_requirements: "© NTV / Program Title (Year)",
  report_spec_id: "RS-HULU-JP-01",
  delivery_profile_id: "DP-OTT-IMF-4K-HDR",
  clearance_snapshot: {
    performer: "cleared",
    music: "interactive_streaming_cleared",
    trademark: "no_issue",
  } as ClearanceSnapshot,
};

export function LicenseGrant() {
  const [form, setForm] = React.useState(prefilled);

  const toggleArray = (key: keyof typeof form, value: string) => {
    const arr = new Set((form as any)[key] as string[]);
    if (arr.has(value)) arr.delete(value); else arr.add(value);
    setForm({ ...form, [key]: Array.from(arr) } as any);
  };

  const addWindow = () => setForm((f) => ({
    ...f,
    windows: [...f.windows, { type: "renewal", start: "2026-04-01", end: "2026-09-30" }],
  }));

  const removeWindow = (idx: number) => setForm((f) => ({
    ...f,
    windows: f.windows.filter((_, i) => i !== idx),
  }));

  const addHoldback = () => setForm((f) => ({
    ...f,
    holdbacks: [...f.holdbacks, { type: "svod", start: "2026-10-01" }],
  }));

  const removeHoldback = (idx: number) => setForm((f) => ({
    ...f,
    holdbacks: f.holdbacks.filter((_, i) => i !== idx),
  }));

  const distributionTypes: Array<{ id: "svod" | "avod" | "tvod" | "est"; label: string }> = [
    { id: "svod", label: "SVOD" },
    { id: "avod", label: "AVOD" },
    { id: "tvod", label: "TVOD" },
    { id: "est", label: "EST" },
  ];

  const drmOptions = ["Widevine", "PlayReady", "FairPlay"] as const;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b  p-6">
      <div>
        <div className="mx-auto max-w-6xl space-y-6">
          <header className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">配信許諾契約サンプル</h1>
              <p className="text-sm text-muted-foreground">契約種別ごとに入力項目の変更をする等は柔軟に対応可能</p>
            </div>
            <Button className="gap-2"><Save className="h-4 w-4"/> 保存</Button>
          </header>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Film className="h-5 w-5"/> 基本情報</CardTitle>
              <CardDescription>サンプル</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">タイトル</Label>
                <Input id="title" value={form.title} onChange={(e)=>setForm({...form, title: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>配信形態</Label>
                <div className="flex flex-wrap gap-4 rounded-2xl border p-3">
                  {distributionTypes.map((d)=> (
                    <label key={d.id} className="flex items-center gap-2 text-sm">
                      <Checkbox checked={form.distribution_types.includes(d.id)} onCheckedChange={()=>toggleArray("distribution_types", d.id)} />
                      {d.label}
                    </label>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="shadow-sm lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Network className="h-5 w-5"/> 地域・言語・セキュリティ</CardTitle>
                <CardDescription>配信地域／字幕・吹替／DRM・ウォーターマーク</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Territories (ISO, カンマ区切り)</Label>
                  <Input value={form.territories.join(", ")} onChange={(e)=>setForm({...form, territories: e.target.value.split(/[,\s]+/).filter(Boolean)})} />
                  <div className="flex flex-wrap gap-2 pt-1">
                    {form.territories.map((t)=> (<Badge key={t} variant="secondary">{t}</Badge>))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Languages className="h-4 w-4"/> Subtitles</Label>
                  <Input value={form.languages_sub.join(", ")} onChange={(e)=>setForm({...form, languages_sub: e.target.value.split(/[,\s]+/).filter(Boolean)})} />
                  <div className="flex flex-wrap gap-2 pt-1">
                    {form.languages_sub.map((t)=> (<Badge key={t} variant="outline">{t}</Badge>))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Dub (言語, カンマ区切り)</Label>
                  <Input value={form.languages_dub.join(", ")} onChange={(e)=>setForm({...form, languages_dub: e.target.value.split(/[,\s]+/).filter(Boolean)})} />
                  <div className="flex flex-wrap gap-2 pt-1">
                    {form.languages_dub.map((t)=> (<Badge key={t} variant="secondary">{t}</Badge>))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>DRM 必須</Label>
                  <div className="flex flex-wrap gap-4 rounded-2xl border p-3">
                    {drmOptions.map((d)=> (
                      <label key={d} className="flex items-center gap-2 text-sm">
                        <Checkbox checked={form.drm_required.includes(d)} onCheckedChange={()=>toggleArray("drm_required", d)} />{d}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Watermarking</Label>
                  <Select value={form.watermarking} onValueChange={(v)=>setForm({...form, watermarking: v})}>
                    <SelectTrigger><SelectValue placeholder="Select watermarking"/></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">none</SelectItem>
                      <SelectItem value="visible">visible</SelectItem>
                      <SelectItem value="forensic">forensic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between rounded-2xl border p-3">
                  <div className="space-y-0.5">
                    <Label>Download to Go（端末内DL）</Label>
                    <p className="text-xs text-muted-foreground">アプリ内オフライン視聴の可否</p>
                  </div>
                  <Switch checked={form.download_to_go} onCheckedChange={(v)=>setForm({...form, download_to_go: Boolean(v)})} />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5"/> 独占/ホールドバック</CardTitle>
                <CardDescription>独占レベル・備考と他窓のホールドバック</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Exclusivity Level</Label>
                  <Select value={form.exclusivity.level} onValueChange={(v)=>setForm({...form, exclusivity: { ...form.exclusivity, level: v }})}>
                    <SelectTrigger><SelectValue placeholder="exclusivity"/></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">none</SelectItem>
                      <SelectItem value="period">period</SelectItem>
                      <SelectItem value="absolute">absolute</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Exclusivity Notes</Label>
                  <Input value={form.exclusivity.notes} onChange={(e)=>setForm({...form, exclusivity: { ...form.exclusivity, notes: e.target.value }})} />
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Holdbacks</Label>
                    <Button variant="secondary" size="sm" className="gap-2" onClick={addHoldback}><Plus className="h-4 w-4"/>追加</Button>
                  </div>
                  <div className="space-y-3">
                    {form.holdbacks.map((hb, i)=> (
                      <div key={i} className="grid grid-cols-12 items-end gap-2 rounded-xl border p-3">
                        <div className="col-span-4 space-y-1">
                          <Label>Type</Label>
                          <Select value={hb.type} onValueChange={(v)=>setForm((f)=>{ const arr=[...f.holdbacks]; arr[i]={...arr[i], type: v as any}; return {...f, holdbacks: arr}; })}>
                            <SelectTrigger><SelectValue/></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tvod">tvod</SelectItem>
                              <SelectItem value="svod">svod</SelectItem>
                              <SelectItem value="avod">avod</SelectItem>
                              <SelectItem value="est">est</SelectItem>
                              <SelectItem value="theatrical">theatrical</SelectItem>
                              <SelectItem value="broadcast">broadcast</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="col-span-4 space-y-1">
                          <Label>Start</Label>
                          <Input type="date" value={hb.start} onChange={(e)=>setForm((f)=>{ const arr=[...f.holdbacks]; arr[i]={...arr[i], start: e.target.value}; return {...f, holdbacks: arr}; })} />
                        </div>
                        <div className="col-span-3 space-y-1">
                          <Label>End (任意)</Label>
                          <Input type="date" value={hb.end ?? ""} onChange={(e)=>setForm((f)=>{ const arr=[...f.holdbacks]; arr[i]={...arr[i], end: e.target.value || undefined}; return {...f, holdbacks: arr}; })} />
                        </div>
                        <div className="col-span-1 flex justify-end">
                          <Button variant="ghost" size="icon" onClick={()=>removeHoldback(i)}><Trash2 className="h-4 w-4"/></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>ウィンドウ</CardTitle>
              <CardDescription>配信期間（複数可：initial / catchup / renewal）</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-end">
                <Button variant="secondary" size="sm" className="gap-2" onClick={addWindow}><Plus className="h-4 w-4"/>ウィンドウ追加</Button>
              </div>
              {form.windows.map((w, i)=> (
                <div key={i} className="grid grid-cols-12 items-end gap-2 rounded-xl border p-3">
                  <div className="col-span-3 space-y-1">
                    <Label>Type</Label>
                    <Select value={w.type} onValueChange={(v)=>setForm((f)=>{ const arr=[...f.windows]; arr[i] = { ...arr[i], type: v as any }; return { ...f, windows: arr }; })}>
                      <SelectTrigger><SelectValue/></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="initial">initial</SelectItem>
                        <SelectItem value="catchup">catchup</SelectItem>
                        <SelectItem value="renewal">renewal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-4 space-y-1">
                    <Label>Start</Label>
                    <Input type="date" value={w.start} onChange={(e)=>setForm((f)=>{ const arr=[...f.windows]; arr[i] = { ...arr[i], start: e.target.value }; return { ...f, windows: arr }; })} />
                  </div>
                  <div className="col-span-4 space-y-1">
                    <Label>End</Label>
                    <Input type="date" value={w.end ?? ""} onChange={(e)=>setForm((f)=>{ const arr=[...f.windows]; arr[i] = { ...arr[i], end: e.target.value || undefined }; return { ...f, windows: arr }; })} />
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <Button variant="ghost" size="icon" onClick={()=>removeWindow(i)}><Trash2 className="h-4 w-4"/></Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>プロモーション権・クレジット</CardTitle>
                <CardDescription>トレーラー／抜粋秒数／SNSブーストとクレジット表記</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-center justify-between rounded-2xl border p-3 md:col-span-2">
                  <div className="space-y-0.5">
                    <Label>Trailer 利用</Label>
                    <p className="text-xs text-muted-foreground">プラットフォーム・SNS等での告知用</p>
                  </div>
                  <Switch checked={form.promo_rights.trailer} onCheckedChange={(v)=>setForm({...form, promo_rights: {...form.promo_rights, trailer: Boolean(v)}})} />
                </div>
                <div className="space-y-2">
                  <Label>Clip Max Seconds</Label>
                  <Input type="number" value={form.promo_rights.clip_max_seconds} onChange={(e)=>setForm({...form, promo_rights: {...form.promo_rights, clip_max_seconds: Number(e.target.value)}})} />
                </div>
                <div className="flex items-center justify-between rounded-2xl border p-3">
                  <div className="space-y-0.5">
                    <Label>SNS Boost（有料配信）</Label>
                    <p className="text-xs text-muted-foreground">広告ブーストの可否</p>
                  </div>
                  <Switch checked={form.promo_rights.sns_boost} onCheckedChange={(v)=>setForm({...form, promo_rights: {...form.promo_rights, sns_boost: Boolean(v)}})} />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label>Credit Requirements</Label>
                  <Textarea value={form.credit_requirements} onChange={(e)=>setForm({...form, credit_requirements: e.target.value})} rows={3}/>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>仕様紐付け・クリアランス</CardTitle>
                <CardDescription>レポート/納品仕様の参照と現時点のクリアランス</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Report Spec ID</Label>
                    <Input value={form.report_spec_id} onChange={(e)=>setForm({...form, report_spec_id: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>Delivery Profile ID</Label>
                    <Input value={form.delivery_profile_id} onChange={(e)=>setForm({...form, delivery_profile_id: e.target.value})} />
                  </div>
                </div>
                <div className="rounded-2xl border p-3">
                  <div className="mb-2 text-sm font-medium">Clearance Snapshot</div>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div className="space-y-1">
                      <Label>Performer</Label>
                      <Input value={form.clearance_snapshot.performer} onChange={(e)=>setForm({...form, clearance_snapshot: { ...form.clearance_snapshot, performer: e.target.value }})} />
                    </div>
                    <div className="space-y-1">
                      <Label>Music</Label>
                      <Input value={form.clearance_snapshot.music} onChange={(e)=>setForm({...form, clearance_snapshot: { ...form.clearance_snapshot, music: e.target.value }})} />
                    </div>
                    <div className="space-y-1">
                      <Label>Trademark</Label>
                      <Input value={form.clearance_snapshot.trademark} onChange={(e)=>setForm({...form, clearance_snapshot: { ...form.clearance_snapshot, trademark: e.target.value }})} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
