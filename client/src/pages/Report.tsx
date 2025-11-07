// ===== STANDALONE EMPLOYEE SURVEY REPORT =====
// Bu dosyayı yeni projenize kopyalayıp yapıştırın
// Gereksinimler: lucide-react, @/components/ui/button, @/components/ui/card, @/components/ui/badge

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import { Users, TrendingUp, FileText, CheckCircle2, AlertTriangle, Building2, Heart, Share2, Instagram, Facebook, Clock, Printer } from "lucide-react";
import type { ReactNode } from "react";

// ===== INLINE COMPONENTS =====

function ReportHeader() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 px-6 md:px-8 rounded-xl shadow-lg mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start gap-4 flex-wrap">
          <div className="flex-1 min-w-[250px]">
            <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-report-title">
              Arnavutköy Belediyesi Çalışan Memnuniyeti ve İyi Oluş Anketi Değerlendirmesi
            </h1>
            <p className="text-primary-foreground/90 text-base md:text-lg">
              Kapsamlı Analiz Raporu
            </p>
          </div>
          <Button variant="secondary" size="default" onClick={handlePrint} className="no-print shrink-0" data-testid="button-print">
            <Printer className="w-4 h-4 mr-2" />
            Yazdır
          </Button>
        </div>
      </div>
    </div>
  );
}

interface KeyMetricsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  color?: "primary" | "success" | "warning" | "danger";
}

function KeyMetricsCard({ title, value, subtitle, icon: Icon, color = "primary" }: KeyMetricsCardProps) {
  const colorClasses = {
    primary: "border-l-primary bg-primary/5",
    success: "border-l-success bg-success/5",
    warning: "border-l-warning bg-warning/5",
    danger: "border-l-danger bg-danger/5"
  };

  const iconColorClasses = {
    primary: "text-primary",
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger"
  };

  return (
    <Card className={`p-6 border-l-4 ${colorClasses[color]} shadow-md hover-elevate`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg bg-card ${iconColorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl md:text-4xl font-bold mb-1">{value}</p>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
    </Card>
  );
}

interface SectionTitleProps {
  number?: string;
  title: string;
  subtitle?: string;
}

function SectionTitle({ number, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-3">
        {number && <span className="text-4xl font-bold text-primary">{number}</span>}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      </div>
      {subtitle && <p className="text-base text-muted-foreground mt-2 ml-12">{subtitle}</p>}
      <div className="h-1 bg-gradient-to-r from-primary to-transparent mt-4 rounded-full w-32" />
    </div>
  );
}

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

function ContentSection({ children, className = "", noPadding = false }: ContentSectionProps) {
  return (
    <Card className={`${noPadding ? '' : 'p-6 md:p-8'} shadow-sm ${className}`}>
      {children}
    </Card>
  );
}

interface ScoreDisplayProps {
  score: number;
  maxScore: number;
  label?: string;
  size?: "sm" | "md" | "lg";
}

function ScoreDisplay({ score, maxScore, label, size = "md" }: ScoreDisplayProps) {
  const percentage = (score / maxScore) * 100;
  const getColor = () => {
    if (percentage >= 87.5) return "text-success";
    if (percentage >= 62.5) return "text-warning";
    return "text-danger";
  };

  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl"
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`${sizeClasses[size]} font-bold ${getColor()}`} data-testid="text-score">
        {score.toFixed(2)}
        <span className="text-xl text-muted-foreground">/{maxScore.toFixed(2)}</span>
      </div>
      {label && <p className="text-sm text-muted-foreground text-center">{label}</p>}
    </div>
  );
}

interface DataTableColumn {
  header: string;
  key: string;
  align?: "left" | "center" | "right";
}

interface DataTableRow {
  [key: string]: string | number | "danger" | "warning" | "success" | undefined;
  _highlight?: "danger" | "warning" | "success";
}

interface DataTableProps {
  columns: DataTableColumn[];
  data: DataTableRow[];
}

function DataTable({ columns, data }: DataTableProps) {
  const getRowClass = (row: DataTableRow) => {
    if (row._highlight === "danger") return "bg-danger/10";
    if (row._highlight === "warning") return "bg-warning/10";
    if (row._highlight === "success") return "bg-success/10";
    return "";
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full" data-testid="table-data">
        <thead className="bg-muted">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className={`px-4 py-3 text-sm font-semibold text-foreground ${col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className={`${getRowClass(row)} hover-elevate`}>
              {columns.map((col, colIdx) => (
                <td key={colIdx} className={`px-4 py-3 text-sm ${col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"}`}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showPercentage?: boolean;
  color?: "primary" | "success" | "warning" | "danger";
  className?: string;
}

function ProgressBar({ value, max, label, showPercentage = true, color = "primary", className = "" }: ProgressBarProps) {
  const percentage = (value / max) * 100;
  
  const colorClasses = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger"
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">{label}</span>
          {showPercentage && <span className="text-sm font-semibold text-muted-foreground">{percentage.toFixed(1)}%</span>}
        </div>
      )}
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
        <div className={`h-full ${colorClasses[color]} transition-all duration-500 rounded-full`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
  trend?: {
    value: string;
    positive: boolean;
  };
}

function StatCard({ title, value, description, badge, trend }: StatCardProps) {
  return (
    <div className="p-5 bg-card border border-card-border rounded-lg hover-elevate">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {badge && <Badge variant={badge.variant || "default"} className="text-xs">{badge.text}</Badge>}
      </div>
      <div className="mb-2">
        <p className="text-3xl font-bold text-foreground">{value}</p>
      </div>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      {trend && (
        <div className={`text-sm font-medium mt-2 ${trend.positive ? 'text-success' : 'text-danger'}`}>
          {trend.positive ? '↑' : '↓'} {trend.value}
        </div>
      )}
    </div>
  );
}

// ===== MAIN REPORT COMPONENT =====

export default function EmployeeSurveyReport() {
  const workloadTableColumns = [
    { header: "Müdürlük Adı", key: "mudurلuk", align: "left" as const },
    { header: "İş Yükü Puanı (Ort: 2.23)", key: "puan", align: "center" as const },
    { header: "İş Yükünü Olumsuz Değerlendiren (Oran)", key: "oran", align: "center" as const },
  ];

  const workloadTableData = [
    { mudurلuk: "İmar ve Şehircilik", puan: "1.66", oran: "37 / 42 (%88.1)", _highlight: "danger" as const },
    { mudurلuk: "Veteriner İşleri", puan: "1.71", oran: "21 / 24 (%87.5)", _highlight: "danger" as const },
    { mudurلuk: "Fen İşleri", puan: "1.79", oran: "45 / 59 (%76.3)", _highlight: "danger" as const },
    { mudurلuk: "Zabıta", puan: "1.94", oran: "75 / 95 (%78.9)", _highlight: "danger" as const },
  ];

  const socialMediaTableColumns = [
    { header: "Müdürlük Adı", key: "mudurلuk", align: "left" as const },
    { header: "Belediye Takip %", key: "belediye", align: "center" as const },
    { header: "Başkan Takip %", key: "baskan", align: "center" as const },
  ];

  const socialMediaTableData = [
    { mudurلuk: "Temizlik İşleri", belediye: "68.7%", baskan: "66.9%", _highlight: "danger" as const },
    { mudurلuk: "Fen İşleri", belediye: "76.3%", baskan: "57.6%", _highlight: "danger" as const },
    { mudurلuk: "İşletme ve İştirakler", belediye: "75.0%", baskan: "75.0%", _highlight: "warning" as const },
    { mudurلuk: "Kültür İşleri", belediye: "75.6%", baskan: "73.2%", _highlight: "warning" as const },
    { mudurلuk: "İmar ve Şehircilik", belediye: "76.2%", baskan: "73.8%", _highlight: "danger" as const },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <ReportHeader />

        {/* Introduction */}
        <ContentSection className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">Giriş ve Genel Çerçeve</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bu rapor, Arnavutköy Belediyesi'nin en değerli varlığı olan çalışanlarının görüş, beklenti ve deneyimlerini anlamak üzere gerçekleştirilen kapsamlı "Çalışan Memnuniyeti ve İyi Oluş Anketi"nin temel bulgularını ve stratejik önerilerini sunmaktadır. Bu çalışma, belediyemizin Arnavutköy'e daha etkin ve kaliteli hizmet sunma vizyonunun bir parçası olarak, çalışanlarımızın sesini duymaya yönelik atılmış stratejik bir adımdır.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Basit bir memnuniyet ölçümünün ötesinde, bilimsel yöntemlerle kurumun tüm dinamiklerini anlamaya yönelik derinlemesine bir teşhis çalışması olarak tasarlanmıştır.
          </p>
          
          <h3 className="text-lg font-semibold mb-3 text-foreground">Raporun Ana Başlıkları:</h3>
          <ul className="space-y-2 mb-4">
            {[
              "Anketin Bilimsel Metodolojisi ve Kapsamı",
              "Genel Bakış: Kurumsal Bağlılık ve Güçlü Yönlerimiz",
              "Öncelikli Gelişim Alanları",
              "Kritik Müdürlüklerin Detaylı Profili",
              "Çalışan İyi Oluşu: Ruh Sağlığı Taraması Sonuçları",
              "Kurumsal İletişim (Sosyal Medya Hesapları)"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ContentSection>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <KeyMetricsCard title="Toplam Katılımcı" value="1470" subtitle="2125 personelden" icon={Users} color="primary" />
          <KeyMetricsCard title="Katılım Oranı" value="%68.7" subtitle="Yüksek temsil gücü" icon={TrendingUp} color="success" />
          <KeyMetricsCard title="Genel Memnuniyet" value="3.63/4.00" subtitle="Güçlü seviye" icon={FileText} color="success" />
        </div>

        {/* Section 1: Methodology */}
        <div className="mb-12">
          <SectionTitle number="1" title="Metodoloji, Kapsam ve Veri Güvenirliği" subtitle="Anketin bilimsel temeli ve güvenilirliği" />
          <ContentSection>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Bu bölüm, sunulan verilerin güvenirliğini ve analizlerin bilimsel temelini ortaya koyarak raporun kredibilitesini tesis etmektedir. Bulguların sağlam bir zemin üzerine inşa edildiğini göstermek amacıyla, anketin metodolojik altyapısı şeffaf bir şekilde paylaşılmıştır.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-l-primary pl-4 py-2">
                <h4 className="font-semibold text-foreground mb-2">Kapsam ve Katılım</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Anket, İnsan Kaynakları Müdürlüğü koordinasyonunda belediyemizin <strong>2125 personeline</strong> ulaştırılmıştır. Katılımı teşvik etmek amacıyla müdürlükler bizzat ziyaret edilerek anketin amacı ve önemi anlatılmıştır. Bu çabalar sonucunda <strong>1470 personelin katılımı</strong> sağlanmış ve <strong>%68.7'lik yüksek bir katılım oranına</strong> ulaşılmıştır.
                </p>
              </div>

              <div className="border-l-4 border-l-primary pl-4 py-2">
                <h4 className="font-semibold text-foreground mb-2">Veri Kaynakları</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Analizlerimiz, 1470 çalışandan toplanan sayısal verilere ek olarak, bu katılımcılardan <strong>456'sının yazdığı binlerce cümlelik açık uçlu yorumların</strong> entegre analizine dayanmaktadır. Rapor boyunca "NE olduğunu" gösteren sayısal puanlar ile bu durumun "NEDEN olduğunu" açıklayan sözel yorumlar birleştirilerek bütüncül bir anlayış sunulmuştur.
                </p>
              </div>

              <div className="border-l-4 border-l-primary pl-4 py-2">
                <h4 className="font-semibold text-foreground mb-2">Anketin Yapısı</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Anket, <strong>45 soru</strong> ile kurumsal aidiyet, amirlerle ilişkiler, rol netliği, ekip çalışması ve çalışma koşulları gibi temel kurumsal dinamikleri derinlemesine ölçmektedir. Bu temel yapıya ek olarak, çalışanlarımızın bütünsel sağlığını anlamak amacıyla 4 soruluk bir Psikolojik Sağlık Taraması, bir Kurumsal Sağlık Göstergesi (Sigara Kullanımı) ve bir Kurumsal İletişim Göstergesi (Sosyal Medya Takibi) de anket kapsamına dahil edilmiştir.
                </p>
              </div>

              <div className="border-l-4 border-l-primary pl-4 py-2">
                <h4 className="font-semibold text-foreground mb-2">Veri Güvenirliği ve Kalite Kontrolü</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Sunulan analizlerin istatistiksel güvenirliğini en üst düzeye çıkarmak için titiz bir kalite kontrol süreci uygulanmıştır. Anket içine gizlenmiş iki adet dikkat kontrol sorusu sayesinde, rastgele veya özensiz işaretleme yapan katılımcılar tespit edilmiştir. Bu kontrollere ve diğer iç tutarlılık kriterlerine uymayan <strong>219 anket analiz dışı bırakılarak</strong> veri kalitesi güvence altına alınmıştır.
                </p>
              </div>
            </div>
          </ContentSection>
        </div>

        {/* Section 2: Strengths */}
        <div className="mb-12">
          <SectionTitle number="2" title="Genel Bakış: Kurumsal Bağlılık ve Güçlü Yönlerimiz" subtitle="Organizasyonun en güçlü tarafları" />
          <ContentSection className="mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Analizimize, organizasyonumuzun en büyük sermayesi olan ve tüm iyileştirme çabalarımızın üzerine inşa edileceği güçlü yönlerimizi teşhis ederek başlıyoruz. Bu bölüm, belediyemizin en temel ve en olumlu yönlerini ortaya koyarak mevcut kurum kültürümüzün gücünü ve çalışanlarımızın motivasyon kaynaklarını sergilemektedir.
            </p>

            <div className="bg-success/10 border-l-4 border-l-success p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-success" />
                <h3 className="text-lg font-semibold text-foreground">Genel Memnuniyet (Ana Gösterge)</h3>
              </div>
              <div className="flex items-center justify-center py-4">
                <ScoreDisplay score={3.63} maxScore={4.00} label="Kurumumuzda çalışmaya yönelik genel memnuniyet" size="lg" />
              </div>
              <p className="text-muted-foreground mt-4 text-center">
                Puanlama Sistemi: 1: Kesinlikle Katılmıyorum, 4: Kesinlikle Katılıyorum<br />
                (2.50 puanın üzeri olumlu olarak değerlendirilmektedir)
              </p>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-foreground">Kurumsal Aidiyet ve Anlam Duygusu (En Güçlü Alanlar)</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Anketin en çarpıcı bulgusu, personelin kuruma olan yüksek bağlılığı ve yaptığı işi anlamlı bulma düzeyidir. Bu durum, güçlü bir kurum kültürünün ve kamu hizmeti bilincinin en net işaretidir:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-success/5 border border-success/20 p-5 rounded-lg">
                <ScoreDisplay score={3.77} maxScore={4.00} label="İşim aracılığıyla topluma/kamuya hizmet etmekten gurur duyuyorum" size="md" />
                <ProgressBar value={93.7} max={100} label="Olumlu Yanıt Oranı" color="success" className="mt-4" />
                <p className="text-xs text-muted-foreground mt-2 text-center">1251 kişiden 1173'ü olumlu yanıt verdi</p>
              </div>
              <div className="bg-success/5 border border-success/20 p-5 rounded-lg">
                <ScoreDisplay score={3.73} maxScore={4.00} label="Yaptığım işin toplum için anlamlı ve faydalı olduğunu düşünüyorum" size="md" />
              </div>
              <div className="bg-success/5 border border-success/20 p-5 rounded-lg">
                <ScoreDisplay score={3.69} maxScore={4.00} label="Yaptığım işi anlamlı buluyorum" size="md" />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-foreground mt-8">Ekip Çalışması ve Yatay İlişkiler (Güçlü Alan)</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Kurumsal bağlılığın yanı sıra, personelin kendi çalışma arkadaşlarıyla olan ilişkilerinin de son derece olumlu olduğu görülmektedir:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
                <ScoreDisplay score={3.69} maxScore={4.00} label="İş arkadaşlarımla uyum içinde çalışırım" size="md" />
              </div>
              <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
                <ScoreDisplay score={3.56} maxScore={4.00} label="İş arkadaşlarımın teknik/sosyal desteği işimi kolaylaştırır" size="md" />
              </div>
              <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
                <ScoreDisplay score={3.53} maxScore={4.00} label="Ekibimizde dayanışma güçlüdür" size="md" />
              </div>
            </div>
          </ContentSection>
        </div>

        {/* Section 3: Priority Development Areas */}
        <div className="mb-12">
          <SectionTitle number="3" title="Öncelikli Gelişim Alanları" subtitle="Çalışan memnuniyetini artırmak için odaklanılması gereken kritik alanlar" />
          <ContentSection className="mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Bu sağlam zemin üzerinde, şimdi veriye dayalı olarak tespit ettiğimiz ve çalışan memnuniyetini en çok etkileyen dört kritik gelişim alanına odaklanacağız. Bunları bir eksiklik olarak değil, gelişim alanı olarak görüyoruz. Bu alanlardaki iyileştirmeler, mevcut güçlü kurumsal bağın pekiştirilmesi için kritik öneme sahiptir.
            </p>

            {/* 3.1 Cafeteria */}
            <div className="bg-danger/5 border-l-4 border-l-danger p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-danger shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">3.1. Öncelikli Alan 1: Yemekhane Hizmetleri</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <ScoreDisplay score={2.29} maxScore={4.00} label="Yemekhane/yemek hizmeti kalitesinden memnunum" size="md" />
                    <div className="flex-1">
                      <ProgressBar value={56.3} max={100} label="Memnuniyetsizlik Oranı" color="danger" />
                      <p className="text-sm text-muted-foreground mt-2">634 çalışan (toplam 1127'den)</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Bu düşük ortalamanın arkasında, her 10 çalışandan yaklaşık 6'sının bu hizmetten memnun olmadığını belirtmesi yatmaktadır. Memnuniyetsizliğin nedenlerini derinlemesine anlamak için <strong>456 adet sözel yorum</strong> analiz edilmiştir. Yorumlar, sorunun 5 ana temadan kaynaklandığını göstermektedir:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StatCard title="Fiyat Farklılığı" value="145" description="Şirket personeli ve memur çalışanlar arasındaki fiyatlandırma farkı" badge={{ text: "En Sık", variant: "destructive" }} />
                <StatCard title="Kalite ve Lezzet" value="73" description="Yemeğin kalitesi, lezzeti, sıcaklığı ve porsiyon büyüklüğü" badge={{ text: "Yorum", variant: "secondary" }} />
                <StatCard title="Hijyen" value="25" description="Tepsi, çatal ve kaşıkların temizliği" badge={{ text: "Yorum", variant: "secondary" }} />
                <StatCard title="Alternatif Alan Talebi" value="14" description="Dışarıdan yemek getirenlere özel alan / kantin talebi" badge={{ text: "Yorum", variant: "secondary" }} />
              </div>
            </div>

            {/* 3.2 Transportation */}
            <div className="bg-warning/5 border-l-4 border-l-warning p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-warning shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">3.2. Öncelikli Alan 2: Servis (Ulaşım) Hizmetleri</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <ScoreDisplay score={2.71} maxScore={4.00} label="Servis (ulaşım) hizmeti kalitesi yeterlidir" size="md" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-2">Keskin bir kutuplaşma:</p>
                      <ProgressBar value={62.4} max={100} label="Memnun: 697 kişi" color="success" className="mb-2" />
                      <ProgressBar value={37.6} max={100} label="Memnun Değil: 420 kişi" color="danger" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Ulaşım hizmetleri, personelin güne başlarken ve günü bitirirken kurumla kurduğu ilk ve son temas noktasıdır; bu alandaki adalet algısı ve hizmet kalitesi, genel bağlılığı doğrudan etkiler.
              </p>

              <div className="bg-warning/10 p-4 rounded-lg">
                <p className="text-foreground font-medium mb-2">Sözel Analiz Bulgusu:</p>
                <p className="text-muted-foreground">
                  <strong>101 spesifik yorum</strong> incelenmiştir. Bu yorumların ezici çoğunluğu, memnuniyetsizliğin kaynağının <strong>"ilçe dışı servislerin kaldırılması"</strong> kararı olduğunu göstermektedir. Memnuniyet farkı, ilçe içi ve ilçe dışı servis kullanıcıları arasında belirginleşmektedir.
                </p>
              </div>
            </div>

            {/* 3.3 Workload */}
            <div className="bg-danger/5 border-l-4 border-l-danger p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-danger shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">3.3. Öncelikli Alan 3: Operasyonel Zorluklar (İş Yükü)</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <ScoreDisplay score={2.23} maxScore={4.00} label="İş Yükü Teması Genel Ortalaması" size="md" />
                    <div className="flex-1">
                      <ProgressBar value={57.5} max={100} label="İş Yükünü Olumsuz Değerlendirenler" color="danger" />
                      <p className="text-sm text-muted-foreground mt-2">719 kişi / 1251 katılımcıdan</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                İş yükü temasını (duygusal zorlanma, görev fazlalığı, talep yoğunluğu, zaman sıkışıklığı) ölçen soruların genel ortalaması düşük seviyededir. Bazı müdürlüklerde operasyonel tükenmişlik bariz bir sorun haline gelmiştir.
              </p>

              <h4 className="font-semibold text-foreground mb-3">Kırmızı Alarm Veren Müdürlükler:</h4>
              <DataTable columns={workloadTableColumns} data={workloadTableData} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-card p-4 rounded-lg border border-danger/20">
                  <h5 className="font-semibold text-foreground mb-2">Zabıta</h5>
                  <p className="text-sm text-muted-foreground">Yorumların yarısından fazlası: "çalışma saati", "40/48 saat" ve "nöbet" düzenlemeleri</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-danger/20">
                  <h5 className="font-semibold text-foreground mb-2">İmar ve Şehircilik</h5>
                  <p className="text-sm text-muted-foreground">"İş yoğunluğu", "stres", "vatandaş talepleri" ve "personel eksikliği"</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-danger/20">
                  <h5 className="font-semibold text-foreground mb-2">Fen İşleri</h5>
                  <p className="text-sm text-muted-foreground">"Saha araçlarının eski, konforsuz veya yetersiz" olması</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-danger/20">
                  <h5 className="font-semibold text-foreground mb-2">Veteriner İşleri</h5>
                  <p className="text-sm text-muted-foreground">"Personel eksikliği", "ağır iş yükü" ve "barınaktaki su sıkıntısı"</p>
                </div>
              </div>
            </div>

            {/* 3.4 Physical Conditions */}
            <div className="bg-warning/5 border-l-4 border-l-warning p-6 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <Building2 className="w-6 h-6 text-warning shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">3.4. Öncelikli Alan 4: Fiziksel Koşullar (Ortak Alanlar)</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1">
                      <ProgressBar value={36.4} max={100} label="Ortak alanları yetersiz bulanlar" color="warning" />
                      <p className="text-sm text-muted-foreground mt-2">453 kişi / 1251 katılımcıdan</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Ana Bina'daki şikayetler üç ana başlıkta toplanmaktadır:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <StatCard title="Dinlenme Alanı ve Çay Ocağı" value="43" description="yorum" badge={{ text: "En Sık", variant: "destructive" }} />
                <StatCard title="Tuvalet ve Hijyen Sorunları" value="32" description="yorum" />
                <StatCard title="Soyunma Odası ve Dolap" value="11" description="yorum" />
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong>Dinlenme Alanı ve Çay Ocağı Yetersizliği (43 yorum):</strong> En sık dile getirilen konu, personelin mola verebileceği, oturabileceği veya çay içebileceği alanların eksikliğidir.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong>Tuvalet ve Hijyen Sorunları (32 yorum):</strong> Tuvaletlerin "arızalı" veya "hijyenik" olmaması sıkça belirtilen bir diğer konudur.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>Soyunma Odası ve Dolap Eksikliği (11 yorum):</strong> Özellikle sahada çalışan ekiplerden gelen temel bir ihtiyaçtır.
              </p>

              <div className="bg-danger/10 p-5 rounded-lg border-l-4 border-l-danger">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-danger" />
                  Kritik Durum: Temizlik İşleri Müdürlüğü
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Sorunun Ana Bina'dan çok <strong>Dış Birimlerde kritik olduğu</strong> verilerle sabittir. Temizlik İşleri Müdürlüğü bu konuda "kırmızı alarm" vermektedir:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg">
                    <ScoreDisplay score={2.15} maxScore={4.00} label="Fiziksel Koşullar Puanı (Temizlik İşleri)" size="sm" />
                    <p className="text-sm text-muted-foreground mt-3">Kurumun en düşük puanı</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <ProgressBar value={71.8} max={100} label="Memnuniyetsizlik Oranı" color="danger" />
                    <p className="text-sm text-muted-foreground mt-3">116 kişiden 83'ü memnun değil</p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Bu müdürlükten gelen yorumlar, sorunun Ana Bina'daki gibi bir "yetersizlik" değil, <strong>"temel yokluk"</strong> olduğunu doğrulamaktadır:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-3 text-muted-foreground">
                  <li>"Dinlenme alanı yok"</li>
                  <li>"Soyunma odası ve dolap yok"</li>
                  <li>"Tuvalet ve lavabo yetersiz"</li>
                  <li>"Islak kıyafet değiştirme yeri yok"</li>
                </ul>
              </div>
            </div>
          </ContentSection>
        </div>

        {/* Section 4: Critical Departments */}
        <div className="mb-12">
          <SectionTitle number="4" title="Kritik Müdürlüklerin Detaylı Profili" subtitle="En zorlayıcı koşullarda çalışan birimlerin derinlemesine analizi" />
          
          {/* Cleaning Department */}
          <ContentSection className="mb-6">
            <div className="bg-danger/5 border-l-4 border-l-danger p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-danger" />
                Temizlik İşleri Müdürlüğü: Acil Müdahale Gerektiren Profil
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-card p-4 rounded-lg border border-danger/20">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">İş Yükü</h4>
                  <ScoreDisplay score={1.84} maxScore={4.00} size="sm" />
                  <p className="text-xs text-muted-foreground mt-2">En düşük ikinci puan</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-danger/20">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Fiziksel Koşullar</h4>
                  <ScoreDisplay score={2.15} maxScore={4.00} size="sm" />
                  <p className="text-xs text-muted-foreground mt-2">En düşük puan</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-danger/20">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Stres Seviyesi</h4>
                  <ScoreDisplay score={1.88} maxScore={4.00} size="sm" />
                  <p className="text-xs text-muted-foreground mt-2">En yüksek stres</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong>116 çalışandan sadece 2'si</strong> genel memnuniyetini olumlu değerlendirmiştir. Bu dramatik durum, kurumda en acil müdahale gerektiren birim olduğunun açık göstergesidir.
              </p>

              <div className="bg-warning/10 p-4 rounded-lg mt-4">
                <p className="text-foreground font-medium mb-2">Temel Sorunlar:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Temel ihtiyaçların bile karşılanmadığı çalışma ortamları</li>
                  <li>Fiziksel zorluk gerektiren işlerin beraberinde getirdiği yüksek stres</li>
                  <li>Kurumsal iletişim kanallarından kopukluk</li>
                  <li>Dinlenme, soyunma ve hijyen alanlarının tam yokluğu</li>
                </ul>
              </div>
            </div>
          </ContentSection>

          {/* Municipal Police */}
          <ContentSection>
            <div className="bg-warning/5 border-l-4 border-l-warning p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-warning" />
                Zabıta Müdürlüğü: Çalışma Saatleri Sorunu
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-card p-4 rounded-lg border border-warning/20">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">İş Yükü Puanı</h4>
                  <ScoreDisplay score={1.94} maxScore={4.00} size="sm" />
                  <ProgressBar value={78.9} max={100} label="Memnuniyetsizlik" color="danger" className="mt-3" />
                </div>
                <div className="bg-card p-4 rounded-lg border border-warning/20">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Katılımcı Sayısı</h4>
                  <p className="text-3xl font-bold text-foreground">95</p>
                  <p className="text-xs text-muted-foreground mt-2">75 kişi memnun değil</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Zabıta Müdürlüğü'nde memnuniyetsizliğin temel nedeni <strong>çalışma saatleri düzenlemeleridir</strong>. Yorumların yarısından fazlası "40/48 saat sistemi", "nöbet düzeni" ve "fazla mesai" konularına odaklanmaktadır.
              </p>

              <div className="bg-warning/10 p-4 rounded-lg">
                <p className="text-foreground font-medium mb-2">Öne Çıkan Talepler:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Çalışma saatleri düzenlemelerinin gözden geçirilmesi</li>
                  <li>Nöbet sisteminin iyileştirilmesi</li>
                  <li>İş-yaşam dengesinin sağlanması</li>
                  <li>Fazla mesai uygulamalarının adil dağılımı</li>
                </ul>
              </div>
            </div>
          </ContentSection>
        </div>

        {/* Section 5: Mental Health */}
        <div className="mb-12">
          <SectionTitle number="5" title="Çalışan İyi Oluşu: Ruh Sağlığı Taraması Sonuçları" subtitle="Kurumsal performansın temel taşı olarak psikolojik sağlık" />
          <ContentSection>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Kurumumuzun sürdürülebilir başarısı, çalışanlarımızın yalnızca fiziksel değil, psikolojik sağlıklarına da bağlıdır. Bu bölümde, WHO-5 İyi Oluş Endeksi ile ölçülen psikolojik sağlık durumumuzu paylaşıyoruz.
            </p>

            <div className="bg-primary/5 border-l-4 border-l-primary p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">WHO-5 İyi Oluş Endeksi Genel Sonuç</h3>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary">%35.7</div>
                  <p className="text-sm text-muted-foreground mt-2">Risk altında olabilecek çalışan oranı</p>
                  <p className="text-xs text-muted-foreground mt-1">(447 kişi / 1251 katılımcıdan)</p>
                </div>
              </div>
            </div>

            <div className="bg-warning/10 p-5 rounded-lg border-l-4 border-l-warning mb-6">
              <h4 className="font-semibold text-foreground mb-3">Kritik Bulgular:</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Her 3 çalışanımızdan yaklaşık 1'i, ruh sağlığı açısından profesyonel desteğe ihtiyaç duyabilecek bir profile sahiptir. Bu durum, kurumumuzun performansını ve çalışan refahını doğrudan etkileyebilecek bir durumu işaret etmektedir.
              </p>
              <p className="text-foreground font-medium">
                Önerilen Acil Adımlar:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                <li>Psikolojik destek mekanizmalarının güçlendirilmesi</li>
                <li>Stres yönetimi programlarının başlatılması</li>
                <li>İş-yaşam dengesi konusunda farkındalık çalışmaları</li>
                <li>Özellikle yüksek riskli müdürlüklerde bireysel destek sistemleri</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-5 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-3">En Yüksek Risk: Temizlik İşleri</h4>
                <ProgressBar value={52.6} max={100} label="Risk Altında Olan Oran" color="danger" />
                <p className="text-sm text-muted-foreground mt-3">116 çalışanın yarısından fazlası risk altında</p>
              </div>
              <div className="bg-card p-5 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-3">Genel Dağılım</h4>
                <ProgressBar value={64.3} max={100} label="İyi Oluş Durumu Pozitif" color="success" className="mb-2" />
                <ProgressBar value={35.7} max={100} label="Risk Altında Olabilir" color="danger" />
              </div>
            </div>
          </ContentSection>
        </div>

        {/* Section 6: Social Media */}
        <div className="mb-12">
          <SectionTitle number="6" title="Kurumsal İletişim: Sosyal Medya Hesapları" subtitle="Çalışanların kurumsal dijital platformlarla bağlantı düzeyi" />
          <ContentSection>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Modern kurumsal iletişimin önemli bir ayağı olan sosyal medya platformları, personelin kurum haberlerine ve duyurularına ne ölçüde erişebildiğini gösterir. Bu bölümde, çalışanlarımızın belediye ve başkan sosyal medya hesaplarını takip etme oranlarını inceliyoruz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#E4405F20' }}>
                    <Instagram className="w-6 h-6" style={{ color: '#E4405F' }} />
                  </div>
                  <h4 className="font-semibold text-foreground">Instagram</h4>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">%97.0</p>
                <p className="text-sm text-muted-foreground">En popüler platform</p>
              </div>

              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#1DA1F220' }}>
                    <Share2 className="w-6 h-6" style={{ color: '#1DA1F2' }} />
                  </div>
                  <h4 className="font-semibold text-foreground">Twitter (X)</h4>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">%33.0</p>
                <p className="text-sm text-muted-foreground">Daha az tercih ediliyor</p>
              </div>

              <div className="bg-card p-5 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#1877F220' }}>
                    <Facebook className="w-6 h-6" style={{ color: '#1877F2' }} />
                  </div>
                  <h4 className="font-semibold text-foreground">Facebook</h4>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">%26.7</p>
                <p className="text-sm text-muted-foreground">En az kullanılan</p>
              </div>
            </div>

            <div className="bg-warning/10 p-5 rounded-lg border-l-4 border-l-warning mb-6">
              <h4 className="font-semibold text-foreground mb-3">Genel Takip Oranları</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ProgressBar value={76.5} max={100} label="Belediye Hesaplarını Takip Edenler" color="primary" />
                  <p className="text-sm text-muted-foreground mt-2">958 çalışan (1251'den)</p>
                </div>
                <div>
                  <ProgressBar value={69.1} max={100} label="Başkan Hesaplarını Takip Edenler" color="primary" />
                  <p className="text-sm text-muted-foreground mt-2">865 çalışan (1251'den)</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-foreground mb-3">Müdürlük Bazlı Takip Oranları (En Düşük 5)</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Bu iletişim kopukluğu tüm birimlere eşit yayılmamıştır. Özellikle, en yüksek iş yükü, en kötü fiziksel koşullar ve en yüksek stres seviyelerine sahip olan Temizlik İşleri, Fen İşleri ve İmar ve Şehircilik Müdürlüklerinin aynı zamanda kurumsal iletişim kanallarından en kopuk birimler olması, bu müdürlüklerdeki sorunların bir <strong>'izolasyon döngüsüne'</strong> dönüştüğünü göstermektedir.
            </p>

            <DataTable columns={socialMediaTableColumns} data={socialMediaTableData} />
          </ContentSection>
        </div>

      </div>
    </div>
  );
}
