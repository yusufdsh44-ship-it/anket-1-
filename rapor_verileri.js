// Rapor verileri - otomatik oluşturuldu
const RAPOR_VERILERI = {
    belediyeGeneli: `<h1>Arnavutköy Belediyesi - Çalışan Memnuniyeti Analizi</h1>

<h2>Temel Göstergeler</h2>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:55%;">Gösterge</th>
            <th style="width:45%;">Değer</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Kapsam</strong></td>
            <td class="value">30 müdürlük, 2.089 personel</td>
        </tr>
        <tr>
            <td class="label"><strong>Ankete Katılım</strong></td>
            <td class="value">1.470 kişi (%70,4)</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%90,8</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar)</span>
            </td>
            <td class="value">%69,1</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları vb.)</span>
            </td>
            <td class="value">%82,3</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+13,2</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%52,2</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">456 kişi (%31,0)</td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h3 style="margin-top:0;">Genel Değerlendirme ve Sonuç</h3>

<p>Bu çalışan memnuniyeti anketi, belediyemizin 30 müdürlüğünde görev yapan <strong>2.089 personelden 1.470'ine</strong> (%70,4) ulaşmış, bunların 456'sı (%31,0) açık uçlu yorum da yazmıştır. <strong>Genel memnuniyet %90,8</strong> ile yüksek düzeydedir.</p>

<p><strong>🌟 Belediyemizin Güçlü Yönleri</strong></p>
<p>Personelimiz topluma hizmet etmekten gurur duymaktadır (%94,5). İşlerini anlamlı bulmakta (%92,4), amirleriyle iletişimlerini olumlu değerlendirmekte (%92,2) ve ekip uyumu yüksek seviyede seyretmektedir (%86,9). Bu güçlü motivasyon ve dayanışma, çalışma koşullarına rağmen memnuniyetin yüksek kalmasının temel nedenidir.</p>

<p><strong>⚠️ İyileştirilmesi Gereken Alanlar</strong></p>
<p>Anket sonuçları ve açık uçlu yorumlar birlikte değerlendirildiğinde, belediye genelinde beş temel sorun alanı öne çıkmaktadır:</p>

<table style="margin:1em 0; width:100%;">
<thead>
<tr style="background:#f0f0f0;">
<th style="text-align:left; padding:8px;">Sorun Alanı</th>
<th style="text-align:center; padding:8px;">Anket Skoru</th>
<th style="text-align:center; padding:8px;">Açık Uçlu Yorum</th>
<th style="text-align:left; padding:8px;">En Çok Şikayet Eden Birimler</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px;"><strong>Yemek Hizmeti</strong></td>
<td style="text-align:center; padding:8px; color:#c0392b;"><strong>%57,2</strong> (en düşük)</td>
<td style="text-align:center; padding:8px;">83 yorum</td>
<td style="padding:8px;">Emlak (12), Yazı İşleri (12), İnovasyon (11)</td>
</tr>
<tr style="background:#fafafa;">
<td style="padding:8px;"><strong>Servis Güzergahları</strong></td>
<td style="text-align:center; padding:8px; color:#c0392b;">%67,7</td>
<td style="text-align:center; padding:8px;">32 yorum</td>
<td style="padding:8px;">Zabıta (8), Emlak (5), Plan Proje (3)</td>
</tr>
<tr>
<td style="padding:8px;"><strong>Ücret/Maaş</strong></td>
<td style="text-align:center; padding:8px;">%69,0</td>
<td style="text-align:center; padding:8px;"><strong>116 yorum</strong> (en çok)</td>
<td style="padding:8px;">Zabıta (28), Emlak (10), Sosyal Destek (9)</td>
</tr>
<tr style="background:#fafafa;">
<td style="padding:8px;"><strong>Ortak Alanlar</strong></td>
<td style="text-align:center; padding:8px;">%70,4</td>
<td style="text-align:center; padding:8px;">81 yorum</td>
<td style="padding:8px;">Temizlik İşleri (66), Kültür (3), Plan Proje (3)</td>
</tr>
<tr>
<td style="padding:8px;"><strong>Yönetici İlişkileri</strong></td>
<td style="text-align:center; padding:8px;">%86,8 (genel iyi)</td>
<td style="text-align:center; padding:8px;">37 yorum</td>
<td style="padding:8px;">Temizlik (12), Sosyal Destek (7), Zabıta (5)</td>
</tr>
</tbody>
</table>

<p style="font-size:10pt; margin-top:1em;"><strong>Analiz:</strong></p>

<p style="font-size:10pt; margin-top:0.5em;"><strong>Yemek Hizmeti (%57,2):</strong> Belediye genelinde en düşük memnuniyet alanı olarak tespit edilmiştir. Açık uçlu yorumlarda yemek kalitesi, çeşitliliği ve hijyen koşulları konusunda iyileştirme beklentisi ifade edilmektedir. Büro birimlerinden gelen yorumlarda fiyat-kalite dengesi sorgulanmaktadır. Memur-işçi arasındaki fiyat farkının giderilmesi ve şirket çalışanlarının yedikleri kadar ödeme yapabilecekleri esnek bir sistem talep edilmektedir.</p>

<p style="font-size:10pt; margin-top:0.5em;"><strong>Servis Güzergahları (%67,7):</strong> Tasarruf tedbirleri kapsamında ilçe dışı servislerin kaldırılmasının motivasyonu olumsuz etkilediği bildirilmektedir. Mevcut güzergahların uzun ve dolambaçlı olduğu, bazı hatlarda ayakta yolculuk yapıldığı ifade edilmektedir. Güzergah değişikliklerinde eşitlik beklentisi ön plana çıkmaktadır.</p>

<p style="font-size:10pt; margin-top:0.5em;"><strong>Ücret/Maaş (%69,0):</strong> En fazla açık uçlu yorum alan konu olarak dikkat çekmektedir. Yorumlarda İstanbul'daki diğer belediyelerle maaş karşılaştırması yapılmaktadır. Özellikle saha çalışanları arasında maktu mesai, SDS ve fazla mesai ödemelerinin iyileştirilmesi talep edilmektedir. Farklı statüdeki personel arasındaki ücret farklarının dengelenmesi beklentisi mevcuttur.</p>

<p style="font-size:10pt; margin-top:0.5em;"><strong>Ortak Alanlar (%70,4):</strong> Saha birimlerinde altyapı eksiklikleri bildirilmektedir. Tuvalet sayısının yetersizliği, soyunma odası ve kişisel dolap bulunmaması, çay ocağı ve dinlenme alanlarının kısıtlılığı dile getirilmektedir. Özellikle kalabalık saha birimlerinde fiziksel çalışma koşullarının iyileştirilmesi beklentisi mevcuttur.</p>

<p style="font-size:10pt; margin-top:0.5em;"><strong>Yönetici İlişkileri (%86,8):</strong> Genel olarak güçlü düzeyde seyretmekle birlikte, bazı birimlerde iletişim konusunda iyileştirme beklentisi tespit edilmiştir. Saha birimlerinden şef/amir iletişimine yönelik, büro birimlerinden ise geri bildirim ve takdir konusunda görüşler bildirilmektedir. Eşit ve adil muamele beklentisi ön plana çıkmaktadır.</p>

<p><strong>Kurum Desteği - İş Stresi/Yükü Dengesi</strong></p>

<table style="width:100%; border-collapse:collapse; font-size:9.5pt; margin:1em 0;">
<tr>
<td style="width:48%; vertical-align:top; padding-right:2%;">
<table style="width:100%; border:1px solid #333; border-collapse:collapse;">
<tr style="background:#C86A3C; color:white;">
<td colspan="2" style="padding:8px; font-weight:bold; text-align:center; border-bottom:1px solid #333;">İŞ STRESİ / YÜKÜ</td>
</tr>
<tr style="border-bottom:1px solid #ddd;">
<td style="padding:6px 8px;">Görev yükü</td>
<td style="padding:6px 8px; text-align:right;">%70,4</td>
</tr>
<tr style="background:#f5f5f5; border-bottom:1px solid #ddd;">
<td style="padding:6px 8px;">Vatandaş/başvuru yoğunluğu</td>
<td style="padding:6px 8px; text-align:right;">%70,6</td>
</tr>
<tr style="border-bottom:1px solid #ddd;">
<td style="padding:6px 8px;">Duygusal zorlayıcılık</td>
<td style="padding:6px 8px; text-align:right;">%70,8</td>
</tr>
<tr style="background:#f5f5f5; border-bottom:1px solid #999;">
<td style="padding:6px 8px;">Zaman sıkışıklığı</td>
<td style="padding:6px 8px; text-align:right;">%64,7</td>
</tr>
<tr style="background:#ddd; font-weight:bold;">
<td style="padding:8px;">ORTALAMA</td>
<td style="padding:8px; text-align:right;">%69,1</td>
</tr>
</table>
</td>
<td style="width:48%; vertical-align:top; padding-left:2%;">
<table style="width:100%; border:1px solid #333; border-collapse:collapse;">
<tr style="background:#C86A3C; color:white;">
<td colspan="2" style="padding:8px; font-weight:bold; text-align:center; border-bottom:1px solid #333;">KURUMSAL DESTEK</td>
</tr>
<tr style="border-bottom:1px solid #ddd;">
<td style="padding:6px 8px;">Yönetici ilişkileri</td>
<td style="padding:6px 8px; text-align:right;">%86,8</td>
</tr>
<tr style="background:#f5f5f5; border-bottom:1px solid #ddd;">
<td style="padding:6px 8px;">Ekip uyumu</td>
<td style="padding:6px 8px; text-align:right;">%86,9</td>
</tr>
<tr style="border-bottom:1px solid #ddd;">
<td style="padding:6px 8px;">Görev-rol netliği</td>
<td style="padding:6px 8px; text-align:right;">%86,6</td>
</tr>
<tr style="background:#f5f5f5; border-bottom:1px solid #ddd;">
<td style="padding:6px 8px;">Kurumsal iletişim</td>
<td style="padding:6px 8px; text-align:right;">%79,8</td>
</tr>
<tr style="border-bottom:1px solid #ddd;">
<td style="padding:6px 8px;">Eğitim ve gelişim</td>
<td style="padding:6px 8px; text-align:right;">%75,8</td>
</tr>
<tr style="background:#f5f5f5; border-bottom:1px solid #999;">
<td style="padding:6px 8px;">Çalışma koşulları</td>
<td style="padding:6px 8px; text-align:right;">%72,2</td>
</tr>
<tr style="background:#ddd; font-weight:bold;">
<td style="padding:8px;">ORTALAMA</td>
<td style="padding:8px; text-align:right;">%82,3</td>
</tr>
</table>
</td>
</tr>
</table>

<p style="text-align:center; margin:0.8em 0; padding:10px; background:#f0f0f0; border:1px solid #999; font-size:10pt;">
<strong>DENGE</strong> = Kurumsal Destek (%82,3) − İş Stresi/Yükü (%69,1) = <strong>+13,2 puan</strong>
</p>

<p style="font-size:9.5pt;">Bu ankette memnuniyet oranının yanı sıra, endüstriyel psikoloji alanında yaygın olarak kullanılan <strong>JD-R Modeli</strong> ile Kurum Desteği - İş Stresi/Yükü Dengesi de ölçülmüştür. Memnuniyet skoru anketin sonucunu, Kurum Desteği - İş Stresi/Yükü Dengesi ise bu sonucun nedenini göstermektedir. Bu sayede memnuniyetin sürdürülebilir olup olmadığı ve hangi birimlerde önleyici müdahale gerektiği tespit edilebilmektedir.</p>

<p>Belediye geneli denge <strong>+13,2 puan</strong> ile pozitiftir. Ancak birimler arasında önemli farklılıklar bulunmaktadır:</p>
<ul style="margin-top:0.5em;">
<li><strong>3 müdürlükte denge negatiftir</strong> (öncelikli olarak ele alınmalıdır): Veteriner İşleri (-3,5), Gelirler (-2,5), İmar ve Şehircilik (-2,3)</li>
<li><strong>Saha-büro farkı dikkat çekicidir:</strong> Saha birimleri (9 birim) ortalama +7,6 denge ile orta seviyede, büro birimleri (21 birim) ise +17,4 ile sağlıklı seviyededir. Bu 10 puanlık fark, saha personelinin daha fazla desteğe ihtiyaç duyduğunu göstermektedir.</li>
</ul>

<p><strong>🩺 Ruh Sağlığı Bulguları</strong></p>
<p>Personelin yaklaşık <strong>yarısı</strong> son 2 haftada psikolojik belirtiler yaşadığını bildirmiştir: gerginlik/kaygı (%50,8), üzgünlük/çökkünlük (%50,9), endişeleri kontrol edememe (%50,9). Analizler göstermektedir ki iş stresi/yükü arttıkça ruh sağlığı riski artmakta, ancak <strong>kurum desteği güçlü olan birimlerde bu risk belirgin şekilde düşmektedir</strong>.</p>
<p>Bu doğrultuda fiziksel çalışma koşulları, yönetici ilişkileri, ekip uyumu ve iş yükü dengesi gibi kurumsal destek mekanizmalarının güçlendirilmesi ruh sağlığı riskini azaltmada önemli rol oynamaktadır. Buna ek olarak, personelin ruh sağlığı yalnızca iş yaşamından ibaret olmadığından, kurum psikoloğu tarafından hem belediye genelinde hem de müdürlük bazında psikolojik destek aksiyon planları hazırlanacaktır. Kurumsal iyileştirmeler ve psikolojik destek programlarının birlikte yürütülmesiyle bir sonraki ankette daha olumlu sonuçlar alınması beklenmektedir.</p>

<p><strong>📱 Sosyal Medya Takip Oranları</strong></p>
<p>Personelin kurumsal sosyal medya hesaplarını takip oranları:</p>
<ul style="margin-top:0.5em; columns:2;">
<li>Instagram Belediye: %81,0</li>
<li>Instagram Başkan: %76,9</li>
<li>Facebook Belediye: %42,8</li>
<li>Facebook Başkan: %39,6</li>
<li>Twitter/X Belediye: %31,1</li>
<li>Twitter/X Başkan: %29,3</li>
<li>NextSosyal Belediye: %17,8</li>
<li>NextSosyal Başkan: %17,6</li>
</ul>
<p><em>Instagram açık ara en çok takip edilen platform olup, personelin büyük çoğunluğu belediye hesabını takip etmektedir.</em></p>

<p><strong>🚬 Sigara Kullanımı:</strong> Belediye genelinde %44,9. En yüksek: Koordinasyon (%71,4), İklim Değişikliği (%70,6), Fen İşleri (%62,7).</p>

<hr style="margin:1.5em 0; border:none; border-top:1px solid #ccc;">

<p><strong>📊 Müdürlük Bazlı Özet Bulgular</strong></p>
<p style="font-size:10pt; color:#555; margin-bottom:0.3em;"><em>Aşağıdaki tablo özet bilgi içermektedir. Her müdürlüğün detaylı analizi için ilgili müdürlük raporuna bakınız.</em></p>
<p style="font-size:9pt; color:#666; margin-bottom:0.2em;"><strong>Denge:</strong> Kurum Desteği - İş Stresi/Yükü farkıdır. Pozitif değer yeterli destek, negatif değer yetersiz destek anlamına gelmektedir.</p>
<p style="font-size:9pt; color:#666; margin-bottom:0.5em;"><strong>Memn.:</strong> Genel memnuniyet oranı.</p>

<p><em>Belediye Geneli ve 30 Müdürlük Karşılaştırmalı Analizi</em></p>

<table style="margin:1em 0; width:100%; font-size:9pt;">
<thead>
<tr style="background:#C86A3C; color:white;">
<th style="text-align:left; padding:8px; width:18%;">Müdürlük</th>
<th style="text-align:center; padding:8px; width:7%;">Memn.</th>
<th style="text-align:center; padding:8px; width:7%;">Denge</th>
<th style="text-align:left; padding:8px; width:68%;">Dikkat Çekici Bulgular (Özet)</th>
</tr>
</thead>
<tbody>
<tr style="background:#ecf0f1; font-weight:bold;">
<td style="padding:6px;">BELEDİYE GENELİ</td>
<td style="text-align:center; padding:6px;">%90,8</td>
<td style="text-align:center; padding:6px;">+13,2</td>
<td style="padding:6px;">2.089 personelden 1.470'i ankete katılmıştır. 456 kişi açık uçlu yorum yazmıştır. Güçlü yönler: kamu hizmeti motivasyonu, iş-kişi uyumu, topluma hizmet gururu. Personelin yarısı son 2 haftada psikolojik belirti bildirmektedir. En düşük skorlar: yemek (%57,2), servis, ücret, ortak alanlar. Saha-büro birimleri arasında 10 puanlık denge farkı bulunmaktadır. 3 müdürlükte negatif denge tespit edilmiştir.</td>
</tr>
<tr style="background:#ffebee;">
<td style="padding:6px;">TEMİZLİK İŞLERİ</td>
<td style="text-align:center; padding:6px;">%91,9</td>
<td style="text-align:center; padding:6px;">+5,5</td>
<td style="padding:6px;">Güçlü kamu hizmeti motivasyonu. Ancak şantiye altyapısı en kritik sorun: 62 kişiden çoğu tuvalet, soyunma odası ve hijyen şikayeti bildirmiştir. Yönetici ilişkileri belediye ortalamasının altında, amir eşitliği algısı düşük. En düşük katılım oranı (%37,2) dikkat çekicidir.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">DESTEK HİZMETLERİ</td>
<td style="text-align:center; padding:6px; color:#27ae60;">%95,1</td>
<td style="text-align:center; padding:6px;">+24,5</td>
<td style="padding:6px;">Belediyenin en yüksek eğitim-gelişim skoru. Çok güçlü performans. Çalışma arkadaşları ortalamanın üzerinde, yönetici ilişkileri ortalama düzeyde. Tek sorun yemekhane ve ücret memnuniyeti. Saha personeli araç/ekipman takviyesi talep etmektedir.</td>
</tr>
<tr style="background:#fff3e0;">
<td style="padding:6px;">ZABITA</td>
<td style="text-align:center; padding:6px; color:#c0392b;">%83,2</td>
<td style="text-align:center; padding:6px; color:#e67e22;">+3,1</td>
<td style="padding:6px;">Yüksek iş stresi/yükü. 62 kişi açık uçlu yorum yazarak görüş bildirme motivasyonu göstermiştir. 28 kişi ücret/SDS şikayeti: İstanbul geneli zabıta haklarıyla eşitlik talep edilmektedir. Kamu hizmeti motivasyonu güçlü ancak fiziksel koşullar yetersiz, servis güzergahı iyileştirme beklemektedir.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">GENÇLİK VE SPOR</td>
<td style="text-align:center; padding:6px;">%92,7</td>
<td style="text-align:center; padding:6px;">+22,3</td>
<td style="padding:6px;">10 temanın tamamında belediye ortalaması üzerinde performans - belediyenin en dengeli birimlerinden. Çalışma arkadaşları, yönetici ilişkileri ve kamu hizmeti motivasyonu çok güçlü. Düşük iş stresi/yükü. Belediyenin en düşük sigara kullanımlarından. Tek zayıf alan yemekhane.</td>
</tr>
<tr style="background:#ffebee;">
<td style="padding:6px;">FEN İŞLERİ</td>
<td style="text-align:center; padding:6px;">%88,1</td>
<td style="text-align:center; padding:6px; color:#e67e22;">+1,7</td>
<td style="padding:6px;"><strong>Belediyenin en yüksek ruh sağlığı riski (%63,7)</strong> bu birimde tespit edilmiştir. Kamu hizmeti motivasyonu güçlü olmakla birlikte ekip uyumu ortalamanın altında. Saha araçları sorunu kritik: "Araçlar çok eski, sarsıntılar yorucu" ifadeleri yaygın. Amir eşitliği düşük, sigara kullanımı yüksek. Yemek kalitesi ve servis şikayetleri mevcut. +1,7 denge ile kurumsal destek yetersiz görünmektedir.</td>
</tr>
<tr style="background:#fff3e0;">
<td style="padding:6px;">SOSYAL DESTEK</td>
<td style="text-align:center; padding:6px;">%89,9</td>
<td style="text-align:center; padding:6px;">+5,2</td>
<td style="padding:6px;">Belediyenin en yüksek kamu hizmeti motivasyonlarından birine sahip. Topluma hizmet gururu ve işin toplum için faydalılığı tam puana yakın. Ancak görev-rol netliği ve eğitim imkanları zayıf. Ekip uyumu ve yönetici ilişkileri ortalamanın altında, 7 kişi yönetici şikayeti bildirmiştir. Kurum içi etkinlik ve gezi talebi yaygındır.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">KÜLTÜR İŞLERİ</td>
<td style="text-align:center; padding:6px;">%89,6</td>
<td style="text-align:center; padding:6px;">+21,9</td>
<td style="padding:6px;">Düşük iş stresi/yükü ile güçlü denge. Çok düşük sigara kullanımı. Yönetici ilişkileri ve kurum içi iletişim güçlü, çalışma arkadaşları ortalamanın altında. Görev-rol netliği en zayıf alan. Personel tuvaletlerinin ayrılması ve yardımcı personel takviyesi talep edilmektedir.</td>
</tr>
<tr>
<td style="padding:6px;">PARK VE BAHÇELER</td>
<td style="text-align:center; padding:6px;">%91,7</td>
<td style="text-align:center; padding:6px;">+7,4</td>
<td style="padding:6px;">Belediyenin en yüksek kamu hizmeti motivasyonlarından - topluma hizmet gururu ve işin anlamlılığı çok yüksek. Saha birimi olmasına rağmen çalışma koşulları ortalamanın üzerinde. Ancak ruh sağlığı riski yüksek, ekip uyumu ortalamanın altında. Yönetici ilişkileri ortalama düzeyde. Hiç açık uçlu yorum yazılmamış olması dikkat çekicidir.</td>
</tr>
<tr style="background:#ffcdd2;">
<td style="padding:6px;">İMAR VE ŞEHİRCİLİK</td>
<td style="text-align:center; padding:6px;">%87,5</td>
<td style="text-align:center; padding:6px; color:#c0392b;"><strong>-2,3</strong></td>
<td style="padding:6px;"><strong>NEGATİF DENGE (-2,3).</strong> Belediyenin en yüksek vatandaş yoğunluğu ve iş stresi/yükü. Yönetici ilişkileri güçlü olmasına rağmen kurumsal destek yetersiz. Vatandaş iletişiminde stres: "Küfür yiyoruz, saygısızlık çok oluyor" şikayeti mevcut. Yemekhane ve servis skorları düşük. Kamu hizmeti motivasyonu güçlü - personel takviyesi acil görünmektedir.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">İNOVASYON</td>
<td style="text-align:center; padding:6px; color:#27ae60;">%95,3</td>
<td style="text-align:center; padding:6px;">+24,2</td>
<td style="padding:6px;">Belediyenin en yüksek iş-kişi uyumu. Çok güçlü performans. Yönetici ilişkileri, ekip uyumu ve kamu hizmeti motivasyonu belediyenin en yüksek düzeylerinde. 10 temadan 9'unda ortalamanın üzerinde. Tek sorun yemekhane: "Her ankette şikayet ediyoruz ama değişen bir şey yok" ifadesi dikkat çekici.</td>
</tr>
<tr style="background:#ffcdd2;">
<td style="padding:6px;">GELİRLER</td>
<td style="text-align:center; padding:6px;">%87,1</td>
<td style="text-align:center; padding:6px; color:#c0392b;"><strong>-2,5</strong></td>
<td style="padding:6px;"><strong>NEGATİF DENGE (-2,5).</strong> Vatandaş iletişiminden kaynaklanan yüksek duygusal zorlanma ve yoğunluk. Fiziksel koşullar kritik: ısıtma, ortak alanlar, temizlik düşük. Yemekhane memur-şirket personeli eşitsizliği "büyük haksızlık" olarak nitelenmektedir. Yönetici ilişkileri ve ekip uyumu ortalamanın altında. Kariyer gelişimi ve ödül sistemi talep edilmektedir.</td>
</tr>
<tr style="background:#ffcdd2;">
<td style="padding:6px;">VETERİNER İŞLERİ</td>
<td style="text-align:center; padding:6px;">%86,5</td>
<td style="text-align:center; padding:6px; color:#c0392b;"><strong>-3,5</strong></td>
<td style="padding:6px;"><strong>BELEDİYENİN EN DÜŞÜK DENGESİ (-3,5).</strong> Amir eşitliği algısı düşük - personel amirlerin adil davranışı konusunda iyileştirme beklemektedir. İş stresli ve tehlikeli, ücret yetersiz: "Diğer ilçe belediyelerine göre maaşlarımız çok düşük" şikayeti yaygın. Yassıören barınağı altyapısı kritik: hijyen, güvenlik, ekipman yetersiz. Kamu hizmeti motivasyonu güçlü ancak kurumsal destek karşılamıyor. Psikolojik destek sunulması önerilmektedir.</td>
</tr>
<tr>
<td style="padding:6px;">YAZI İŞLERİ</td>
<td style="text-align:center; padding:6px;">%90,5</td>
<td style="text-align:center; padding:6px;">+19,1</td>
<td style="padding:6px;">%100 anket katılımı ile belediyenin en yüksek oranlarından. Dengeli performans. Yönetici ilişkileri, ekip uyumu ve kamu hizmeti motivasyonu güçlü. Çalışma koşulları belediye ortalamasının üzerinde. Yemekhane en zayıf alan: hijyen ve lezzet şikayetleri mevcut. Arşiv havalandırması iyileştirmesi talep edilmektedir.</td>
</tr>
<tr style="background:#fff3e0;">
<td style="padding:6px;">YAPI KONTROL</td>
<td style="text-align:center; padding:6px;">%88,0</td>
<td style="text-align:center; padding:6px; color:#e67e22;">+2,9</td>
<td style="padding:6px;">Yüksek iş stresi/yükü ancak ekip uyumu ve yönetici ilişkileri koruyucu faktör olarak öne çıkıyor. Kamu hizmeti motivasyonu güçlü. Ücret şikayeti yaygın: "Diğer belediyelere göre maaş farkı iyileştirilmeli." Yemek memur-işçi eşitliği talep edilmektedir. +2,9 denge ile kurumsal destek sınırda yeterli görünmektedir.</td>
</tr>
<tr>
<td style="padding:6px;">HALKLA İLİŞKİLER</td>
<td style="text-align:center; padding:6px;">%92,4</td>
<td style="text-align:center; padding:6px;">+6,0</td>
<td style="padding:6px;">Çağrı merkezi personeli yoğun stres altında: "Günde 160-200 çağrı, 3-4 saat konuşma süresi gerginlik yaratıyor." İş stresi/yükü yüksek, ekip uyumu ortalamanın altında. Kamu hizmeti motivasyonu ve yönetici ilişkileri belediye ortalamasının üzerinde - koruyucu faktörler. Servis şikayeti: Boğazköy hattında "ayakta gidiyoruz" denilmektedir.</td>
</tr>
<tr style="background:#fff3e0;">
<td style="padding:6px;">EMLAK VE İSTİMLAK</td>
<td style="text-align:center; padding:6px;">%91,7</td>
<td style="text-align:center; padding:6px; color:#e67e22;">+1,5</td>
<td style="padding:6px;"><strong>Eğitim-gelişim alanında iyileştirme ihtiyacı mevcut (%58,6)</strong> - personel kendini geliştirme imkanı konusunda beklenti içindedir. Yüksek iş stresi/yükü ile +1,5 sınırda denge. Ekip uyumu belediyenin en yüksek düzeyinde - güçlü koruyucu faktör. Yemekhane en düşük skorlardan. Servis ağı genişletilmesi ve Taşoluk metro ring seferi talep edilmektedir.</td>
</tr>
<tr style="background:#fff3e0;">
<td style="padding:6px;">İKLİM DEĞİŞİKLİĞİ</td>
<td style="text-align:center; padding:6px;">%88,2</td>
<td style="text-align:center; padding:6px; color:#e67e22;">+0,7</td>
<td style="padding:6px;"><strong>Sınırda pozitif denge (+0,7) - kaynak-talep dengesi kritik eşikte.</strong> Yüksek iş stresi/yükü ve zayıf pozitif kurum desteği. Personel takviyesi acil: "Araba, kamyonet ve iş arkadaşlarına ihtiyacımız var, çok zorlanıyoruz." Çalışma koşulları zayıf: "Tuvalet kapılarında kilit yok, dolap yok." Sigara kullanımı ikinci en yüksek. Ekip uyumu ortalamanın altında, kamu hizmeti motivasyonu koruyucu faktör.</td>
</tr>
<tr>
<td style="padding:6px;">BASIN VE YAYIN</td>
<td style="text-align:center; padding:6px;">%93,1</td>
<td style="text-align:center; padding:6px;">+22,3</td>
<td style="padding:6px;">Belediyenin en yüksek kamu hizmeti motivasyonu (%97,2). Güçlü performans. Yönetici ilişkileri ve iş-kişi uyumu çok yüksek, ekip uyumu ortalamanın altında. Düşük iş stresi/yükü ile stressiz çalışma ortamı. Ofis temizliği ve ısıtma/soğutma iyileştirme bekliyor. Ücret güncelleme talebi yaygındır.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">AKILLI ULAŞIM</td>
<td style="text-align:center; padding:6px;">%88,3</td>
<td style="text-align:center; padding:6px;">+23,9</td>
<td style="padding:6px;">Güçlü denge. Çalışma arkadaşları, yönetici ilişkileri ve kamu hizmeti motivasyonu belediye ortalamasının üzerinde. Düşük iş stresi/yükü ile rahat çalışma ortamı. Ücret ve eğitim memnuniyeti düşük. Personel bilgilendirme sistemi (doğum, cenaze, evlilik) talep edilmektedir.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">İŞLETME</td>
<td style="text-align:center; padding:6px; color:#27ae60;"><strong>%96,9</strong></td>
<td style="text-align:center; padding:6px;">+15,0</td>
<td style="padding:6px;">Yüksek memnuniyet (%96,9). Yönetici ilişkileri, ekip uyumu ve kamu hizmeti motivasyonu çok güçlü. Kurumsal destek yeterli. 10 temadan 8'inde ortalamanın üzerinde. Ofis alanı dar, sabah ikram ve dinlenme alanı talep edilmektedir.</td>
</tr>
<tr style="background:#fff3e0;">
<td style="padding:6px;">PLAN VE PROJE</td>
<td style="text-align:center; padding:6px; color:#c0392b;">%84,4</td>
<td style="text-align:center; padding:6px;">+10,8</td>
<td style="padding:6px;">Memnuniyet düzeyi iyileştirme gerektirmekle birlikte pozitif denge korunmaktadır. Çalışma koşulları ortalamanın altında (%65,2): servis, tuvalet, yemekhane kritik. Servis en büyük şikayet: "Psikolojimi en çok düşüren etken." Düşük sigara kullanımı (%25,0). Ekip uyumu güçlü koruyucu faktör, yönetici ilişkileri ortalamanın altında. Ücret çok düşük.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">ÖZEL KALEM</td>
<td style="text-align:center; padding:6px; color:#27ae60;"><strong>%98,4</strong></td>
<td style="text-align:center; padding:6px;">+22,9</td>
<td style="padding:6px;">Yüksek memnuniyet. 10 temanın tamamında ortalamanın üzerinde - belediyenin en dengeli birimi. İş-kişi uyumu, görev netliği, yönetici ilişkileri çok güçlü. Belediyenin en düşük ruh sağlığı risklerinden. Güçlü denge. Tek şikayet yemekhane lezzeti.</td>
</tr>
<tr style="background:#fff3e0;">
<td style="padding:6px;">İNSAN KAYNAKLARI</td>
<td style="text-align:center; padding:6px; color:#c0392b;"><strong>%80,8</strong></td>
<td style="text-align:center; padding:6px;">+24,5</td>
<td style="padding:6px;">Güçlü stres-destek dengesi (+24,5) ve düşük iş stresi/yükü ile rahat çalışma ortamı. Yönetici ilişkileri güçlü düzeyde.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">AFET İŞLERİ</td>
<td style="text-align:center; padding:6px;">%90,9</td>
<td style="text-align:center; padding:6px; color:#27ae60;"><strong>+34,3</strong></td>
<td style="padding:6px;"><strong>Belediyenin en yüksek görev netliği (%97,7)</strong> ve ikinci en yüksek iş-kişi uyumu. Çok güçlü performans. Yönetici ilişkileri ve ekip uyumu belediyenin en yüksek düzeylerinde. Psikolojik destek farkındalığı yüksek. Çalışma koşulları ve yemekhane iyileştirme bekliyor.</td>
</tr>
<tr style="background:#fff3e0;">
<td style="padding:6px;">HUKUK İŞLERİ</td>
<td style="text-align:center; padding:6px; color:#c0392b;">%84,1</td>
<td style="text-align:center; padding:6px;">+11,1</td>
<td style="padding:6px;">Memnuniyet düzeyi iyileştirme alanı olmakla birlikte pozitif denge korunmaktadır. Yönetici ilişkileri ve ekip uyumu güçlü. Kamu hizmeti motivasyonu ortalamanın altında. Yemekte memur-şirket personeli fiyat farkı adaletsiz bulunmaktadır. Servis tasarruf tedbirlerinin ilçe dışından gelenleri olumsuz etkilediği bildirilmektedir. Dinlenme alanı yetersiz.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">RUHSAT VE DENETİM</td>
<td style="text-align:center; padding:6px;">%90,9</td>
<td style="text-align:center; padding:6px; color:#27ae60;"><strong>+25,9</strong></td>
<td style="padding:6px;"><strong>Belediyenin en düşük ruh sağlığı riski (%38,4).</strong> Görev netliği ikinci en yüksek - küçük ve uzmanlaşmış ekip avantajı. Güçlü denge. Yönetici ilişkileri, ekip uyumu ve kamu hizmeti motivasyonu çok güçlü. Düşük iş stresi/yükü. Açık uçlu yorum yazılmamıştır.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">STRATEJİ GELİŞTİRME</td>
<td style="text-align:center; padding:6px;">%85,7</td>
<td style="text-align:center; padding:6px; color:#27ae60;"><strong>+27,7</strong></td>
<td style="padding:6px;"><strong>Belediyenin en düşük iş stresi/yükü (%50,9)</strong> ve en düşük vatandaş yoğunluğu. Güçlü denge ile stressiz ortam. Çalışma arkadaşları ve yönetici ilişkileri güçlü. Çalışma koşulları belediye ortalamasının çok üzerinde. Personelin %75'i yorum yazmış. Servis güzergahları uzun ve yemekhane fiyatları yüksek bulunmaktadır.</td>
</tr>
<tr>
<td style="padding:6px;">MALİ HİZMETLER</td>
<td style="text-align:center; padding:6px;">%86,1</td>
<td style="text-align:center; padding:6px;">+19,9</td>
<td style="padding:6px;">Dengeli performans. Yönetici ilişkileri, ekip uyumu ve kurum içi iletişim belediyenin en yüksek düzeylerinde. Amir saygısı ve topluma hizmet gururu %100 tam puan. Düşük sigara kullanımı. Çalışan ebeveynler çocuk etüt merkezi talep etmektedir. Yemekhane ve servis iyileştirme bekliyor.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">KOORDİNASYON</td>
<td style="text-align:center; padding:6px;">%85,7</td>
<td style="text-align:center; padding:6px; color:#27ae60;"><strong>+34,4</strong></td>
<td style="padding:6px;"><strong>BELEDİYENİN EN YÜKSEK DENGESİ (+34,4).</strong> Yönetici ilişkileri ve ekip uyumu belediyenin en yüksek skorları. %100 katılım ve düşük iş stresi/yükü. Ancak memnuniyet ortalamanın altında - ücret ve servis yetersiz. Sigara kullanımı belediyenin en yüksek oranı.</td>
</tr>
<tr style="background:#e8f5e9;">
<td style="padding:6px;">MUHTARLIK</td>
<td style="text-align:center; padding:6px; color:#27ae60;">%95,8</td>
<td style="text-align:center; padding:6px;">+23,2</td>
<td style="padding:6px;">Yüksek memnuniyet (%95,8). Düşük iş stresi/yükü ile güçlü denge. Çalışma arkadaşları ve kurum içi iletişim ortalamanın üzerinde. Ortak alanlar belediyenin en düşüğü. Eğitim & gelişim zayıf. Personel tuvaletinin vatandaştan ayrılması talep edilmektedir. Küçük örneklem (n=6).</td>
</tr>
</tbody>
</table>



<p><strong>Özet İstatistikler:</strong></p>
<ul style="margin-top:0.5em; font-size:10pt;">
<li><strong>3 müdürlükte negatif denge:</strong> Veteriner (-3,5), Gelirler (-2,5), İmar (-2,3)</li>
<li><strong>5 müdürlükte düşük pozitif denge</strong> (0-5 arası): İklim (+0,7), Emlak (+1,5), Fen (+1,7), Yapı Kontrol (+2,9), Zabıta (+3,1)</li>
<li><strong>Yüksek memnuniyet:</strong> Özel Kalem %98,4, İşletme %96,9, Muhtarlık %95,8</li>
<li><strong>En düşük memnuniyet:</strong> İnsan Kaynakları %80,8, Zabıta %83,2, Hukuk %84,1</li>
</ul>
<p style="margin-top:1.5em; padding:1em; background:#e8f5e9; border-left:4px solid #4caf50;"><strong>Sonuç:</strong> Arnavutköy Belediyesi %90,8 genel memnuniyet ve %92,8 kamu hizmeti motivasyonu ile güçlü bir çalışan bağlılığına sahiptir. Personelimiz işini seviyor ve topluma hizmet etmekten gurur duyuyor. Yukarıda belirlenen sorun alanlarına (özellikle negatif dengeli 3 müdürlük ve kritik dengeli 5 müdürlük) odaklanılması, bu yüksek motivasyonun sürdürülmesine katkı sağlayacaktır.</p>
</div>

<h2 style="margin-top:2em; border-bottom:2px solid #333; padding-bottom:0.3em;">Belediye Geneli Detaylı Bakış</h2>

<h3>1. Tema Bazlı Performans</h3>

<table>
    <thead>
        <tr>
            <th style="width:70%;">Tema</th>
            <th style="width:30%;">Skor (%)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Kamu Hizmeti Motivasyonu</strong> ⭐</td>
            <td class="stat-value">92,8</td>
        </tr>
        <tr>
            <td><strong>İş-Kişi Uyumu</strong> ⭐</td>
            <td class="stat-value">91,3</td>
        </tr>
        <tr>
            <td><strong>Ekip Uyumu</strong></td>
            <td class="stat-value">86,9</td>
        </tr>
        <tr>
            <td><strong>Yönetici İlişkileri</strong></td>
            <td class="stat-value">86,8</td>
        </tr>
        <tr>
            <td><strong>Görev-Rol Netliği</strong></td>
            <td class="stat-value">86,6</td>
        </tr>
        <tr>
            <td><strong>Kurumsal İletişim</strong></td>
            <td class="stat-value">79,8</td>
        </tr>
        <tr>
            <td><strong>Yetkinlik & Performans</strong></td>
            <td class="stat-value">77,2</td>
        </tr>
        <tr>
            <td><strong>Eğitim & Gelişim</strong></td>
            <td class="stat-value">75,8</td>
        </tr>
        <tr>
            <td><strong>Çalışma Koşulları</strong> ⚠️</td>
            <td class="stat-value" style="color:#c0392b;">72,2</td>
        </tr>
        <tr>
            <td><strong>İş Stresi/Yükü</strong> ⚠️</td>
            <td class="stat-value" style="color:#c0392b;">69,1</td>
        </tr>
    </tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Kamu hizmeti motivasyonu (%92,8) ve iş-kişi uyumu (%91,3) belediyenin en güçlü alanlarıdır. Ekip uyumu (%86,9), yönetici ilişkileri (%86,8) ve görev-rol netliği (%86,6) de %85 üzerinde seyretmektedir. Bu güçlü sosyal destek yapısı, iş stresi/yükünün olumsuz etkilerini dengeleyen kritik bir kaynaktır. Ancak çalışma koşulları (%72,2) ve iş stresi/yükü (%69,1) belediyenin en zayıf alanları olup, özellikle saha birimlerinde iyileştirme gerektirmektedir.</p>

<h2>2. Kritik Soru Analizi</h2>

<h3>2.1. En Düşük Skorlu Sorular</h3>
<table>
    <thead>
        <tr>
            <th>Soru</th>
            <th>Skor (%)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>S48.</strong> Gerginlik/kaygı hissettim (son 2 hafta)</td>
            <td class="stat-value" style="color:#c0392b;">50,8</td>
        </tr>
        <tr>
            <td><strong>S47.</strong> Üzgün/çökkün hissettim (son 2 hafta)</td>
            <td class="stat-value" style="color:#c0392b;">50,9</td>
        </tr>
        <tr>
            <td><strong>S49.</strong> Endişelerimi kontrol edemedim (son 2 hafta)</td>
            <td class="stat-value" style="color:#c0392b;">50,9</td>
        </tr>
        <tr>
            <td><strong>S46.</strong> Keyif alamadım (son 2 hafta)</td>
            <td class="stat-value" style="color:#c0392b;">56,1</td>
        </tr>
        <tr>
            <td><strong>S30.</strong> Yemek hizmetinden memnunum</td>
            <td class="stat-value" style="color:#c0392b;">57,2</td>
        </tr>
        <tr>
            <td><strong>S32.</strong> Servis hizmeti yeterlidir</td>
            <td class="stat-value">67,7</td>
        </tr>
        <tr>
            <td><strong>S34.</strong> Ücretler makuldür</td>
            <td class="stat-value">69,0</td>
        </tr>
        <tr>
            <td><strong>S29.</strong> Ortak alanlar yeterlidir</td>
            <td class="stat-value">70,4</td>
        </tr>
    </tbody>
</table>

<h3>2.2. En Yüksek Skorlu Sorular</h3>
<table>
    <thead>
        <tr>
            <th>Soru</th>
            <th>Skor (%)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>S35.</strong> Topluma hizmet etmekten gurur duyuyorum</td>
            <td class="stat-value" style="color:#27ae60;">94,5</td>
        </tr>
        <tr>
            <td><strong>S37.</strong> İşimin toplum için faydalı olduğunu düşünüyorum</td>
            <td class="stat-value" style="color:#27ae60;">93,2</td>
        </tr>
        <tr>
            <td><strong>S3.</strong> Yaptığım işi anlamlı buluyorum</td>
            <td class="stat-value" style="color:#27ae60;">92,4</td>
        </tr>
        <tr>
            <td><strong>S12.</strong> Amirime kolaylıkla ulaşabilirim</td>
            <td class="stat-value" style="color:#27ae60;">92,2</td>
        </tr>
        <tr>
            <td><strong>S18.</strong> İş arkadaşlarımla uyum içinde çalışırım</td>
            <td class="stat-value" style="color:#27ae60;">91,9</td>
        </tr>
    </tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Belediyenin en düşük skorları ruh sağlığı göstergelerinde yoğunlaşmaktadır: gerginlik/kaygı (S48: %50,8), üzgün/çökkün hissetme (S47: %50,9), endişe kontrolü (S49: %50,9) ve keyif alamama (S46: %56,1). Bu veriler, personelin yaklaşık yarısının son 2 haftada psikolojik sıkıntı belirtileri yaşadığını ortaya koymaktadır. Çalışma koşulları içinde yemek hizmeti (S30: %57,2) en kritik alan olup, servis (S32: %67,7) ve ücret memnuniyeti (S34: %69,0) de %70 altında kalan sorunlu alanlardır.</p>

<p>Öte yandan kamu hizmeti motivasyonu (S35: %94,5) ve işin toplumsal faydasına inanç (S37: %93,2) belediyenin en güçlü alanlarıdır. İşi anlamlı bulma (S3: %92,4), amire ulaşabilirlik (S12: %92,2) ve ekip uyumu (S18: %91,9) skorları da %90 üzerindedir. Bu güçlü motivasyon ve sosyal destek, çalışma koşullarına rağmen genel memnuniyetin (%90,8) yüksek kalmasını sağlayan temel faktörlerdir.</p>

<h2>3. Saha-Büro Karşılaştırması</h2>

<table>
    <thead>
        <tr>
            <th>Gösterge</th>
            <th>Saha Birimleri (9)</th>
            <th>Büro Birimleri (21)</th>
            <th>Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>İş Stresi/Yükü</strong></td>
            <td class="stat-value" style="color:#c0392b;">%73,2</td>
            <td class="stat-value">%66,8</td>
            <td class="highlight-warning">+6,4</td>
        </tr>
        <tr>
            <td><strong>Denge (Kurum Desteği - İş Stresi/Yükü)</strong></td>
            <td class="stat-value" style="color:#e67e22;">+7,6</td>
            <td class="stat-value">+17,4</td>
            <td class="highlight-warning">-9,8</td>
        </tr>
        <tr>
            <td><strong>Genel Memnuniyet</strong></td>
            <td class="stat-value">%88,3</td>
            <td class="stat-value">%90,0</td>
            <td class="">-1,7</td>
        </tr>
    </tbody>
</table>

<p><strong>Saha-Büro Analizi:</strong> Saha birimleri (Temizlik, Zabıta, Fen İşleri, Park Bahçeler, Veteriner, İklim Değişikliği, Destek Hizmetleri, Ruhsat ve Denetim, Yapı Kontrol) büro birimlerine kıyasla <strong>6,4 puan daha yüksek iş stresi/yükü</strong> ve <strong>10 puan daha düşük denge</strong> yaşamaktadır. Saha birimlerinde +7,6 denge orta düzeydedir. Bu grupta Veteriner İşleri (-3,5) negatif dengeli iken, İklim Değişikliği (+0,7), Fen İşleri (+1,7), Yapı Kontrol (+2,9), Zabıta (+3,1) düşük pozitif denge ile takip edilmelidir.</p>

<h2>4. Denge (Kurum Desteği - İş Stresi/Yükü) (En Düşük Dengeli Birimler)</h2>

<table>
    <thead>
        <tr>
            <th>Müdürlük</th>
            <th>Denge</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Veteriner İşleri</strong></td>
            <td class="highlight-critical">-3,5 ⚠️</td>
        </tr>
        <tr>
            <td><strong>Gelirler</strong></td>
            <td class="highlight-critical">-2,5 ⚠️</td>
        </tr>
        <tr>
            <td><strong>İmar ve Şehircilik</strong></td>
            <td class="highlight-critical">-2,3 ⚠️</td>
        </tr>
        <tr>
            <td><strong>İklim Değişikliği</strong></td>
            <td class="">+0,7</td>
        </tr>
        <tr>
            <td><strong>Emlak ve İstimlak</strong></td>
            <td class="">+1,5</td>
        </tr>
        <tr>
            <td><strong>Fen İşleri</strong></td>
            <td class="">+1,7</td>
        </tr>
        <tr>
            <td><strong>Yapı Kontrol</strong></td>
            <td class="">+2,9</td>
        </tr>
        <tr>
            <td><strong>Zabıta</strong></td>
            <td class="">+3,1</td>
        </tr>
        <tr>
            <td><strong>Sosyal Destek</strong></td>
            <td class="">+5,2</td>
        </tr>
        <tr>
            <td><strong>Temizlik İşleri</strong></td>
            <td class="">+5,5</td>
        </tr>
    </tbody>
</table>

<p><strong>Denge Analizi:</strong> Belediyede <strong>3 müdürlük negatif dengeli</strong>dir: Veteriner İşleri (-3,5), Gelirler (-2,5) ve İmar ve Şehircilik (-2,3). Bu birimlerde iş stresi/yükü, kurumdan alınan desteği aşmıştır ve iş yükü baskısı bulunmaktadır. Ayrıca İklim Değişikliği (+0,7), Emlak (+1,5), Fen İşleri (+1,7), Yapı Kontrol (+2,9), Zabıta (+3,1) gibi düşük pozitif dengeli birimler de yakın izlem gerektirmektedir.</p>

<h2>5. Değişkenler Arası İlişkiler (Ne Neyi Etkiliyor?)</h2>

<table>
    <thead>
        <tr>
            <th>İlişki</th>
            <th>İlişki Gücü</th>
            <th>Yorum</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Denge → Ruh Sağlığı Riski</strong></td>
            <td class="stat-value" style="color:#c0392b;">-0,64</td>
            <td><strong>Güçlü ilişki:</strong> Denge düştükçe ruh sağlığı riski artıyor</td>
        </tr>
        <tr>
            <td><strong>İş Stresi/Yükü → Ruh Sağlığı Riski</strong></td>
            <td class="stat-value" style="color:#c0392b;">+0,57</td>
            <td><strong>Güçlü ilişki:</strong> İş stresi arttıkça ruh sağlığı riski artıyor</td>
        </tr>
        <tr>
            <td><strong>Ücret → Memnuniyet</strong></td>
            <td class="stat-value">+0,41</td>
            <td><strong>Orta düzeyde ilişki:</strong> Ücret memnuniyeti arttıkça genel memnuniyet artıyor</td>
        </tr>
        <tr>
            <td><strong>İş Stresi/Yükü → Memnuniyet</strong></td>
            <td class="stat-value">-0,08</td>
            <td><strong>Zayıf ilişki:</strong> Stres tek başına memnuniyeti düşürmüyor</td>
        </tr>
    </tbody>
</table>

<p><strong>Bu Tablo Ne Söylüyor?</strong> En önemli bulgu şudur: <strong>İş stresi tek başına memnuniyeti düşürmemektedir</strong>. Ancak personel yeterli kurumsal destek alamadığında (denge düştüğünde), ruh sağlığı riski belirgin şekilde artmaktadır. Bu demektir ki: <strong>Stresli işlerde çalışan personeli korumak için stresi azaltmaya çalışmak kadar, kurumsal desteği (yönetici ilişkileri, ekip uyumu, çalışma koşulları) güçlendirmek de etkili bir yöntemdir.</strong></p>

<h2>6. Açık Uçlu Yorumlardan Öne Çıkan Talepler</h2>

<p><em>456 açık uçlu yorumun içerik analizi sonuçları (bir yorum birden fazla konuya değinebilir):</em></p>

<table>
    <thead>
        <tr>
            <th>Konu</th>
            <th>Yorum Sayısı</th>
            <th>Öne Çıkan Birimler</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Ücret/Maaş/SDS</strong></td>
            <td class="stat-value">116</td>
            <td>Zabıta (28), Emlak İstimlak (10), Sosyal Destek (9)</td>
        </tr>
        <tr>
            <td><strong>Yemek Hizmeti</strong></td>
            <td class="stat-value">83</td>
            <td>Emlak İstimlak (12), Yazı İşleri (12), İnovasyon (11)</td>
        </tr>
        <tr>
            <td><strong>Fiziksel Koşullar</strong></td>
            <td class="stat-value">81</td>
            <td>Temizlik İşleri (66), Kültür İşleri (3), Plan Proje (3)</td>
        </tr>
        <tr>
            <td><strong>Yönetici İlişkileri</strong></td>
            <td class="stat-value">37</td>
            <td>Temizlik İşleri (12), Sosyal Destek (7), Zabıta (5)</td>
        </tr>
        <tr>
            <td><strong>Servis Güzergahları</strong></td>
            <td class="stat-value">32</td>
            <td>Zabıta (8), Emlak İstimlak (5), Plan Proje (3)</td>
        </tr>
    </tbody>
</table>

<h2>7. Ruh Sağlığı Taraması</h2>

<table>
    <thead>
        <tr>
            <th>Gösterge</th>
            <th>Skor (%)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>S46.</strong> Keyif alamama</td>
            <td class="stat-value">56,1</td>
        </tr>
        <tr>
            <td><strong>S47.</strong> Üzgün/çökkün hissetme</td>
            <td class="stat-value">50,9</td>
        </tr>
        <tr>
            <td><strong>S48.</strong> Gerginlik/kaygı</td>
            <td class="stat-value">50,8</td>
        </tr>
        <tr>
            <td><strong>S49.</strong> Endişeleri kontrol edememe</td>
            <td class="stat-value">50,9</td>
        </tr>
        <tr>
            <td><strong>Sigara Kullanımı</strong></td>
            <td class="stat-value">44,9</td>
        </tr>
    </tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Personelin yaklaşık yarısı son 2 haftada psikolojik sıkıntı belirtileri (gerginlik, kaygı, üzgünlük) yaşadığını bildirmiştir. Veriler açıkça göstermektedir ki <strong>iş stresi/yükü-kurum desteği dengesi düşük olan birimlerde ruh sağlığı riski daha yüksektir</strong>. Bu nedenle Veteriner İşleri, İmar, Gelirler ve Fen İşleri gibi düşük dengeli birimlerde ruh sağlığı desteği önceliklendirilmelidir.</p>

<h2>8. Sosyal Medya Takip Oranları</h2>

<table style="width:100%; border-collapse:collapse; font-size:9.5pt; margin:1em 0;">
<thead>
<tr style="background:#C86A3C; color:white;">
<th style="padding:8px; text-align:left; border:1px solid #333;">Platform</th>
<th style="padding:8px; text-align:center; border:1px solid #333;">Belediye Hesabı</th>
<th style="padding:8px; text-align:center; border:1px solid #333;">Başkan Hesabı</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:6px 8px; border:1px solid #ccc;"><strong>Instagram</strong></td>
<td style="padding:6px 8px; text-align:center; border:1px solid #ccc;">%81,0</td>
<td style="padding:6px 8px; text-align:center; border:1px solid #ccc;">%76,9</td>
</tr>
<tr style="background:#f5f5f5;">
<td style="padding:6px 8px; border:1px solid #ccc;"><strong>Facebook</strong></td>
<td style="padding:6px 8px; text-align:center; border:1px solid #ccc;">%42,8</td>
<td style="padding:6px 8px; text-align:center; border:1px solid #ccc;">%39,6</td>
</tr>
<tr>
<td style="padding:6px 8px; border:1px solid #ccc;"><strong>Twitter/X</strong></td>
<td style="padding:6px 8px; text-align:center; border:1px solid #ccc;">%31,1</td>
<td style="padding:6px 8px; text-align:center; border:1px solid #ccc;">%29,3</td>
</tr>
<tr style="background:#f5f5f5;">
<td style="padding:6px 8px; border:1px solid #ccc;"><strong>NextSosyal</strong></td>
<td style="padding:6px 8px; text-align:center; border:1px solid #ccc;">%17,8</td>
<td style="padding:6px 8px; text-align:center; border:1px solid #ccc;">%17,6</td>
</tr>
</tbody>
</table>

<p><strong>Değerlendirme:</strong> Instagram açık ara en çok takip edilen platform olup, personelin büyük çoğunluğu (%81) belediye hesabını takip etmektedir. Facebook ve Twitter/X orta düzeyde takip edilirken, NextSosyal henüz yaygınlaşmamıştır. Kurumsal iletişim ve duyurular için Instagram öncelikli kanal olarak değerlendirilebilir.</p>

<hr style="margin: 3em 0; border: none; border-top: 2px solid #333;">`,

    mudurlukler: {
        "temizlik_isleri": {
            name: "Temizlik İşleri Müdürlüğü",
            html: `<h1>Temizlik İşleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Temizlik İşleri Müdürlüğü personeli, zorlu saha koşullarında çalışmasına rağmen işine bağlı ve topluma hizmet motivasyonu yüksektir. Ancak şantiye altyapısının acil iyileştirilmesi, şef/amir iletişiminin güçlendirilmesi ve ekipman kalitesinin artırılması kritik öneme sahiptir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">215/578 kişi (%37,2)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-critical">-33,2</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%91,9</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+1,1</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar)</span>
            </td>
            <td class="value">%71,9</td>
            <td class="avg">%69,1</td>
            <td class="diff">+2,8 ↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları vb.)</span>
            </td>
            <td class="value">%77,4</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight">-4,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+5,5</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-7,7</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%56,7</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight">+4,5 (olumsuz)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%51,2</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-warning">+6,3 ↑</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">62 kişi (%55,4)</td>
            <td class="avg">-</td>
            <td class="diff">Çok yüksek katılım</td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kamu hizmeti motivasyonu (%92,3):</strong> İşin toplum için anlamlı olduğuna inanç (%94,5) çok yüksek.</li>
<li><strong>İş-kişi uyumu (%92,4):</strong> Personel işini anlamlı buluyor (%94,8).</li>
<li><strong>Genel memnuniyet (%91,9):</strong> Zorlu koşullara rağmen ortalamanın üzerinde.</li>
<li><strong>Yüksek yorum katılımı (%50,2):</strong> 108 kişi açık uçlu yorum yapmış - personelin sesini duyurma isteği güçlü.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Ortak alanlar (%47,1, -23,3):</strong> Çay ocağı, dinlenme alanı, tuvaletler - belediyenin en düşük skoru.</li>
<li><strong>Bireysel çalışma alanı (%61,1, -18,1):</strong> Soyunma odaları, dolaplar yetersiz.</li>
<li><strong>Isıtma/soğutma (%56,7, -17,4):</strong> Şantiye koşulları uygun değil.</li>
<li><strong>Yönetici ilişkileri (%81,0, -5,8):</strong> Şef/amir tutumlarına yönelik ciddi şikayetler.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Şantiye altyapısı sorunu:</strong> Tuvalet, çay ocağı, soyunma odası, dolap yetersizliği açık uçlu yorumların büyük çoğunluğunu oluşturuyor.</li>
<li><strong>Şef/amir şikayetleri:</strong> Tutanak tehditleri, mobbing iddiaları, iletişim sorunları sıkça dile getirilmiş.</li>
<li><strong>Ekipman kalitesizliği:</strong> Eldiven, yağmurluk, ayakkabı, kıyafetlerin kalitesiz olduğu yoğun şekilde belirtilmiş.</li>
<li><strong>Şoför değer kaybı sorunu:</strong> Kaza durumunda araç değer kaybının şoförlerden kesilmesi önemli bir şikayet konusu.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Temizlik İşl. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">92,4</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+1,1</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">85,1</td>
<td class="stat-value">86,6</td>
<td>-1,5</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü</strong></td>
<td class="stat-value">71,9</td>
<td class="stat-value">69,1</td>
<td>+2,8</td>
<td>Ortalamanın biraz üzerinde (olumsuz)</td>
</tr>
<tr>
<td><strong>Yönetici İlişkileri</strong></td>
<td class="stat-value">81,0</td>
<td class="stat-value">86,8</td>
<td class="highlight-warning">-5,8</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>Ekip Uyumu</strong></td>
<td class="stat-value">82,9</td>
<td class="stat-value">86,9</td>
<td class="highlight">-4,0</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kurumsal İletişim</strong></td>
<td class="stat-value">74,5</td>
<td class="stat-value">79,8</td>
<td class="highlight-warning">-5,3</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">61,8</td>
<td class="stat-value">72,2</td>
<td class="highlight-critical">-10,4</td>
<td class="highlight-critical">Çok düşük ⚠️</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">92,3</td>
<td class="stat-value">92,8</td>
<td>-0,5</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">72,7</td>
<td class="stat-value">77,2</td>
<td class="highlight">-4,5</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">73,0</td>
<td class="stat-value">75,8</td>
<td>-2,8</td>
<td>Ortalamada</td>
</tr>
</tbody>
</table>

<p><strong>Tema Bazlı Değerlendirme:</strong> Çalışma koşulları teması (%61,8, -10,4) belediyenin en düşük skorlarından biridir - şantiye altyapısı ciddi iyileştirme gerektirmektedir. Yönetici ilişkileri (%81,0, -5,8) ve kurumsal iletişim (%74,5, -5,3) düşük olması, açık uçlu yorumlardaki şef/amir şikayetleriyle tutarlıdır. İş-kişi uyumu (%92,4) ve kamu hizmeti motivasyonu (%92,3) yüksek olması, personelin işine bağlılığını göstermektedir.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Temizlik İşl. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S3: Yaptığım işi anlamlı buluyorum</strong></td>
<td class="stat-value">94,8</td>
<td>92,4</td>
<td class="highlight-positive">+2,4</td>
</tr>
<tr>
<td><strong>S37: Yaptığım işin toplum için anlamlı ve faydalı olduğunu düşünüyorum</strong></td>
<td class="stat-value">94,5</td>
<td>93,2</td>
<td class="highlight-positive">+1,3</td>
</tr>
<tr>
<td><strong>S25: Bu kurumda çalışmaktan genel olarak memnunum</strong></td>
<td class="stat-value">91,9</td>
<td>90,8</td>
<td class="highlight-positive">+1,1</td>
</tr>
<tr>
<td><strong>S1: Yaptığım iş, yetenek ve becerilerimle uyumludur</strong></td>
<td class="stat-value">91,8</td>
<td>90,9</td>
<td class="">+0,9</td>
</tr>
<tr>
<td><strong>S34: Piyasa koşullarıyla kıyaslandığında ücretler makuldür</strong></td>
<td class="stat-value">69,3</td>
<td>69,0</td>
<td class="">+0,3</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Temizlik İşl. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S29: Ortak alanlar (çay ocağı, dinlenme alanı, tuvaletler) yeterlidir</strong></td>
<td class="stat-value">47,1</td>
<td>70,4</td>
<td class="highlight-critical">-23,3</td>
</tr>
<tr>
<td><strong>S28: Bireysel çalışma alanım işimi rahat yapmama elverişlidir</strong></td>
<td class="stat-value">61,1</td>
<td>79,2</td>
<td class="highlight-critical">-18,1</td>
</tr>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">56,7</td>
<td>74,1</td>
<td class="highlight-critical">-17,4</td>
</tr>
<tr>
<td><strong>S33: Sağlanan teknoloji altyapısı yeterlidir</strong></td>
<td class="stat-value">62,3</td>
<td>75,2</td>
<td class="highlight-critical">-12,9</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">59,3</td>
<td>67,7</td>
<td class="highlight-critical">-8,4</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Ortak alanlar (S29: %47,1, -23,3) belediyenin en düşük skorudur - tuvalet, çay ocağı, soyunma odası yetersizliği açık uçlu yorumlarda da en sık tekrarlanan şikayettir. Bireysel çalışma alanı (S28: %61,1, -18,1) ve ısıtma/soğutma (S27: %56,7, -17,4) skorları şantiye altyapısının yetersizliğini teyit etmektedir. Öte yandan işin anlamlılığı (S3: %94,8, +2,4) ve toplumsal katkı (S37: %94,5, +1,3) yüksek olması, personelin zorlu koşullara rağmen işine bağlılığını göstermektedir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Temizlik İşleri Müdürlüğü'nden <strong>62 kişi (%55,4)</strong> açık uçlu yorum yapmıştır - belediyenin en yüksek yorum sayısına sahip birimidir.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Şantiye Altyapısı - Tuvalet, Çay Ocağı, Soyunma Odası (50+ yorum):</strong></p>
<div class="quote">"500 küsür insana 3 tuvalet yetersiz. Genel olarak oturma alanımız yetersiz. Çay ocağı, tuvalet, soyunma dolabı ve duş alanımız hiçbir şekilde yeterli değil."</div>
<div class="quote">"Tuvaletler yetersiz, temiz ve hijyen değil. Soyunma odaları ve dolaplar yetersiz."</div>
<div class="quote">"Sosyal yaşam alanlarımız (tuvalet, çay ocağı, giyinme odaları) sayısı yetersiz."</div>
<div class="quote">"Bulunduğumuz ortam çok kötü, dolaplarımız yok, lavabo yetersiz."</div>

<p><strong>2. Şef/Amir Tutumu ve İletişim (20+ yorum):</strong></p>
<div class="quote">"Amirlerimizin çalışan işçilere karşı emir vererek, köle gibi aşağılayıcı tavırla, üslupla yaklaşmamalarını talep ediyorum."</div>
<div class="quote">"Bazı şeflerin personellere çok kaba davranışları oluyor. Hakaret edercesine davranışları oluyor. Olumsuz yere tutanak tutuluyor."</div>
<div class="quote">"Şefler bize tepeden bakıp çok basit tutanaklar tutuyor ve tutarım diye tehdit ediyorlar."</div>
<div class="quote">"Bölge şefleri üslup bozukluğu, elemanları aşağılama durumları, izin kullanmada sıkıntı yaşıyoruz."</div>

<p><strong>3. Ekipman ve Kıyafet Kalitesizliği (25+ yorum):</strong></p>
<div class="quote">"Eldivenler çok az ve yetersiz. Ayakkabı, elbise, yağmurluk çok kalitesiz."</div>
<div class="quote">"Kışlık pantolon çok ince olduğu için üşüyorum."</div>
<div class="quote">"Yağmurluklar beğenmiyoruz, terleme yapıyor."</div>
<div class="quote">"Giydiğimiz eldivenlerin değerlendirilmesini istiyorum."</div>

<p><strong>4. Şoför Değer Kaybı Sorunu (10+ yorum):</strong></p>
<div class="quote">"Ben şoförüm. En ufak kaza yaptığımızda karşı taraf bizden araç değer kaybı alıyor, sigorta karşılamıyor."</div>
<div class="quote">"Trafik kazası raporlarında karşı tarafın değer kaybı şoförlerden talep edilip alınıyor."</div>

<p><strong>5. Olumlu Geri Bildirimler (3 yorum):</strong></p>
<div class="quote">"Belediyemizde çalışmaktan çok mutluyum ve çok adiller herkese."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumların büyük çoğunluğu <strong>şantiye altyapısı yetersizliğine</strong> odaklanmaktadır - tuvalet, çay ocağı, soyunma odası, dolap eksikliği en sık tekrarlanan şikayettir ve bu durum düşük ortak alan skoru (%47,1, -23,3) ile birebir örtüşmektedir. <strong>Şef/amir şikayetleri</strong> ikinci önemli tema olup, tutanak tehditleri ve iletişim sorunları yoğun şekilde dile getirilmiştir - bu durum düşük yönetici ilişkileri skoru (%81,0, -5,8) ile tutarlıdır. Ekipman kalitesizliği şikayetleri de dikkat çekicidir.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>

<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Temizlik İşl. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S46: Keyif/İlgi Kaybı</strong></td>
<td class="stat-value">59,4</td>
<td>56,1</td>
<td class="highlight">+3,3</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">56,2</td>
<td>50,9</td>
<td class="highlight-critical">+5,3</td>
<td class="highlight-critical">Yüksek ⚠️</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">55,1</td>
<td>50,8</td>
<td class="highlight">+4,3</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">55,9</td>
<td>50,9</td>
<td class="highlight-critical">+5,0</td>
<td class="highlight-critical">Yüksek ⚠️</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">51,2</td>
<td>44,9</td>
<td class="highlight-critical">+6,3</td>
<td class="highlight-critical">Yüksek ⚠️</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Tüm ruh sağlığı göstergeleri belediye ortalamasının 3-5 puan üzerindedir. Üzgün/çökkün hissetme (%56,2, +5,3) ve endişe kontrolü (%55,9, +5,0) dikkat çekicidir. Bu durum, zorlu fiziksel koşullar, şef/amir iletişim sorunları ve zayıf stres-destek dengesi (+5,5) ile ilişkilendirilebilir. Sigara kullanımı (%51,2, +6,3) da belediye ortalamasının üzerindedir. Personelin psikolojik desteğe ihtiyaç duyabileceği izlenmesi gereken bir profil söz konusudur.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>

<table>
<thead>
<tr>
<th>Platform</th>
<th>Temizlik İşl. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram - Belediye</strong></td>
<td class="stat-value">68,7</td>
<td>81,0</td>
<td class="highlight-critical">-12,3</td>
</tr>
<tr>
<td><strong>Instagram - Başkan</strong></td>
<td class="stat-value">59,6</td>
<td>76,9</td>
<td class="highlight-critical">-17,3</td>
</tr>
<tr>
<td><strong>Twitter/X - Belediye</strong></td>
<td class="stat-value">22,3</td>
<td>31,1</td>
<td class="">-8,8</td>
</tr>
<tr>
<td><strong>Twitter/X - Başkan</strong></td>
<td class="stat-value">18,7</td>
<td>29,3</td>
<td class="">-10,6</td>
</tr>
<tr>
<td><strong>Facebook - Belediye</strong></td>
<td class="stat-value">54,8</td>
<td>42,8</td>
<td class="highlight-positive">+12,0</td>
</tr>
<tr>
<td><strong>Facebook - Başkan</strong></td>
<td class="stat-value">45,8</td>
<td>39,6</td>
<td class="highlight-positive">+6,2</td>
</tr>
<tr>
<td><strong>NextSosyal - Belediye</strong></td>
<td class="stat-value">15,7</td>
<td>17,8</td>
<td class="">-2,1</td>
</tr>
<tr>
<td><strong>NextSosyal - Başkan</strong></td>
<td class="stat-value">15,1</td>
<td>17,6</td>
<td class="">-2,5</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Facebook takip oranları belediye ortalamasının üzerindedir (Belediye: +12,0; Başkan: +6,2). Instagram ve Twitter takip oranları ise ortalamanın altındadır. Bu durum, saha personelinin sosyal medya kullanım tercihlerini yansıtmaktadır.</p>`
        },
        "destek_hizmetleri": {
            name: "Destek Hizmetleri Müdürlüğü",
            html: `<h1>Destek Hizmetleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Destek Hizmetleri Müdürlüğü, yüksek memnuniyet ve güçlü çalışma koşulları ile belediyenin en olumlu performans gösteren birimlerinden biridir. Destek Hizmetleri Müdürlüğüne göre mesai dışı çalışma taleplerinin düzenlenmesi, saha personeli için araç/ekipman desteğinin artırılması ve vardiyalı çalışanların yemek hizmetinin iyileştirilmesi izlenmesi gereken alanlar olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">307/366 kişi (%83,9)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+13,5</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%95,1</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+4,3</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%62,3</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-6,8 ↓</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%86,8</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+4,5</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+24,5</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+11,3</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%47,9</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-4,3 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%46,0</td>
            <td class="avg">%44,9</td>
            <td class="diff">+1,1</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">28 kişi (%9,1)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
        
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kamu hizmeti motivasyonu (%94,4):</strong> Belediye ortalamasının 1,6 puan üzerinde. Topluma hizmet gururu (%94,8) ve işin anlamlılığı (%94,3) yüksek.</li>
<li><strong>İş-kişi uyumu (%93,4):</strong> Belediye ortalamasının 2,1 puan üzerinde. Personel işini anlamlı buluyor (%93,8) ve işi seçtiği için mutlu (%93,8).</li>
<li><strong>Çalışma arkadaşları (%88,3):</strong> Belediye ortalamasının 1,4 puan üzerinde. Ekip uyumu (%93,0) ve dayanışma (%88,6) güçlü.</li>
<li><strong>Çalışma koşulları (%82,6):</strong> Belediye ortalamasının 10,4 puan üzerinde. Temizlik (%87,6), ısıtma/soğutma (%84,1), ortak alanlar (%85,2) ve servis (%82,4) skorları yüksek.</li>
<li><strong>Eğitim & Gelişim (%86,1):</strong> Belediye ortalamasının 10,3 puan üzerinde. Eğitim faaliyetleri (%85,9) ve eğitimlerin katkısı (%86,3) çok olumlu.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yemekhane hizmeti (%70,0):</strong> Belediye ortalamasının üzerinde olsa da açık uçlu yorumlarda vardiyalı çalışanların yemek hizmeti talebi mevcut.</li>
<li><strong>Mesai dışı çalışma talepleri:</strong> Açık uçlu yorumlarda gece saatlerinde ve izin günlerinde paylaşım/çalışma talep edilmesinden şikayet var.</li>
<li><strong>Araç/ekipman eksikliği:</strong> Özellikle güvenlik personeli ve mesire alanı çalışanları için devriye aracı talebi belirgin.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Belediyenin en büyük müdürlüğü:</strong> 366 personel ile en kalabalık birim. %83,9 katılım oranı ile 307 kişiden veri toplanmış - bu örneklem istatistiksel olarak güçlü.</li>
<li><strong>Yüksek memnuniyet - Düşük stres kombinasyonu:</strong> %95,1 genel memnuniyet ve %62,3 iş stresi/yükü ile belediyenin en dengeli birimlerinden biri.</li>
<li><strong>Çalışma koşulları memnuniyeti:</strong> Çalışma koşulları skoru (%82,6) belediye ortalamasının (%72,2) 10,4 puan üzerinde - bu müdürlüğün en güçlü yönlerinden biri.</li>
<li><strong>Mesai dışı çalışma sorunu:</strong> Açık uçlu yorumlarda "gece saatlerinde paylaşım isteniyor", "izin günlerinde çalışma talep ediliyor" ifadeleri dikkat çekici. İş-yaşam dengesi konusunda hassasiyet mevcut.</li>
<li><strong>Güvenlik personeli özel talepleri:</strong> Devriye aracı, kamera sistemi iyileştirmesi, spor salonu erişimi gibi saha çalışanlarına özgü talepler var.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Destek Hiz. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">93,4</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+2,1</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">89,4</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+2,8</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">62,3</td>
<td class="stat-value">69,1</td>
<td class="highlight-warning">-6,8</td>
<td class="highlight-positive">Düşük stres (olumlu)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">86,6</td>
<td class="stat-value">86,8</td>
<td>-0,2</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">88,3</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+1,4</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">84,5</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+4,7</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">82,6</td>
<td class="stat-value">72,2</td>
<td class="highlight-positive">+10,4</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">94,4</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+1,6</td>
<td class="highlight-positive">Yüksek motivasyon</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">82,7</td>
<td class="stat-value">77,2</td>
<td class="highlight-positive">+5,5</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">86,1</td>
<td class="stat-value">75,8</td>
<td class="highlight-positive">+10,3</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Destek Hizmetleri Müdürlüğü, 10 temanın 9'unda belediye ortalamasının üzerinde veya eşit performans göstermektedir. En güçlü alanlar çalışma koşulları (+10,4) ve eğitim & gelişim (+10,3) iken, yöneticilerle ilişkiler (-0,2) tek negatif fark gösteren temadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Destek Hizmetleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S29: Ortak alanlar yeterlidir</strong></td>
<td class="stat-value">85,2</td>
<td>70,4</td>
<td class="highlight-positive">+14,8</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">82,4</td>
<td>67,7</td>
<td class="highlight-positive">+14,7</td>
</tr>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">70,0</td>
<td>57,2</td>
<td class="highlight-positive">+12,8</td>
</tr>
<tr>
<td><strong>S42: Kurumda yapılan eğitim faaliyetlerini yeterli bulurum</strong></td>
<td class="stat-value">85,9</td>
<td>74,8</td>
<td class="highlight-positive">+11,1</td>
</tr>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">84,1</td>
<td>74,1</td>
<td class="highlight-positive">+10,0</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Destek Hizmetleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S15: Kararlara katılma ve fikrimi söyleme fırsatı</strong></td>
<td class="stat-value">82,4</td>
<td>82,5</td>
<td class="">-0,1</td>
</tr>
<tr>
<td><strong>S20: Bilgi ve deneyim paylaşımı yaygındır</strong></td>
<td class="stat-value">85,3</td>
<td>85,4</td>
<td class="">-0,1</td>
</tr>
<tr>
<td><strong>S14: Amirim destek olmak için çaba gösterir</strong></td>
<td class="stat-value">86,3</td>
<td>86,7</td>
<td class="">-0,4</td>
</tr>
<tr>
<td><strong>S17: Amirim bana karşı saygılıdır</strong></td>
<td class="stat-value">89,3</td>
<td>89,9</td>
<td class="">-0,6</td>
</tr>
<tr>
<td><strong>S16: Amirim çalışanlara eşit yaklaşır</strong></td>
<td class="stat-value">81,4</td>
<td>82,8</td>
<td class="">-1,4</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Destek Hizmetleri Müdürlüğü, tüm sorularda belediye ortalamasına yakın veya üzerinde performans sergileyerek dengeli bir profil çizmektedir. Fiziksel koşullar kategorisinde belirgin üstünlük göze çarpmaktadır: ortak alanlar (S29: %85,2, +14,8), servis (S32: %82,4, +14,7) ve yemekhane (S30: %70,0, +12,8). Bu durum, birimin kendi hizmet alanlarında (destek hizmetleri) başarılı olduğuna işaret etmektedir. "Geliştirilmesi gereken" olarak sınıflandırılan alanlar bile belediye ortalamasına çok yakındır (en büyük negatif fark -1,4 puan), bu da müdürlüğün genel olarak sorunsuz işlediğini göstermektedir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Destek Hizmetleri Müdürlüğü'nden <strong>28 kişi (%9,1)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Mesai Dışı Çalışma Talepleri (3+ yorum):</strong></p>
<div class="quote">"Gece saatlerinde paylaşım isteniyor, paylaşımlar gece saatlerinde ve izin günlerinde istenilmesin."</div>
<div class="quote">"Mesai saatleri dışında saat farketmeksizin sürekli paylaşım yapmak talebinde bulunuluyor. Bu durum özel yaşantımı ve bireysel performansımı olumsuz etkiliyor."</div>

<p><strong>2. Araç/Ekipman İhtiyacı (5+ yorum):</strong></p>
<div class="quote">"Bir devriye aracı verilebilir. Alan çok karanlık ve hayvanlar olabiliyor."</div>
<div class="quote">"Devriye aracımız yok. Acil bir durum olduğunda hızlıca yetişemiyoruz."</div>
<div class="quote">"İmrahor mesire alanı için bir ulaşım vasıtası gereklidir."</div>

<p><strong>3. Kamera/Güvenlik Sistemleri (2+ yorum):</strong></p>
<div class="quote">"Çalıştığımız birimlerin kamera görüntü kalitesini arttırmak faydalı olur."</div>

<p><strong>4. Vardiyalı Çalışan Hizmetleri (2+ yorum):</strong></p>
<div class="quote">"Vardiyalı çalışanların servis ve yemek hizmeti almasını isterdim."</div>
<div class="quote">"Mesaiye kaldığımız zamanlar acıkıyoruz, aç karına çalışırken zorlanıyoruz."</div>

<p><strong>5. Sosyal İmkanlar:</strong></p>
<div class="quote">"Spor salonları ücretsiz olsun."</div>
<div class="quote">"Güvenlik görevlilerine spor salonları ücretsiz veya düşük bir miktar olursa iyi olur."</div>

<p><strong>6. Ekip İçi İletişim:</strong></p>
<div class="quote">"Çalışma arkadaşlarımızda genel olarak anlaşmazlıklar var. Çoğunlukla iletişim bozukluğu karşı tarafı zor durumda bırakıyor."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yanıtlarda en belirgin tema <strong>saha personelinin araç/ekipman ihtiyacı</strong>dır. Özellikle güvenlik ve mesire alanı personeli devriye aracı talep etmektedir. <strong>Mesai dışı çalışma talepleri</strong> iş-yaşam dengesi açısından dikkat çekici bir sorundur. Genel memnuniyet yüksek olmasına rağmen, operasyonel düzeyde iyileştirme beklentileri mevcuttur.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Destek Hiz. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">47,9</td>
<td>52,2</td>
<td class="highlight-positive">-4,3</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">52,3</td>
<td>56,1</td>
<td class="highlight-positive">-3,8</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">46,5</td>
<td>50,9</td>
<td class="highlight-positive">-4,4</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">46,0</td>
<td>50,8</td>
<td class="highlight-positive">-4,8</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">46,6</td>
<td>50,9</td>
<td class="highlight-positive">-4,3</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">46,0</td>
<td>44,9</td>
<td>+1,1</td>
<td>Ortalama düzeyde</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Destek Hizmetleri Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının altındadır (olumlu). Düşük iş stresi/yükü (%62,3) ve yüksek genel memnuniyetin (%95,1) bu olumlu tabloya katkı sağladığı düşünülebilir. Sigara kullanımı (%46,0) belediye ortalamasıyla benzer düzeydedir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Destek Hiz. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">82,5</td>
<td>81,0</td>
<td class="highlight-positive">+1,5</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">81,7</td>
<td>76,9</td>
<td class="highlight-positive">+4,8</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">33,8</td>
<td>31,1</td>
<td class="highlight-positive">+2,7</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">33,5</td>
<td>29,3</td>
<td class="highlight-positive">+4,2</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">55,9</td>
<td>42,8</td>
<td class="highlight-positive">+13,1</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">53,6</td>
<td>39,6</td>
<td class="highlight-positive">+14,0</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">24,7</td>
<td>17,8</td>
<td class="highlight-positive">+6,9</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">24,0</td>
<td>17,6</td>
<td class="highlight-positive">+6,4</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Destek Hizmetleri Müdürlüğü, tüm sosyal medya platformlarında belediye ortalamasının üzerinde takip oranlarına sahiptir. Özellikle Facebook takibi belirgin şekilde yüksektir (Belediye +13,1, Başkan +14,0). Bu durum, müdürlük personelinin demografik yapısıyla ilişkili olabilir.</p>

<!-- ==================== #105 - EMLAK VE İSTİMLAK MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "veteriner_isleri": {
            name: "Veteriner İşleri Müdürlüğü",
            html: `<h1>Veteriner İşleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Veteriner İşleri Müdürlüğü personeli işine bağlı ve topluma hizmet motivasyonu yüksektir. Ancak iş stresi/yükü kritik seviyelerdedir ve kurumsal destek yetersiz kalmaktadır. Yassıören barınağı altyapısının iyileştirilmesi, amirlerin eşit davranış algısının güçlendirilmesi ve personele psikolojik destek sunulması acil önceliklerdir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">27/38 kişi (%71,1)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+0,7</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%86,5</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight">-4,3</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar)</span>
            </td>
            <td class="value">%82,3</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-critical">+13,2 ↑ ⚠️</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları vb.)</span>
            </td>
            <td class="value">%78,8</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight">-3,5</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt; color:#c00;">-3,5</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-16,7 ⚠️</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%58,5</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-warning">+6,3 (olumsuz)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%62,5</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-critical">+17,6 ↑ ⚠️</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">15 kişi (%55,6)</td>
            <td class="avg">-</td>
            <td class="diff">Orta düzey katılım</td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kamu hizmeti motivasyonu (%93,4):</strong> Topluma hizmet gururu (%96,9) çok yüksek.</li>
<li><strong>İş-kişi uyumu (%89,2):</strong> Personel işini seviyor ve anlamlı buluyor.</li>
<li><strong>Amire ulaşılabilirlik (%90,6):</strong> İhtiyaç duyulduğunda amire ulaşım kolay.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Amir eşitliği (%69,8, -13,0):</strong> Personel amirlerin adil davranışı konusunda güçlü iyileştirme beklemektedir.</li>
<li><strong>Bilgi paylaşımı (%74,0, -11,4):</strong> Deneyim aktarımı yetersiz.</li>
<li><strong>Ücret (%59,4, -9,6):</strong> Piyasa koşullarına göre düşük algılanıyor.</li>
<li><strong>Ekip dayanışması (%79,3, -7,7):</strong> Bireysel uyum yüksek olmasına rağmen ekip dayanışması zayıf.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yassıören barınağı izolasyonu:</strong> Açık uçlu yorumlarda merkeze uzaklık, su sıkıntısı (tuzlu su) ve altyapı yetersizliği sıkça dile getirilmiş.</li>
<li><strong>Amirlerin eşit davranışı:</strong> Açık uçlu yorumlarda amirlerden hakkaniyetli ve adil yaklaşım beklentisi dile getirilmiş - S16 amir eşitliği skoru (%69,8) ile tutarlı.</li>
<li><strong>Psikolojik sıkıntı beyanı:</strong> Personel, işin stresli ve tehlikeli doğası nedeniyle psikolojik zorluklar yaşadığını ifade etmiş.</li>
<li><strong>Zorlanma göstergesi:</strong> Yüksek stres + düşük destek + negatif denge = iş yükü baskısı göstergesi.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Veteriner İşl. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">89,2</td>
<td class="stat-value">91,3</td>
<td>-2,1</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">78,9</td>
<td class="stat-value">86,6</td>
<td class="highlight-warning">-7,7</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü</strong></td>
<td class="stat-value">82,3</td>
<td class="stat-value">69,1</td>
<td class="highlight-critical">+13,2</td>
<td class="highlight-critical">Çok yüksek (olumsuz) ⚠️</td>
</tr>
<tr>
<td><strong>Yönetici İlişkileri</strong></td>
<td class="stat-value">80,9</td>
<td class="stat-value">86,8</td>
<td class="highlight-warning">-5,9</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>Ekip Uyumu</strong></td>
<td class="stat-value">80,0</td>
<td class="stat-value">86,9</td>
<td class="highlight-warning">-6,9</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>Kurumsal İletişim</strong></td>
<td class="stat-value">78,7</td>
<td class="stat-value">79,8</td>
<td>-1,1</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">71,3</td>
<td class="stat-value">72,2</td>
<td>-0,9</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">93,4</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+0,6</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">73,7</td>
<td class="stat-value">77,2</td>
<td class="highlight">-3,5</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">75,5</td>
<td class="stat-value">75,8</td>
<td>-0,3</td>
<td>Ortalamada</td>
</tr>
</tbody>
</table>

<p><strong>Tema Bazlı Değerlendirme:</strong> İş stresi teması (%82,3, +13,2) belediyenin en yüksek değerlerinden biri olup, veterinerlik mesleğinin doğası gereği duygusal ve fiziksel yük taşıdığını göstermektedir. Yönetici ilişkileri (%80,9, -5,9) ve ekip uyumu (%80,0, -6,9) düşük olması, açık uçlu yorumlardaki yönetim memnuniyetsizliğiyle tutarlıdır. Görev-rol netliği (%78,9, -7,7) de ortalamanın altındadır. Buna karşın kamu hizmeti motivasyonu (%93,4) yüksek olması, personelin işine olan inancını yansıtmaktadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Veteriner (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S9.</strong> Gün içinde yetiştirmem gereken görevler çoğu zaman fazla olur. <em>(olumsuz)</em></td>
<td class="stat-value">87,5</td>
<td>70,4</td>
<td class="highlight">+17,1</td>
</tr>
<tr>
<td><strong>S10.</strong> Vatandaş/başvuru talep yoğunluğu işim gereği fazladır. <em>(olumsuz)</em></td>
<td class="stat-value">83,3</td>
<td>70,6</td>
<td class="highlight">+12,7</td>
</tr>
<tr>
<td><strong>S8.</strong> İşim gereği duygusal olarak zorlayıcı durumlarla sık karşılaşırım. <em>(olumsuz)</em></td>
<td class="stat-value">82,3</td>
<td>70,8</td>
<td class="highlight">+11,5</td>
</tr>
<tr>
<td><strong>S11.</strong> İşimi tamamlamak için sık sık zaman sıkışıklığı yaşarım. <em>(olumsuz)</em></td>
<td class="stat-value">76,0</td>
<td>64,7</td>
<td class="highlight">+11,3</td>
</tr>
<tr>
<td><strong>S32.</strong> Servis (ulaşım) hizmeti kalitesi yeterlidir.</td>
<td class="stat-value">77,1</td>
<td>67,7</td>
<td class="highlight-positive">+9,4</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Veteriner (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S16.</strong> Amirim çalışanlara eşit yaklaşır, ayrımcılık yapmaz.</td>
<td class="stat-value">69,8</td>
<td>82,8</td>
<td class="highlight-critical">-13,0 ⚠️</td>
</tr>
<tr>
<td><strong>S20.</strong> Bilgi ve deneyim paylaşımı yaygındır.</td>
<td class="stat-value">74,0</td>
<td>85,4</td>
<td class="highlight-critical">-11,4</td>
</tr>
<tr>
<td><strong>S34.</strong> Piyasa koşullarıyla kıyaslandığında verilen ücretler makuldür.</td>
<td class="stat-value">59,4</td>
<td>69,0</td>
<td class="highlight-critical">-9,6</td>
</tr>
<tr>
<td><strong>S21.</strong> İş arkadaşlarımın teknik/sosyal desteği işimi kolaylaştırır.</td>
<td class="stat-value">76,0</td>
<td>85,6</td>
<td class="highlight-critical">-9,6</td>
</tr>
<tr>
<td><strong>S7.</strong> Görev ve talimatlar birbiriyle uyumludur.</td>
<td class="stat-value">75,0</td>
<td>84,5</td>
<td class="highlight-critical">-9,5</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> S9 (%87,5, +17,1), S10 (%83,3, +12,7), S8 (%82,3, +11,5) ve S11 (%76,0, +11,3) skorları bir arada değerlendirildiğinde: veterinerlik mesleğinin doğası gereği yoğun iş yükü, duygusal zorlayıcılık ve zaman baskısı yaşandığı görülmektedir. S16 (%69,8, -13,0) belediyenin en düşük skorlarından biridir - amir eşitliği algısının bu denli düşük olması, personel motivasyonunu doğrudan etkileyen kritik bir sorundur. S20 (%74,0, -11,4) ve S21 (%76,0, -9,6) skorları ekip içi bilgi ve destek paylaşımının yetersizliğine işaret etmektedir. Öte yandan S35 (%96,9, +2,4) topluma hizmet gururu çok yüksektir.</p>

<h2>3. Ruh Sağlığı Taraması</h2>

<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Veteriner İşl. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S46.</strong> Keyif alamama</td>
<td class="stat-value">58,3</td>
<td>56,1</td>
<td class="">+2,2</td>
</tr>
<tr>
<td><strong>S47.</strong> Üzgün/çökkün hissetme</td>
<td class="stat-value">55,4</td>
<td>50,9</td>
<td class="">+4,5</td>
</tr>
<tr>
<td><strong>S48.</strong> Gerginlik/kaygı</td>
<td class="stat-value">57,6</td>
<td>50,8</td>
<td class="highlight">+6,8</td>
</tr>
<tr>
<td><strong>S49.</strong> Endişeleri kontrol edememe</td>
<td class="stat-value">62,5</td>
<td>50,9</td>
<td class="highlight-critical">+11,6 ⚠️</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">62,5</td>
<td>44,9</td>
<td class="highlight-critical">+17,6 ⚠️</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Genel ruh sağlığı riski (%58,5) belediye ortalamasının %6,3 üzerindedir. Özellikle S49 endişe kontrolü (+11,6) çok yüksektir - personelin kaygılarını yönetmekte zorlandığını göstermektedir. Sigara kullanımı (%62,5) belediyenin en yüksek oranlarından biri olup, stres kaynaklı başa çıkma mekanizması olarak yorumlanabilir. Yüksek iş stresi/yükü ile ruh sağlığı göstergeleri arasında güçlü bir ilişki vardır.</p>

<h2>4. Açık Uçlu Yorumlar</h2>

<p>Veteriner İşleri Müdürlüğü'nden <strong>15 kişi</strong> açık uçlu yorum yapmıştır (%55,6 katılım).</p>

<p><strong>1. Maaş ve Ücret Şikayetleri (8+ yorum):</strong></p>
<div class="quote">"Diğer ilçe belediyeleri ile kıyaslama yaparsak maaşlarımız çok düşük."</div>
<div class="quote">"Yapılan iş diğer kurumlardan hem stresli hem tehlikeli olarak görüyorum, o yüzden maddi açıdan tatmin edici olmasını temenni ediyorum."</div>
<div class="quote">"Maaşımızın diğer birimlerle farklı olmasını istiyorum."</div>

<p><strong>2. Banka Hizmetleri - Vakıfbank (5 yorum):</strong></p>
<div class="quote">"Maaş aldığımız banka olan Vakıfbank'tan memnun değilim."</div>
<div class="quote">"Banka hizmetlerinden memnun değiliz."</div>

<p><strong>3. Yassıören Barınağı Altyapı Sorunları (4 yorum):</strong></p>
<div class="quote">"Yassıören hayvan bakım evimizde su sıkıntısı yaşıyoruz."</div>
<div class="quote">"Barınakta su sıkıntısı olduğu için yeterli temizlik koşulları oluşmaz. Sular tuzlu olarak geliyor."</div>
<div class="quote">"Yaptığımız işten dolayı psikolojik sıkıntılar yaşıyoruz. Merkeze uzak olduğumuz için her şeyden mahrumuz."</div>

<p><strong>4. Yönetim/Müdür Şikayetleri (2 yorum):</strong></p>
<div class="quote">"Ben müdürden memnun değilim. Eski müdürümüzü istiyorum."</div>
<div class="quote">"Müdürümüzün daha hakkaniyetli ve adaletli olmasını istiyoruz."</div>

<p><strong>5. İş Güvenliği ve Personel Eksikliği (2 yorum):</strong></p>
<div class="quote">"Maaşların iyileştirilmesi ve daha güvenli bir iş ortamı."</div>
<div class="quote">"Çalışmış olduğum birimde personel eksikliği var. En kısa zamanda personel alımı talep ediyorum."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlar, nicel verilerle güçlü bir tutarlılık göstermektedir. S16 amir eşitliği skorunun (%69,8, -13,0) gerisinde somut bir yönetim memnuniyetsizliği yatmaktadır. Yassıören barınağındaki su sıkıntısı ve merkeze uzaklık, çalışma koşullarının zorluğunu somutlaştırmaktadır. S34 ücret skoru (%59,4, -9,6) ile maaş şikayetlerinin yoğunluğu örtüşmektedir.</p>

<h2>5. Sosyal Medya Takip Analizi</h2>

<table>
<thead>
<tr>
<th>Platform</th>
<th>Veteriner İşl. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram - Belediye</strong></td>
<td class="stat-value">83,3</td>
<td>81,0</td>
<td class="highlight-positive">+2,3</td>
</tr>
<tr>
<td><strong>Instagram - Başkan</strong></td>
<td class="stat-value">83,3</td>
<td>76,9</td>
<td class="highlight-positive">+6,4</td>
</tr>
<tr>
<td><strong>Twitter/X - Belediye</strong></td>
<td class="stat-value">37,5</td>
<td>31,1</td>
<td class="highlight-positive">+6,4</td>
</tr>
<tr>
<td><strong>Twitter/X - Başkan</strong></td>
<td class="stat-value">29,2</td>
<td>29,3</td>
<td class="">-0,1</td>
</tr>
<tr>
<td><strong>Facebook - Belediye</strong></td>
<td class="stat-value">45,8</td>
<td>42,8</td>
<td class="highlight-positive">+3,0</td>
</tr>
<tr>
<td><strong>Facebook - Başkan</strong></td>
<td class="stat-value">54,2</td>
<td>39,6</td>
<td class="highlight-positive">+14,6</td>
</tr>
<tr>
<td><strong>NextSosyal - Belediye</strong></td>
<td class="stat-value">20,8</td>
<td>17,8</td>
<td class="highlight-positive">+3,0</td>
</tr>
<tr>
<td><strong>NextSosyal - Başkan</strong></td>
<td class="stat-value">16,7</td>
<td>17,6</td>
<td class="">-0,9</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Tüm platformlarda takip oranları belediye ortalamasının üzerinde veya yakınındadır. Özellikle Facebook Başkan hesabı (+14,6) dikkat çekici şekilde yüksektir. Bu durum, personelin kurumsal aidiyetinin sosyal medya takibine yansıdığını göstermektedir.</p>`
        },
        "strateji_gelistirme": {
            name: "Strateji Geliştirme Müdürlüğü",
            html: `<h1>Strateji Geliştirme Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Strateji Geliştirme Müdürlüğü, düşük stresli ve fiziksel koşulları iyi bir çalışma ortamına sahiptir. Ancak performans değerlendirme sisteminin iyileştirilmesi ve servis hizmetinin düzeltilmesi, memnuniyeti artırabilir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">8/10 kişi (%80,0)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+9,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%85,7</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-warning">-5,1</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar)</span>
            </td>
            <td class="value">%50,9</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-18,2 ↓</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları vb.)</span>
            </td>
            <td class="value">%78,6</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight">-3,7</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+27,7</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-positive">+14,5</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%50,9</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-1,3 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%42,9</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-2,0 ↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">6 kişi (%75,0)</td>
            <td class="avg">-</td>
            <td class="diff">Çok yüksek katılım</td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çok düşük iş stresi/yükü (%50,9):</strong> Vatandaş yoğunluğu (%32,1) ve duygusal zorlayıcılık (%39,3) belediyenin en düşük skorları.</li>
<li><strong>Fiziksel çalışma koşulları:</strong> Temizlik (%92,9, +13,5), ısıtma/soğutma (%85,7, +11,6), bireysel çalışma alanı (%89,3, +10,1).</li>
<li><strong>Kurumsal iletişim:</strong> Karar ve gelişmelerden haberdar edilme (%89,3, +8,9).</li>
<li><strong>Güçlü stres-destek dengesi (+27,7):</strong> Belediye ortalamasının iki katı.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Performans değerlendirme sistemi:</strong> Kriterlerin netliği (%64,3, -16,3) ve adaleti (%60,7, -16,5) belediyenin en düşük skorları.</li>
<li><strong>Servis hizmeti (%50,0, -17,7):</strong> Belediyenin en düşük skorlarından biri.</li>
<li><strong>Ekip uyumu (%77,9, -9,0):</strong> Dayanışma ve bilgi paylaşımı ortalamanın altında.</li>
<li><strong>Görev-rol netliği (%75,0, -11,6):</strong> Sorumluluk alanları belirsiz.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Düşük stres - düşük memnuniyet paradoksu:</strong> Belediyenin en rahat çalışma ortamına sahip olmasına rağmen memnuniyet ortalamanın altında.</li>
<li><strong>Performans sistemi sorunu:</strong> Değerlendirme kriterleri hem net değil hem de adil bulunmuyor - bu durum kariyer gelişimi beklentilerini olumsuz etkiliyor olabilir.</li>
<li><strong>Yüksek yorum oranı (%75):</strong> 8 kişiden 6'sı yorum yapmış - personelin görüşlerini ifade etme konusunda aktif olduğunu gösteriyor.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Strateji Gel. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">89,3</td>
<td class="stat-value">91,3</td>
<td>-2,0</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">75,0</td>
<td class="stat-value">86,6</td>
<td class="highlight-critical">-11,6</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü</strong></td>
<td class="stat-value">50,9</td>
<td class="stat-value">69,1</td>
<td class="highlight-positive">-18,2</td>
<td class="highlight-positive">Çok düşük (olumlu) ✓</td>
</tr>
<tr>
<td><strong>Yönetici İlişkileri</strong></td>
<td class="stat-value">89,9</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+3,1</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Ekip Uyumu</strong></td>
<td class="stat-value">77,9</td>
<td class="stat-value">86,9</td>
<td class="highlight-critical">-9,0</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>Kurumsal İletişim</strong></td>
<td class="stat-value">80,4</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+0,6</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">73,0</td>
<td class="stat-value">72,2</td>
<td class="highlight-positive">+0,8</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">90,5</td>
<td class="stat-value">92,8</td>
<td>-2,3</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">64,3</td>
<td class="stat-value">77,2</td>
<td class="highlight-critical">-12,9</td>
<td class="highlight-critical">Çok düşük ⚠️</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">71,4</td>
<td class="stat-value">75,8</td>
<td class="highlight">-4,4</td>
<td>Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Tema Bazlı Değerlendirme:</strong> Düşük iş stresi/yükü (%50,9, -18,2) birimin doğrudan vatandaş hizmeti vermemesiyle tutarlıdır. Ancak yetkinlik & performans teması (%64,3, -12,9) belediyenin en düşük skorlarından biri olup, performans değerlendirme sistemine yönelik ciddi memnuniyetsizlik olduğunu göstermektedir. Ekip uyumunun düşük olması (%77,9, -9,0), küçük bir birimde dikkat çekicidir.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Strateji Gel. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S26: Çalışma alanlarımın temizliği yeterlidir</strong></td>
<td class="stat-value">92,9</td>
<td>79,4</td>
<td class="highlight-positive">+13,5</td>
</tr>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">85,7</td>
<td>74,1</td>
<td class="highlight-positive">+11,6</td>
</tr>
<tr>
<td><strong>S28: Bireysel çalışma alanım işimi rahat yapmama elverişlidir</strong></td>
<td class="stat-value">89,3</td>
<td>79,2</td>
<td class="highlight-positive">+5,5</td>
</tr>
<tr>
<td><strong>S24: Belediyedeki karar ve gelişmelerden haberdar edilirim</strong></td>
<td class="stat-value">89,3</td>
<td>80,4</td>
<td class="highlight-positive">+8,9</td>
</tr>
<tr>
<td><strong>S16: Amirim çalışanlara eşit yaklaşır</strong></td>
<td class="stat-value">89,3</td>
<td>82,8</td>
<td class="highlight-positive">+6,5</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Strateji Gel. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">32,1</td>
<td>70,6</td>
<td class="highlight-positive">-38,5 (olumlu)</td>
</tr>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla sık karşılaşırım</strong></td>
<td class="stat-value">39,3</td>
<td>70,8</td>
<td class="highlight-positive">-31,5 (olumlu)</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">50,0</td>
<td>67,7</td>
<td class="highlight-critical">-17,7</td>
</tr>
<tr>
<td><strong>S39: Performans değerlendirme kriterleri adildir</strong></td>
<td class="stat-value">60,7</td>
<td>77,2</td>
<td class="highlight-critical">-16,5</td>
</tr>
<tr>
<td><strong>S38: Performans değerlendirme kriterleri nettir</strong></td>
<td class="stat-value">64,3</td>
<td>80,6</td>
<td class="highlight-critical">-16,3</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Fiziksel çalışma koşulları (S26: %92,9, S27: %85,7, S28: %89,3) belediyenin en yüksek skorları arasındadır - merkez binada konumlanmanın avantajı görülmektedir. Vatandaş yoğunluğu (S10: %32,1, -38,5) ve duygusal zorlayıcılık (S8: %39,3, -31,5) belediyenin en düşüğü olup, birimin stratejik planlama odaklı çalışmasıyla tutarlıdır. Ancak performans değerlendirme sistemi ciddi sorun alanıdır: hem kriterlerin netliği (S38: %64,3, -16,3) hem de adaleti (S39: %60,7, -16,5) belediyenin en düşük skorları arasındadır. Servis hizmeti (S32: %50,0, -17,7) şikayeti açık uçlu yorumlarda da teyit edilmektedir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Strateji Geliştirme Müdürlüğü'nden <strong>6 kişi (%75,0)</strong> açık uçlu yorum yapmıştır - belediyenin en yüksek yorum oranlarından biridir.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Yemekhane ve Ücret Sistemi (3 yorum):</strong></p>
<div class="quote">"Yemekhane ücretlerinin oldukça yüksek olduğunu ve mevcut aylık ödeme sisteminin esnek olmadığını belirtmek isterim. Kart bastığım kadar yemek yiyebilme imkanı sunulması çalışanlar için daha adil sistem olacaktır."</div>
<div class="quote">"Servislerin doluluk oranı ve güzergahı için iyileştirme yapılabilir. Yemekhane ücreti de."</div>

<p><strong>2. Servis Hizmeti (2 yorum):</strong></p>
<div class="quote">"Servis güzergahlarının uzun ve dolambaçlı olması nedeniyle ulaşım süresi uzuyor."</div>

<p><strong>3. Fiziksel Ortam ve Sağlık (2 yorum):</strong></p>
<div class="quote">"Personelin kısa molalarda dinlenebileceği bir alan bulunmadığı için, küçük bir dinlenme veya sosyalleşme alanı oluşturulmasının faydalı olacağını düşünüyorum."</div>
<div class="quote">"Belediyemiz hizmet binasının tüm kapalı ofis ortamlarında sigara kullanılmamasını önemle rica ediyorum. Kokunun ve dumanın tüm binaya yayıldığını ve sigara kullanılan mekanlara yakın odalardaki insanların ciddi etkilendiğini belirtmek isterim."</div>

<p><strong>4. Ücret Adaleti (1 yorum):</strong></p>
<div class="quote">"Büro personeli kadrosunda çalışanların öğrenim durumlarına göre maaşların eşit olması bence adil değil. Eğitim düzeyine göre farklılaştırılmış bir ücretlendirme veya teşvik sistemi oluşturulabilir."</div>

<p><strong>Yorum Analizi:</strong> En sık dile getirilen konular <strong>yemekhane ücret sistemi</strong> ve <strong>servis hizmetidir</strong>. Servis şikayetleri, düşük servis skoru (%50,0, -17,7) ile tutarlıdır. Sigara yasağı talebi sağlık bilinciyle, ücret adaleti yorumu ise performans sistemi memnuniyetsizliğiyle ilişkilendirilebilir.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>

<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Strateji Gel. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S46: Keyif/İlgi Kaybı</strong></td>
<td class="stat-value">50,0</td>
<td>56,1</td>
<td class="highlight-positive">-6,1</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">53,6</td>
<td>50,9</td>
<td class="highlight">+2,7</td>
<td>Ortalamanın biraz üzerinde</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">50,0</td>
<td>50,8</td>
<td class="highlight-positive">-0,8</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">50,0</td>
<td>50,9</td>
<td class="highlight-positive">-0,9</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">42,9</td>
<td>44,9</td>
<td class="highlight-positive">-2,0</td>
<td>Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Ruh sağlığı göstergeleri belediye ortalamasında seyretmektedir. Düşük iş stresi/yükü (%50,9) ve güçlü stres-destek dengesi (+27,7) olumlu etki yapmakta, ancak üzgün/çökkün hissetme skoru (%53,6, +2,7) belediye ortalamasının biraz üzerindedir. Bu durum, düşük stresli ortama rağmen kariyer gelişimi ve performans sistemi memnuniyetsizliğinin psikolojik etkisi olabilir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>

<table>
<thead>
<tr>
<th>Platform</th>
<th>Strateji Gel. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram - Belediye</strong></td>
<td class="stat-value">85,7</td>
<td>81,0</td>
<td class="highlight-positive">+4,7</td>
</tr>
<tr>
<td><strong>Instagram - Başkan</strong></td>
<td class="stat-value">71,4</td>
<td>76,9</td>
<td class="">-5,5</td>
</tr>
<tr>
<td><strong>Twitter/X - Belediye</strong></td>
<td class="stat-value">42,9</td>
<td>31,1</td>
<td class="highlight-positive">+11,8</td>
</tr>
<tr>
<td><strong>Twitter/X - Başkan</strong></td>
<td class="stat-value">42,9</td>
<td>29,3</td>
<td class="highlight-positive">+13,6</td>
</tr>
<tr>
<td><strong>Facebook - Belediye</strong></td>
<td class="stat-value">14,3</td>
<td>42,8</td>
<td class="highlight-critical">-28,5</td>
</tr>
<tr>
<td><strong>Facebook - Başkan</strong></td>
<td class="stat-value">14,3</td>
<td>39,6</td>
<td class="highlight-critical">-25,3</td>
</tr>
<tr>
<td><strong>NextSosyal - Belediye</strong></td>
<td class="stat-value">42,9</td>
<td>17,8</td>
<td class="highlight-positive">+25,1</td>
</tr>
<tr>
<td><strong>NextSosyal - Başkan</strong></td>
<td class="stat-value">28,6</td>
<td>17,6</td>
<td class="highlight-positive">+11,0</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Twitter/X ve NextSosyal takip oranları belediye ortalamasının belirgin üzerindedir. Facebook takip oranları ise oldukça düşüktür - genç ve dijital okuryazarlığı yüksek bir personel profiline işaret edebilir.</p>

<div class="page-break"></div>`
        },
        "yazi_isleri": {
            name: "Yazı İşleri Müdürlüğü",
            html: `<h1>Yazı İşleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Yazı İşleri Müdürlüğüne göre yemekhane hizmetinin iyileştirilmesi (kalite, temizlik, memur-işçi fiyat eşitliği), bina içi koku makinelerinin kaldırılması veya ayarlanması, arşiv birimi havalandırma sisteminin düzeltilmesi ve ofis temizliğinin artırılması izlenmesi gereken alanlar olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">35/37 kişi (%94,6)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+24,2 ⭐</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%90,5</td>
            <td class="avg">%90,8</td>
            <td class="diff">-0,3</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar)</span>
            </td>
            <td class="value">%57,6</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-11,5 ↓ (olumlu)</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları vb.)</span>
            </td>
            <td class="value">%76,7</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-warning">-5,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+19,1</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+5,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%54,1</td>
            <td class="avg">%52,2</td>
            <td class="diff">+1,9</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%34,5</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-10,4 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">17 kişi (%48,6)</td>
            <td class="avg">-</td>
            <td class="diff">Yüksek katılım</td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çok yüksek anket katılımı (%94,6):</strong> Personelin görüşlerini bildirme motivasyonu güçlü.</li>
<li><strong>Düşük iş stresi/yükü (%57,6, -11,5):</strong> Belediyenin en rahat çalışma ortamlarından biri.</li>
<li><strong>Yönetici ilişkileri (%88,4, +1,6):</strong> Amir desteği ve eşit yaklaşım algısı olumlu.</li>
<li><strong>Düşük sigara kullanımı (%34,5, -10,4):</strong> Belediye ortalamasının belirgin altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çalışma alanı temizliği (%56,9, -22,5):</strong> Belediyenin en düşük skorlarından - masa/ofis temizliği yetersiz.</li>
<li><strong>Isıtma/soğutma (%59,5, -14,6):</strong> Özellikle arşiv birimi havalandırma sorunu mevcut.</li>
<li><strong>Kurumsal iletişim (%69,8, -10,0):</strong> Belediye ortalamasının belirgin altında.</li>
<li><strong>Yetkinlik & performans (%68,2, -9,0):</strong> Performans değerlendirme sistemi memnuniyeti düşük.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yemekhane sorunu yaygın:</strong> Açık uçlu yorumların büyük çoğunluğu yemek kalitesi, temizlik (tepsi, çatal-kaşık kirliliği) ve memur-işçi fiyat eşitsizliği konularında.</li>
<li><strong>Koku makineleri rahatsızlığı:</strong> Koridorlardaki kokumatikler astım ve alerji hastaları için ciddi sorun oluşturuyor - birden fazla kişi tarafından dile getirilmiş.</li>
<li><strong>Arşiv birimi havalandırma:</strong> Hava sirkülasyonu yetersizliği ve hijyen koşulları endişe konusu.</li>
<li><strong>Taleplere yanıt gecikmesi:</strong> 40 gündür onaylanmayan sandalye talebi örneği, idari süreçlerin yavaşlığına işaret.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Yazı İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">84,7</td>
<td class="stat-value">91,3</td>
<td class="highlight-warning">-6,6</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">82,2</td>
<td class="stat-value">86,6</td>
<td class="highlight">-4,4</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü</strong></td>
<td class="stat-value">57,6</td>
<td class="stat-value">69,1</td>
<td class="highlight-positive">-11,5</td>
<td>Düşük (olumlu) ✓</td>
</tr>
<tr>
<td><strong>Yönetici İlişkileri</strong></td>
<td class="stat-value">88,4</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+1,6</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Ekip Uyumu</strong></td>
<td class="stat-value">83,7</td>
<td class="stat-value">86,9</td>
<td class="highlight">-3,2</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kurumsal İletişim</strong></td>
<td class="stat-value">69,8</td>
<td class="stat-value">79,8</td>
<td class="highlight-critical">-10,0</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">62,7</td>
<td class="stat-value">72,2</td>
<td class="highlight-critical">-9,5</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">87,5</td>
<td class="stat-value">92,8</td>
<td class="highlight-warning">-5,3</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">68,2</td>
<td class="stat-value">77,2</td>
<td class="highlight-critical">-9,0</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">68,4</td>
<td class="stat-value">75,8</td>
<td class="highlight-warning">-7,4</td>
<td>Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Tema Bazlı Değerlendirme:</strong> İş stresi teması (%57,6, -11,5) belediyenin en düşük değerlerinden biri olup, birimin idari/büro işi yapısını yansıtmaktadır. Ancak çalışma koşulları (%62,7, -9,5), kurumsal iletişim (%69,8, -10,0) ve yetkinlik & performans (%68,2, -9,0) temaları düşüktür. Açık uçlu yorumlardaki yemekhane, temizlik ve havalandırma şikayetleri çalışma koşulları skoruyla tutarlıdır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Yazı İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S16.</strong> Amirim çalışanlara eşit yaklaşır, ayrımcılık yapmaz.</td>
<td class="stat-value">88,8</td>
<td>82,8</td>
<td class="highlight-positive">+6,0</td>
</tr>
<tr>
<td><strong>S14.</strong> Sorun yaşadığımda amirim destek olmak için çaba gösterir.</td>
<td class="stat-value">90,2</td>
<td>86,7</td>
<td class="highlight-positive">+3,5</td>
</tr>
<tr>
<td><strong>S15.</strong> Kendi çalışmamı etkileyen kararlara katılma ve fikirlerimi söyleyebilirim.</td>
<td class="stat-value">84,5</td>
<td>82,5</td>
<td class="highlight-positive">+2,0</td>
</tr>
<tr>
<td><strong>S8.</strong> İşim gereği duygusal olarak zorlayıcı durumlarla sık karşılaşırım. <em>(düşük = olumlu)</em></td>
<td class="stat-value">55,2</td>
<td>70,8</td>
<td class="highlight-positive">-15,6 (olumlu)</td>
</tr>
<tr>
<td><strong>S10.</strong> Vatandaş/başvuru talep yoğunluğu işim gereği fazladır. <em>(düşük = olumlu)</em></td>
<td class="stat-value">56,0</td>
<td>70,6</td>
<td class="highlight-positive">-14,6 (olumlu)</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Yazı İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S26.</strong> Çalışma alanlarımın temizliği yeterlidir.</td>
<td class="stat-value">56,9</td>
<td>79,4</td>
<td class="highlight-critical">-22,5 ⚠️</td>
</tr>
<tr>
<td><strong>S27.</strong> Isıtma/soğutma (iklimlendirme) sistemleri yeterlidir.</td>
<td class="stat-value">59,5</td>
<td>74,1</td>
<td class="highlight-critical">-14,6 ⚠️</td>
</tr>
<tr>
<td><strong>S11.</strong> İşimi tamamlamak için sık sık zaman sıkışıklığı yaşarım. <em>(düşük = olumlu)</em></td>
<td class="stat-value">52,6</td>
<td>64,7</td>
<td class="highlight-positive">-12,1 (olumlu)</td>
</tr>
<tr>
<td><strong>S30.</strong> Yemekhane/yemek hizmeti kalitesinden memnunum.</td>
<td class="stat-value">46,6</td>
<td>57,2</td>
<td class="highlight-critical">-10,6</td>
</tr>
<tr>
<td><strong>S23.</strong> Yaptığımız öneri ve geri bildirimlerin sonuçları hakkında bilgilendiriliriz.</td>
<td class="stat-value">66,4</td>
<td>79,2</td>
<td class="highlight-critical">-12,8</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> S26 çalışma alanı temizliği (%56,9, -22,5) belediyenin en düşük skorlarından biridir. Açık uçlu yorumlarda "çalıştığımız ortamda düzenli olarak temizlik faaliyetleri yapılmıyor" ifadesi bu skorla birebir örtüşmektedir. S27 ısıtma/soğutma (%59,5, -14,6) düşüklüğü ise arşiv birimi havalandırma şikayetleriyle tutarlıdır. S8 duygusal zorlayıcılık (%55,2, -15,6), S10 vatandaş yoğunluğu (%56,0, -14,6) ve S11 zaman sıkışıklığı (%52,6, -12,1) skorlarının düşük olması olumludur - birimin büro/idari işi yapısı gereği iş stresi/yükü düşüktür. S16 amir eşitliği (%88,8, +6,0) ve S14 amir desteği (%90,2, +3,5) yüksek olması, yönetici ilişkilerinin güçlü olduğunu göstermektedir.</p>

<h2>3. Ruh Sağlığı Taraması</h2>

<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Yazı İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S46.</strong> Keyif alamama</td>
<td class="stat-value">62,1</td>
<td>56,1</td>
<td class="highlight">+6,0</td>
</tr>
<tr>
<td><strong>S47.</strong> Üzgün/çökkün hissetme</td>
<td class="stat-value">51,0</td>
<td>50,9</td>
<td class="">+0,1</td>
</tr>
<tr>
<td><strong>S48.</strong> Gerginlik/kaygı</td>
<td class="stat-value">53,8</td>
<td>50,8</td>
<td class="">+3,0</td>
</tr>
<tr>
<td><strong>S49.</strong> Endişeleri kontrol edememe</td>
<td class="stat-value">49,1</td>
<td>50,9</td>
<td class="highlight-positive">-1,8</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">34,5</td>
<td>44,9</td>
<td class="highlight-positive">-10,4</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Genel ruh sağlığı riski (%54,1) belediye ortalamasına yakındır. S46 keyif alamama (+6,0) biraz yüksek olsa da, düşük iş stresi/yükü sayesinde diğer göstergeler ortalamadadır. Sigara kullanımı (%34,5, -10,4) belediyenin en düşük oranlarından biridir - büro ortamında çalışan personelin profili ile tutarlıdır.</p>

<h2>4. Açık Uçlu Yorumlar</h2>

<p>Yazı İşleri Müdürlüğü'nden <strong>17 kişi</strong> açık uçlu yorum yapmıştır (%48,6 katılım).</p>

<p><strong>1. Yemekhane Sorunları (10+ yorum):</strong></p>
<div class="quote">"Yemekhanede yemekler ilgisiz ve özensiz yapılıyor. Özellikle çorba ve bulgur pilavlarında baharatlar çok fazla."</div>
<div class="quote">"Yemekhanede çıkan yemekler, yemek tepsileri, çatal ve kaşıklar çok kirli."</div>
<div class="quote">"Yemek hizmetinde adil olunması gerekli. Memur ucuzca yemek yiyor, işçi pahalıya."</div>
<div class="quote">"Yemekhane servis gereçlerinin yenilenmesi, yemek kalitesinin düzeltilmesi."</div>

<p><strong>2. Koku Makineleri Rahatsızlığı (4 yorum):</strong></p>
<div class="quote">"Her katta bulunan kokumatikler çok gereksiz, astım ve nefes darlığı olanlar için problem teşkil ediyor."</div>
<div class="quote">"Hizmet binası katlarında bulunan kokular özellikle alerjik astımı olan kişileri aşırı derecede rahatsız etmektedir, kaldırılmasını talep ediyoruz."</div>

<p><strong>3. Çalışma Ortamı ve Havalandırma (3 yorum):</strong></p>
<div class="quote">"Arşiv biriminde havalandırma olmamasından kaynaklı mevcut ve olası sağlık sorunlarının önüne geçilebilmesi adına, gerekli iyileştirme yapılması."</div>
<div class="quote">"Çalıştığımız ortamda düzenli olarak temizlik faaliyetleri yapılmıyor, bununla ilgili iyileştirme yapılmasını talep ediyorum."</div>

<p><strong>4. Servis ve Diğer Talepler (3 yorum):</strong></p>
<div class="quote">"Servisler geç geliyor. Sabah ve akşam saatler belirsiz."</div>
<div class="quote">"40 gündür sandalye talebimiz onaylanmıyor."</div>
<div class="quote">"Personelin dinlenebileceği, yemek, kahve içebileceği dinlenme alanı yapılmasını talep ediyoruz."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlar, nicel verilerle güçlü bir tutarlılık göstermektedir. S26 çalışma alanı temizliği (%56,9, -22,5) ve S27 ısıtma/soğutma (%59,5, -14,6) skorları, temizlik ve havalandırma şikayetleriyle doğrudan örtüşmektedir. Yemekhane şikayetlerinin yoğunluğu (10+ yorum) dikkat çekicidir - kalite, temizlik ve memur-işçi fiyat eşitsizliği üç ana tema olarak öne çıkmaktadır. Koku makineleri rahatsızlığı, sağlık açısından ciddiye alınması gereken bir konudur.</p>

<h2>5. Sosyal Medya Takip Analizi</h2>

<table>
<thead>
<tr>
<th>Platform</th>
<th>Yazı İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram - Belediye</strong></td>
<td class="stat-value">82,8</td>
<td>81,0</td>
<td class="highlight-positive">+1,8</td>
</tr>
<tr>
<td><strong>Instagram - Başkan</strong></td>
<td class="stat-value">86,2</td>
<td>76,9</td>
<td class="highlight-positive">+9,3</td>
</tr>
<tr>
<td><strong>Twitter/X - Belediye</strong></td>
<td class="stat-value">24,1</td>
<td>31,1</td>
<td class="">-7,0</td>
</tr>
<tr>
<td><strong>Twitter/X - Başkan</strong></td>
<td class="stat-value">34,5</td>
<td>29,3</td>
<td class="highlight-positive">+5,2</td>
</tr>
<tr>
<td><strong>Facebook - Belediye</strong></td>
<td class="stat-value">31,0</td>
<td>42,8</td>
<td class="">-11,8</td>
</tr>
<tr>
<td><strong>Facebook - Başkan</strong></td>
<td class="stat-value">34,5</td>
<td>39,6</td>
<td class="">-5,1</td>
</tr>
<tr>
<td><strong>NextSosyal - Belediye</strong></td>
<td class="stat-value">20,7</td>
<td>17,8</td>
<td class="highlight-positive">+2,9</td>
</tr>
<tr>
<td><strong>NextSosyal - Başkan</strong></td>
<td class="stat-value">27,6</td>
<td>17,6</td>
<td class="highlight-positive">+10,0</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Instagram Başkan (+9,3) ve NextSosyal Başkan (+10,0) takip oranları dikkat çekici şekilde yüksektir. Facebook takip oranları belediye ortalamasının altındadır. Personelin başkan hesaplarına olan ilgisi, kurumsal aidiyeti yansıtmaktadır.</p>`
        },
        "genclik_spor": {
            name: "Gençlik ve Spor Hizmetleri Müdürlüğü",
            html: `<h1>Gençlik ve Spor Hizmetleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Gençlik ve Spor Hizmetleri Müdürlüğü, belediyenin en güçlü performans gösteren birimlerinden biridir. Tüm tema alanlarında belediye ortalamasının üzerinde skorlar, düşük iş stresi/yükü ve güçlü kurum desteği ile sağlıklı bir çalışma ortamına sahiptir. Personelin düğün salonu ve sosyal imkan talepleri, tesis bakımı ve ekipman yenileme ihtiyaçları izlenmesi gereken alanlar olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">117/131 kişi (%89,3)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+18,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%92,7</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+1,9</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%63,6</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-5,5 ↓</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%85,9</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+3,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+22,3</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+9,1</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%48,0</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-4,2 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%43,6</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-1,3</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">22 kişi (%18,8)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
        
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>10 temada da ortalamanın üzerinde:</strong> Müdürlük, tüm tema alanlarında belediye ortalamasını aşmaktadır - belediyenin en dengeli ve güçlü performans gösteren birimlerinden biridir.</li>
<li><strong>Kamu hizmeti motivasyonu (%94,5):</strong> Belediye ortalamasının 1,7 puan üzerinde. Topluma hizmet gururu (%95,9) çok yüksek.</li>
<li><strong>Yöneticilerle ilişkiler (%90,9):</strong> Belediye ortalamasının 4,1 puan üzerinde. Amir ulaşılabilirliği (%95,5), amir saygısı (%94,3) ve amir desteği (%91,8) çok güçlü.</li>
<li><strong>Çalışma arkadaşları (%90,8):</strong> Belediye ortalamasının 3,9 puan üzerinde. Ekip dayanışması (%93,1) ve iş arkadaşları uyumu (%95,0) çok yüksek.</li>
<li><strong>Düşük iş stresi/yükü (%63,6):</strong> Belediye ortalamasının 5,5 puan altında. Zaman sıkışıklığı (%54,1) ve görev yükü (%57,8) düşük.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yemekhane hizmeti (%61,4):</strong> Belediye ortalamasının 4,2 puan üzerinde olmakla birlikte, açık uçlu yorumlarda yemek kalitesi ve fiyat eşitliği şikayetleri var.</li>
<li><strong>Servis hizmeti (%65,5):</strong> Belediye ortalamasının 2,2 puan altında.</li>
<li><strong>Sosyal medya takibi:</strong> Instagram dışındaki platformlarda belediye ortalamasının altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Belediyenin en dengeli müdürlüklerinden:</strong> 10 temanın tamamında belediye ortalamasının üzerinde - JD-R modeli açısından ideal profil.</li>
<li><strong>Düğün salonu talebi:</strong> Açık uçlu yorumlarda en sık tekrar eden tema, personele düğün salonunda indirimli/ücretsiz hizmet talebidir.</li>
<li><strong>Tesis bakımı ve ekipman yenileme:</strong> Spor tesislerinde çalışan personel, eski tesislerin bakıma ihtiyacı olduğunu ve ekipmanların yetersiz olduğunu belirtmiştir.</li>
<li><strong>Dönüşümlü çalışma sorunları:</strong> Farklı tesislerde dönüşümlü çalışan personel, iş bölümü uyumsuzluğundan şikayet etmiştir.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Gençlik Spor (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">91,9</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+0,6</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">90,4</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+3,8</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">63,6</td>
<td class="stat-value">69,1</td>
<td class="highlight-warning">-5,5</td>
<td class="highlight-positive">Düşük stres (olumlu)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">90,9</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+4,1</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">90,8</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+3,9</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">82,0</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+2,2</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">76,8</td>
<td class="stat-value">72,2</td>
<td class="highlight-positive">+4,6</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">94,5</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+1,7</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">81,0</td>
<td class="stat-value">77,2</td>
<td class="highlight-positive">+3,8</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">80,6</td>
<td class="stat-value">75,8</td>
<td class="highlight-positive">+4,8</td>
<td class="highlight-positive">Güçlü</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Gençlik ve Spor Hizmetleri Müdürlüğü, 10 temanın tamamında belediye ortalamasının üzerinde performans göstermektedir. En güçlü alanlar düşük iş stresi/yükü (-5,5), eğitim & gelişim (+4,8), çalışma koşulları (+4,6) ve yöneticilerle ilişkiler (+4,1) olarak öne çıkmaktadır. Bu profil, JD-R modeli açısından ideal bir denge göstermektedir.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Gençlik Spor (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">57,8</td>
<td>70,4</td>
<td class="highlight-positive">-12,6 (düşük stres)</td>
</tr>
<tr>
<td><strong>S11: Zaman sıkışıklığı yaşarım</strong></td>
<td class="stat-value">54,1</td>
<td>64,7</td>
<td class="highlight-positive">-10,6 (düşük stres)</td>
</tr>
<tr>
<td><strong>S26: Çalışma alanlarımın temizliği yeterlidir</strong></td>
<td class="stat-value">88,6</td>
<td>79,4</td>
<td class="highlight-positive">+9,2</td>
</tr>
<tr>
<td><strong>S34: Ücretler piyasa koşullarına göre makul</strong></td>
<td class="stat-value">78,0</td>
<td>69,0</td>
<td class="highlight-positive">+9,0</td>
</tr>
<tr>
<td><strong>S29: Ortak alanlar yeterlidir</strong></td>
<td class="stat-value">78,3</td>
<td>70,4</td>
<td class="highlight-positive">+7,9</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Gençlik Spor (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">74,1</td>
<td>74,1</td>
<td class="">+0,0</td>
</tr>
<tr>
<td><strong>S1: Yaptığım iş yetenek ve becerilerimle uyumludur</strong></td>
<td class="stat-value">90,5</td>
<td>90,9</td>
<td class="">-0,4</td>
</tr>
<tr>
<td><strong>S24: Belediyedeki karar ve gelişmelerden haberdar edilirim</strong></td>
<td class="stat-value">78,9</td>
<td>80,4</td>
<td class="">-1,5</td>
</tr>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">72,2</td>
<td>70,6</td>
<td class="highlight-critical">+1,6</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">65,5</td>
<td>67,7</td>
<td class="">-2,2</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Gençlik ve Spor Hizmetleri Müdürlüğü, belediyenin en dengeli profillerinden birine sahiptir. Düşük iş stresi/yükü (S9: %57,8, -12,6; S11: %54,1, -10,6) ile yüksek çalışma koşulları memnuniyeti (S26: %88,6, +9,2) ve ücret memnuniyeti (S34: %78,0, +9,0) birlikte olumlu bir tablo oluşturmaktadır. Dikkat çekici olan, "geliştirilmesi gereken" alanların bile belediye ortalamasına çok yakın olmasıdır - en büyük negatif fark sadece -2,2 puandır (S32 servis). Bu durum, birimin genel olarak tüm alanlarda ortalama veya üzerinde performans sergilediğini göstermektedir. Düşük stres ve yüksek memnuniyet (%92,7) kombinasyonu, JD-R modeli açısından sağlıklı bir çalışma ortamına işaret etmektedir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Gençlik ve Spor Hizmetleri Müdürlüğü'nden <strong>22 kişi (%18,8)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Düğün Salonu Talebi (4+ yorum - en sık):</strong></p>
<div class="quote">"Personele düğün salonunda fiyat ayrıcalığı tanınması."</div>
<div class="quote">"Düğün salonumuz personele ücretsiz veya indirimli olarak faydalanması."</div>
<div class="quote">"Evlenecek olan belediye personellerimize düğün salonunun tahsis edilmesi."</div>

<p><strong>2. Yemekhane Fiyat Eşitliği (3+ yorum):</strong></p>
<div class="quote">"Yemekhane ücretlerinin tüm personel için adil olması gerekli. Tüm belediye personeline aynı fiyat tarifesinin uygulanması gerekli."</div>
<div class="quote">"Yemekler çok kötü lütfen ilgilenin."</div>

<p><strong>3. Tesis Bakımı ve Ekipman (3+ yorum):</strong></p>
<div class="quote">"Tesisimiz eski olduğundan bakıma ihtiyacı var."</div>
<div class="quote">"Çalışma alanlarımızdaki ekipmanların eski ve yetersiz durumda olması sağlıklı bir çalışmaya engel olmaktadır."</div>
<div class="quote">"Havuz bakım ve temizliğine önem verilmesini rica ediyorum."</div>

<p><strong>4. Sosyal Etkinlik Talebi (3+ yorum):</strong></p>
<div class="quote">"Personel için aktivitelerin ve gezilerin artırılması."</div>
<div class="quote">"Personeller arası kaynaşma, tanışma ve kurumumuza daha iyi hizmet vermek adına etkinlik ve organizasyonlar düzenlenebilir."</div>

<p><strong>5. Dönüşümlü Çalışma Sorunları (2 yorum):</strong></p>
<div class="quote">"Dönüşümlü çalışılan tesislerde işlerin iş bölümüne uyum sağlamadığı ve bu da bizi olumsuz etkilemektedir. Çözüm odaklı sonuçlar alamıyoruz."</div>

<p><strong>6. Personel Alanları:</strong></p>
<div class="quote">"Personel dolabı, yeme ve içme alanı iyileştirilmeli. Lavabo temizliği daha özenli olmalı."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlarda en belirgin tema <strong>düğün salonu talebi</strong>dir - personelin sosyal imkan beklentisini yansıtmaktadır. <strong>Tesis bakımı ve ekipman yenileme</strong> ihtiyacı, spor tesislerinde çalışan personelin somut bir sorunu olarak öne çıkmaktadır. <strong>Dönüşümlü çalışma</strong> sisteminde iş bölümü uyumsuzluğu, operasyonel bir sorun olarak belirtilmiştir.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Gençlik Spor (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">48,0</td>
<td>52,2</td>
<td class="highlight-positive">-4,2</td>
<td class="highlight-positive">(olumlu)</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">51,6</td>
<td>56,1</td>
<td class="highlight-positive">-4,5</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">45,8</td>
<td>50,9</td>
<td class="highlight-positive">-5,1</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">46,2</td>
<td>50,8</td>
<td class="highlight-positive">-4,6</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">48,2</td>
<td>50,9</td>
<td class="highlight-positive">-2,7</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">43,6</td>
<td>44,9</td>
<td class="highlight-positive">-1,3</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Gençlik ve Spor Hizmetleri Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının altındadır (olumlu). Tüm göstergelerde (keyif alamama, üzgünlük, gerginlik, endişe kontrolü) belediye ortalamasının 2,7-5,1 puan altında skorlar elde edilmiştir. Sigara kullanımı da ortalamanın altındadır. Bu sonuçlar, düşük iş stresi/yükü ve güçlü kurum desteği ile tutarlıdır.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Gençlik Spor (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">83,6</td>
<td>81,0</td>
<td class="highlight-positive">+2,6</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">75,5</td>
<td>76,9</td>
<td class="highlight">-1,4</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">25,5</td>
<td>31,1</td>
<td class="highlight">-5,6</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">23,6</td>
<td>29,3</td>
<td class="highlight">-5,7</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">36,4</td>
<td>42,8</td>
<td class="highlight">-6,4</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">34,5</td>
<td>39,6</td>
<td class="highlight">-5,1</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">10,0</td>
<td>17,8</td>
<td class="highlight">-7,8</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">10,0</td>
<td>17,6</td>
<td class="highlight">-7,6</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Gençlik ve Spor Hizmetleri Müdürlüğü'nde Belediye Instagram takibi belediye ortalamasının üzerinde (+2,6) olmakla birlikte, diğer tüm platformlarda (Twitter, Facebook, NextSosyal) belediye ortalamasının altında takip oranları görülmektedir. Spor tesislerinde saha ağırlıklı çalışan personelin sosyal medya kullanım alışkanlıkları bu farklılığı açıklayabilir.</p>

<!-- ==================== #109 - HALKLA İLİŞKİLER MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "sosyal_destek": {
            name: "Sosyal Destek Hizmetleri Müdürlüğü",
            html: `<h1>Sosyal Destek Hizmetleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Sosyal Destek Hizmetleri Müdürlüğü, güçlü kamu hizmeti motivasyonuna sahip olmakla birlikte, yüksek iş stresi/yükü ve belirsiz görev tanımları nedeniyle zorlu bir çalışma ortamına sahiptir. Görev-rol netliğinin artırılması, eğitim faaliyetlerinin güçlendirilmesi ve stres yönetimi desteği sağlanması önerilmektedir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">89/97 kişi (%91,8)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+21,4</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%89,9</td>
            <td class="avg">%90,8</td>
            <td class="diff">-0,9</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar)</span>
            </td>
            <td class="value">%75,2</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-warning">+6,0 ↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları vb.)</span>
            </td>
            <td class="value">%80,4</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">-1,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+5,2</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-8,0</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%55,6</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight">+3,4 (olumsuz)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%36,4</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-8,5 ↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">37 kişi (%41,6)</td>
            <td class="avg">-</td>
            <td class="diff">Yüksek katılım</td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kamu hizmeti motivasyonu (%95,0):</strong> Belediyenin en yüksek skorlarından biri. Topluma hizmet gururu (%97,4) çok yüksek.</li>
<li><strong>Yüksek yorum oranı (%41,6):</strong> 89 kişiden 37'si açık uçlu yorum yapmış - personelin görüşlerini ifade etme konusunda cesaretli olduğunu göstermektedir.</li>
<li><strong>Servis hizmeti (%74,7):</strong> Belediye ortalamasının 7 puan üzerinde.</li>
<li><strong>Ücret memnuniyeti (%73,4):</strong> Belediye ortalamasının 4,4 puan üzerinde.</li>
<li><strong>İş-kişi uyumu (%91,4):</strong> Personel yaptığı işi anlamlı buluyor.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Görev-rol netliği (%78,4):</strong> Belediye ortalamasının 8,2 puan altında. Sorumluluk alanları ve görev tanımları net değil.</li>
<li><strong>Eğitim & gelişim (%67,8):</strong> Belediye ortalamasının 8 puan altında. Eğitim faaliyetleri yetersiz bulunuyor.</li>
<li><strong>Yüksek iş stresi/yükü (%75,1):</strong> Vatandaş yoğunluğu (%78,3) ve zaman sıkışıklığı (%71,3) yüksek.</li>
<li><strong>Ekip uyumu (%82,7):</strong> Belediye ortalamasının 4,2 puan altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Sosyal hizmet paradoksu:</strong> Kamu hizmeti motivasyonu çok yüksek (%95) ancak görev-rol netliği düşük (%78,4). Personel işini seviyor ama görev sınırları belirsiz.</li>
<li><strong>Yüksek vatandaş yoğunluğu:</strong> Sosyal destek birimi olması nedeniyle yoğun vatandaş trafiği doğal, ancak bu stres kaynağı oluşturuyor.</li>
<li><strong>Zayıf stres-destek dengesi (+3,1):</strong> Belediye ortalamasının 10 puan altında. Yüksek stres yeterli destekle karşılanmıyor.</li>
<li><strong>Ruh sağlığı riski:</strong> Tüm ruh sağlığı göstergeleri belediye ortalamasının üzerinde - izlenmesi gereken bir durum.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Sosyal Destek (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">91,4</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+0,1</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">78,4</td>
<td class="stat-value">86,6</td>
<td class="highlight-critical">-8,2</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü</strong></td>
<td class="stat-value">75,2</td>
<td class="stat-value">69,1</td>
<td class="highlight-warning">+6,1</td>
<td class="highlight-critical">Yüksek (olumsuz) ⚠️</td>
</tr>
<tr>
<td><strong>Yönetici İlişkileri</strong></td>
<td class="stat-value">84,1</td>
<td class="stat-value">86,8</td>
<td>-2,7</td>
<td>Ortalamanın biraz altında</td>
</tr>
<tr>
<td><strong>Ekip Uyumu</strong></td>
<td class="stat-value">82,7</td>
<td class="stat-value">86,9</td>
<td class="highlight">-4,2</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kurumsal İletişim</strong></td>
<td class="stat-value">79,8</td>
<td class="stat-value">79,8</td>
<td>0,0</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">73,7</td>
<td class="stat-value">72,4</td>
<td class="highlight-positive">+1,2</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Ücret</strong></td>
<td class="stat-value">73,4</td>
<td class="stat-value">69,0</td>
<td class="highlight-positive">+4,4</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">95,0</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+2,2</td>
<td class="highlight-positive">Yüksek ✓</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">76,0</td>
<td class="stat-value">77,2</td>
<td>-1,3</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">67,8</td>
<td class="stat-value">75,8</td>
<td class="highlight-critical">-8,0</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
</tbody>
</table>

<p><strong>Tema Bazlı Değerlendirme:</strong> Sosyal Destek Hizmetleri Müdürlüğü, kamu hizmeti motivasyonunda (%95,0) belediyenin en yüksek skorlarından birine sahipken, görev-rol netliği (%78,4, -8,2) ve eğitim & gelişim (%67,8, -8,0) alanlarında ciddi eksiklikler görülmektedir. Yüksek iş stresi/yükü (%75,1, +6,0) sosyal hizmet birimlerinin doğası gereği beklenen bir durum olmakla birlikte, düşük kurum desteği ile birleştiğinde zorlanma göstergesi oluşturmaktadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Sosyal Destek (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">74,7</td>
<td>67,7</td>
<td class="highlight-positive">+7,0</td>
</tr>
<tr>
<td><strong>S34: Ücretler piyasa koşullarına göre makul</strong></td>
<td class="stat-value">73,4</td>
<td>69,0</td>
<td class="highlight-positive">+4,4</td>
</tr>
<tr>
<td><strong>S24: Belediyedeki karar ve gelişmelerden haberdar edilirim</strong></td>
<td class="stat-value">83,4</td>
<td>80,4</td>
<td class="highlight-positive">+3,0</td>
</tr>
<tr>
<td><strong>S35: Topluma hizmet etmekten gurur duyuyorum</strong></td>
<td class="stat-value">97,4</td>
<td>94,5</td>
<td class="highlight-positive">+2,9</td>
</tr>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">59,8</td>
<td>57,2</td>
<td class="">+2,6</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Sosyal Destek (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S11: Zaman sıkışıklığı yaşarım</strong></td>
<td class="stat-value">71,3</td>
<td>64,7</td>
<td class="highlight">+6,6</td>
</tr>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">78,3</td>
<td>70,6</td>
<td class="highlight">+7,7</td>
</tr>
<tr>
<td><strong>S42: Kurumda yapılan eğitim faaliyetlerini yeterli bulurum</strong></td>
<td class="stat-value">65,3</td>
<td>74,8</td>
<td class="highlight-critical">-9,5</td>
</tr>
<tr>
<td><strong>S4: Görev tanımım ve sorumluluklarım açıktır</strong></td>
<td class="stat-value">78,6</td>
<td>88,4</td>
<td class="highlight-critical">-9,8</td>
</tr>
<tr>
<td><strong>S5: Birimimde işlerin kimin sorumluluğunda olduğu açıktır</strong></td>
<td class="stat-value">76,6</td>
<td>86,6</td>
<td class="highlight-critical">-10,0</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Topluma hizmet gururu (S35: %97,4, +2,9) belediyenin en yüksek skorlarından biri iken, görev tanımı netliği (S4: %78,6, -9,8) ve sorumluluk alanları (S5: %76,6, -10,0) belediyenin en düşük skorları arasındadır - personel işini seviyor ancak "kimin ne yapacağı" konusunda belirsizlik yaşıyor. Vatandaş yoğunluğu (S10: %78,3, +7,7) ve zaman sıkışıklığı (S11: %71,3, +6,6) yüksek olup, sosyal hizmet birimlerinin yoğun iş temposuyla tutarlıdır. Eğitim yeterliliği (S42: %65,3, -9,5) düşük kalması, zorlu vakalara müdahale için yeterli eğitim verilmediğine işaret etmektedir. Servis hizmeti (S32: %74,7, +7,0) ve ücret memnuniyeti (S34: %73,4, +4,4) belediye ortalamasının üzerinde olması, kurumsal destek hizmetlerinin görece iyi durumda olduğunu göstermektedir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Sosyal Destek Hizmetleri Müdürlüğü'nden <strong>37 kişi (%41,6)</strong> açık uçlu yorum yapmıştır - belediyenin en yüksek yorum oranlarından biridir.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Eğitim ve Etkinlik Talepleri (6+ yorum):</strong></p>
<div class="quote">"Kurum içi etkinlikler, kişisel gelişim kursları, belediye personelleri ile geziler arttırılmalı, ilk yardım, afet eğitimleri her personele eğitim verilmeli."</div>
<div class="quote">"Kurum içi eğitimlerin sık olması gerektiğini ve çeşitli etkinliklerle iş ortamının daha keyifli hale getirilmesini, workshop düzenlemesinin iş verimini arttıracağını düşünüyorum."</div>
<div class="quote">"Birimimiz içerisinde eğitimler arttırılabilir."</div>

<p><strong>2. Yönetim ve İletişim Sorunları (5 yorum):</strong></p>
<div class="quote">"Müdürlükler içerisinde şef veya koordinatör gibi yetkili kişiler, zaman zaman yetkilerini kullanırken üstten konuşma tarzı sergileyebilmektedir. Bu durum, çalışma ortamında huzursuzluğa neden olmaktadır."</div>
<div class="quote">"Herkes çalıştığı mesleğini yapmak ister. Bizim birimde kimse kendi mesleğini yapmıyor. Müdür, şef, koordinatör çalışanlarına mobbing yapılıyor."</div>
<div class="quote">"Belediyemizde şefler ve amirler arasında personel ayrımcılığı olduğunu düşünüyorum."</div>

<p><strong>3. Maaş ve Özlük Hakları (5 yorum):</strong></p>
<div class="quote">"Meslek elemanları ve ofis elemanları arasındaki maaş farkının bir tık iyileştirilmesini rica ederim."</div>
<div class="quote">"Maaşlarla ilgili biraz iyileştirme olabilir."</div>
<div class="quote">"Moral ve motivasyon gezileri, maaşların iyileştirilmesi, çalışma sisteminin daha adil olması."</div>

<p><strong>4. Servis Hizmetleri (3 yorum):</strong></p>
<div class="quote">"Uzak mesafeden geldiğim için daha önce olan servisimiz kaldırıldı."</div>
<div class="quote">"Servis hizmetinin ilçe dışında da kullanılması konusunda, ilçe dışından gelen çalışma arkadaşlarımız sıkıntı yaşıyor."</div>

<p><strong>5. Sosyal Tesisler ve İndirimler (4 yorum):</strong></p>
<div class="quote">"Sosyal tesislerde indirim yeterli değil, çalışan performansı artırmak için şehir dışında geziler yapılmasını isterim."</div>
<div class="quote">"Sosyal tesislerdeki personel indirimi yetersiz."</div>

<p><strong>6. Olumlu Geri Bildirimler (3 yorum):</strong></p>
<div class="quote">"Öncelikle belediyede ve Sosyal Destek'te çalışmaktan mutluyum."</div>
<div class="quote">"Kurumumuzdan genel anlamda çok memnunum."</div>

<p><strong>Yorum Analizi:</strong> En sık dile getirilen konular <strong>eğitim talepleri</strong> ve <strong>yönetim/iletişim sorunlarıdır</strong>. Eğitim taleplerinin yoğunluğu, düşük eğitim skoru (%67,8, -8,0) ile tutarlıdır. Yönetim şikayetlerinde "mobbing", "ayrımcılık" ve "üstten konuşma" gibi ifadeler dikkat çekmektedir - bu durum görev-rol netliği eksikliği (%78,4, -8,2) ile birlikte değerlendirildiğinde, birim içi iletişim ve yetki kullanımında iyileştirme ihtiyacına işaret etmektedir.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Sosyal Destek (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S46: Keyif/İlgi Kaybı</strong></td>
<td class="stat-value">58,0</td>
<td>56,1</td>
<td class="highlight">+1,9</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">55,2</td>
<td>50,9</td>
<td class="highlight">+4,3</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">54,6</td>
<td>50,8</td>
<td class="highlight">+3,8</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">54,5</td>
<td>50,9</td>
<td class="highlight">+3,6</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">36,4</td>
<td>44,9</td>
<td class="highlight-positive">-8,5</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Sosyal Destek Hizmetleri Müdürlüğü personelinin ruh sağlığı göstergeleri belediye ortalamasının <strong>3-4 puan üzerindedir</strong>. Özellikle üzgün/çökkün hissetme (%55,2, +4,3) ve gergin/kaygılı hissetme (%54,6, +3,8) dikkat çekicidir. Sosyal hizmet personelinin zorlu vakalarla (yoksulluk, aile sorunları, engelli bakımı vb.) sürekli temas halinde olması, bu sonuçları açıklayabilir. Düzenli süpervizyon ve psikolojik destek mekanizmaları oluşturulması önerilmektedir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>

<table>
<thead>
<tr>
<th>Platform</th>
<th>Sosyal Destek (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram - Belediye</strong></td>
<td class="stat-value">87,0</td>
<td>81,0</td>
<td class="highlight-positive">+6,0</td>
</tr>
<tr>
<td><strong>Instagram - Başkan</strong></td>
<td class="stat-value">85,7</td>
<td>76,9</td>
<td class="highlight-positive">+8,8</td>
</tr>
<tr>
<td><strong>Twitter/X - Belediye</strong></td>
<td class="stat-value">31,2</td>
<td>31,1</td>
<td class="">+0,1</td>
</tr>
<tr>
<td><strong>Twitter/X - Başkan</strong></td>
<td class="stat-value">26,0</td>
<td>29,3</td>
<td class="">-3,3</td>
</tr>
<tr>
<td><strong>Facebook - Belediye</strong></td>
<td class="stat-value">33,8</td>
<td>42,8</td>
<td class="">-9,0</td>
</tr>
<tr>
<td><strong>Facebook - Başkan</strong></td>
<td class="stat-value">31,2</td>
<td>39,6</td>
<td class="">-8,4</td>
</tr>
<tr>
<td><strong>NextSosyal - Belediye</strong></td>
<td class="stat-value">15,6</td>
<td>17,8</td>
<td class="">-2,2</td>
</tr>
<tr>
<td><strong>NextSosyal - Başkan</strong></td>
<td class="stat-value">15,6</td>
<td>17,6</td>
<td class="">-2,0</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Instagram takip oranları belediye ortalamasının üzerindedir (Belediye: +6,0; Başkan: +8,8). Facebook ve NextSosyal takip oranları ortalamanın altında kalmaktadır.</p>

<div class="page-break"></div>`
        },
        "akilli_ulasim": {
            name: "Akıllı Ulaşım Sistemleri Müdürlüğü",
            html: `<h1>Akıllı Ulaşım Sistemleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Akıllı Ulaşım Sistemleri Müdürlüğü, güçlü yönetici ilişkileri ve ekip uyumu ile işlevsel bir yapıda faaliyet göstermektedir. Akıllı Ulaşım Sistemleri Müdürlüğüne göre eğitim imkanlarının artırılması ve ücret politikasının gözden geçirilmesi izlenmesi gereken alanlar olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">18/19 kişi (%94,7)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+24,3</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%88,3</td>
            <td class="avg">%90,8</td>
            <td class="diff">-2,5</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%60,3</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-8,8 ↓</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%84,2</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+1,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+23,9</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+10,7</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%44,5</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-7,7 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%26,7</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-18,2 ↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">2 kişi (%11,1)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
        
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yönetici ilişkileri (%94,1):</strong> Belediye ortalamasının 7,3 puan üzerinde. Amir ulaşılabilirliği (%98,3) ve geri bildirim kalitesi (%93,3) çok yüksek.</li>
<li><strong>Çalışma arkadaşları uyumu (%94,0):</strong> Belediye ortalamasının 7,1 puan üzerinde. Ekip dayanışması (%96,4) ve bilgi paylaşımı (%89,6) güçlü.</li>
<li><strong>Kamu hizmeti motivasyonu (%94,4):</strong> Topluma hizmet gururu (%96,7) ve işin toplum için anlamlı olduğu düşüncesi (%95,0) çok yüksek.</li>
<li><strong>Düşük iş stresi/yükü (%60,3):</strong> Belediye ortalamasının 8,8 puan altında. Özellikle vatandaş/başvuru yoğunluğu (%63,3) görece düşük.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Eğitim & Gelişim (%66,7):</strong> Belediye ortalamasının 9,1 puan altında. Eğitim faaliyetleri (%68,3) ve eğitimlerin katkısı (%65,0) düşük skorlu.</li>
<li><strong>Ücret memnuniyeti (%53,3):</strong> Belediye ortalamasının (%69,0) 15,7 puan altında. Açık uçlu yorumlarda da ücret konusu vurgulanmış.</li>
<li><strong>Yetkinlik & Performans (%75,0):</strong> Belediye ortalamasının 2,2 puan altında. Değerlendirme sonrası geri bildirim (%67,9) düşük.</li>
<li><strong>Servis hizmeti (%62,5):</strong> Belediye ortalamasının (%67,7) 5,2 puan altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Teknik birim - Düşük stres dengesi:</strong> Akıllı ulaşım sistemleri gibi teknik bir birimde vatandaşla doğrudan temas az olduğundan iş stresi/yükü düşük (%60,3), bu da sağlıklı bir çalışma ortamı sağlıyor.</li>
<li><strong>Yüksek ekip uyumu - Düşük ruh sağlığı riski:</strong> Çalışma arkadaşları uyumu (%94,0) ile düşük ruh sağlığı riski (%44,5) arasında pozitif korelasyon görülüyor.</li>
<li><strong>Ücret memnuniyetsizliği:</strong> Genel memnuniyet (%88,3) belediye ortalamasının altında kalmasında ücret memnuniyetsizliği (%53,3) etkili olabilir. Açık uçlu yorumlarda da "ücretlerin iyileştirilmesi" talebi mevcut.</li>
<li><strong>Sosyal medya Twitter/X kullanımı:</strong> Başkan (%40,0) ve Belediye (%40,0) Twitter hesapları belediye ortalamasının üzerinde takip ediliyor. Teknik personelin dijital platform kullanımına yatkınlığı olabilir.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Akıllı Ulaşım (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">92,6</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+1,3</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">88,8</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+2,2</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">60,3</td>
<td class="stat-value">69,1</td>
<td class="highlight-positive">-8,8</td>
<td class="highlight-positive">Düşük stres (olumlu)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">94,1</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+7,3</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">94,0</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+7,1</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">81,0</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+1,2</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">72,5</td>
<td class="stat-value">72,2</td>
<td class="highlight-positive">+0,3</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">94,4</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+1,6</td>
<td class="highlight-positive">Yüksek motivasyon</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">75,0</td>
<td class="stat-value">77,2</td>
<td class="highlight">-2,2</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">66,7</td>
<td class="stat-value">75,8</td>
<td class="highlight-critical">-9,1</td>
<td class="highlight-critical">Belirgin düşük</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Akıllı Ulaşım Sistemleri Müdürlüğü, 10 temadan 8'inde belediye ortalamasının üzerinde veya eşit performans göstermektedir. En yüksek skorlu alanlar yönetici ilişkileri (+7,3) ve çalışma arkadaşları (+7,1) iken, en düşük skorlu alan eğitim & gelişim (-9,1) olarak öne çıkmaktadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Akıllı Ulaşım (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">50,0</td>
<td>70,8</td>
<td class="highlight-positive">-20,8 (düşük stres)</td>
</tr>
<tr>
<td><strong>S15: Kararlara katılma ve fikrimi söyleme fırsatı</strong></td>
<td class="stat-value">96,7</td>
<td>82,5</td>
<td class="highlight-positive">+14,2</td>
</tr>
<tr>
<td><strong>S22: Anlaşmazlıkları iş arkadaşlarımızla kendi aramızda çözeriz</strong></td>
<td class="stat-value">95,0</td>
<td>84,7</td>
<td class="highlight-positive">+10,3</td>
</tr>
<tr>
<td><strong>S19: Ekibimizde dayanışma güçlüdür</strong></td>
<td class="stat-value">96,4</td>
<td>87,0</td>
<td class="highlight-positive">+9,4</td>
</tr>
<tr>
<td><strong>S16: Amirim çalışanlara eşit yaklaşır</strong></td>
<td class="stat-value">91,7</td>
<td>82,8</td>
<td class="highlight-positive">+8,9</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Akıllı Ulaşım (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S31: İş sağlığı ve güvenliği (İSG) uygulamaları yeterlidir</strong></td>
<td class="stat-value">70,0</td>
<td>76,3</td>
<td class="highlight">-6,3</td>
</tr>
<tr>
<td><strong>S41: Değerlendirme sonrasında yapıcı geri bildirim alırım</strong></td>
<td class="stat-value">67,9</td>
<td>74,2</td>
<td class="highlight">-6,3</td>
</tr>
<tr>
<td><strong>S42: Kurumda yapılan eğitim faaliyetlerini yeterli bulurum</strong></td>
<td class="stat-value">68,3</td>
<td>74,8</td>
<td class="highlight">-6,5</td>
</tr>
<tr>
<td><strong>S43: Eğitimler mesleki gelişimime katkı sağlar</strong></td>
<td class="stat-value">65,0</td>
<td>76,8</td>
<td class="highlight-critical">-11,8</td>
</tr>
<tr>
<td><strong>S34: Ücretler piyasa koşullarına göre makul</strong></td>
<td class="stat-value">53,3</td>
<td>69,0</td>
<td class="highlight-critical">-15,7</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Akıllı Ulaşım Sistemleri'nde düşük iş stresi/yükü (%60,3) ile yüksek ekip uyumu (%94,0) arasındaki olumlu ilişki, düşük ruh sağlığı riski (%44,5) sonucunu desteklemektedir. Kararlara katılma fırsatı (S15: %96,7, +14,2) ve anlaşmazlık çözme becerisi (S22: %95,0, +10,3) birimin güçlü iç dinamiklerini yansıtmaktadır. Öte yandan ücret memnuniyetsizliği (S34: %53,3, -15,7) müdürlüğün en kritik sorunudur ve genel memnuniyetin (%88,3) belediye ortalamasının altında kalmasında belirleyici faktör olabilir. Eğitim alanındaki düşük skorlar (S42: %68,3; S43: %65,0) ile performans geri bildirimi eksikliği (S41: %67,9) birlikte değerlendirildiğinde, kariyer gelişimi ve yetkinlik artırma konusunda iyileştirme ihtiyacı ortaya çıkmaktadır.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Akıllı Ulaşım Sistemleri Müdürlüğü'nden <strong>2 kişi (%11,1)</strong> açık uçlu yorum yapmıştır:</p>

<div class="quote">
"Ücretlerin iyileştirilmesi gerektiğini düşünüyorum."
</div>

<div class="quote">
"Personelin doğum günü, cenaze, evlilik ya da çocuğu olduğunda özel/genel mail gruplarına bilgilendirme veya tebrik maili atılması."
</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yanıtlarda iki ana tema öne çıkmaktadır: (1) <strong>Ücret memnuniyetsizliği</strong> - bu bulgu, S34 sorusundaki düşük skor (%53,3) ile tutarlıdır. (2) <strong>Sosyal iletişim talebi</strong> - personelin özel günlerinde kurumsal düzeyde bilgilendirme yapılması talebi, kurum içi iletişim ve aidiyet duygusunu güçlendirme ihtiyacına işaret etmektedir.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Akıllı Ulaşım (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">44,5</td>
<td>52,2</td>
<td class="highlight-positive">-7,7</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">45,0</td>
<td>56,1</td>
<td class="highlight-positive">-11,1</td>
<td class="highlight-positive">Ortalamanın belirgin altında</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">45,8</td>
<td>50,9</td>
<td class="highlight-positive">-5,1</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">46,2</td>
<td>50,8</td>
<td class="highlight-positive">-4,6</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">41,7</td>
<td>50,9</td>
<td class="highlight-positive">-9,2</td>
<td class="highlight-positive">Ortalamanın belirgin altında</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">26,7</td>
<td>44,9</td>
<td class="highlight-positive">-18,2</td>
<td class="highlight-positive">Belediyenin en düşük oranlarından</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Akıllı Ulaşım Sistemleri Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının altındadır (olumlu). Özellikle sigara kullanım oranı (%26,7), belediye ortalamasının (%44,9) çok altındadır. Düşük iş stresi/yükü (%60,3) ve güçlü ekip dayanışmasının (%96,4) bu olumlu tabloya katkı sağladığı düşünülebilir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Akıllı Ulaşım (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">80,0</td>
<td>81,0</td>
<td>-1,0</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">80,0</td>
<td>76,9</td>
<td class="highlight-positive">+3,1</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">40,0</td>
<td>31,1</td>
<td class="highlight-positive">+8,9</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">40,0</td>
<td>29,3</td>
<td class="highlight-positive">+10,7</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">40,0</td>
<td>42,8</td>
<td>-2,8</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">26,7</td>
<td>39,6</td>
<td class="highlight-critical">-12,9</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">13,3</td>
<td>17,8</td>
<td>-4,5</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">13,3</td>
<td>17,6</td>
<td>-4,3</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Twitter/X kullanımı belediye ortalamasının belirgin üzerindedir (Başkan +10,7, Belediye +8,9). Bu durum, teknik bir birim olan Akıllı Ulaşım Sistemleri personelinin dijital platformlara yatkınlığını yansıtıyor olabilir. Facebook Başkan hesabı takibi ise ortalamanın altında kalmaktadır (-12,9).</p>

<!-- ==================== #103 - BASIN VE YAYIN MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "zabita": {
            name: "Zabıta Müdürlüğü",
            html: `<h1>Zabıta Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Zabıta Müdürlüğüne göre çalışma saatlerinin yeniden düzenlenmesi (haftalık 40 saat talebi), maktu mesai ve SDS ödemelerinin diğer belediyelerle eşitlenmesi, zabıta yönetmeliğindeki ücretsiz spor salonu hakkının kullandırılması ve servis güzergahlarının genişletilmesi izlenmesi gereken alanlar olarak öne çıkmaktadır. Güçlü ekip dayanışması ve kamu hizmeti motivasyonu, çalışma koşullarına rağmen birimin ayakta kalmasını sağlayan önemli faktörlerdir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">112/134 kişi (%83,7)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+13,3</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%83,2</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-warning">-7,6 ⚠️</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar)</span>
            </td>
            <td class="value">%76,7</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-warning">+7,6 ↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları vb.)</span>
            </td>
            <td class="value">%79,8</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">-2,5</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+3,1</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-10,1</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%52,2</td>
            <td class="avg">%52,2</td>
            <td class="diff">0,0</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%46,3</td>
            <td class="avg">%44,9</td>
            <td class="diff">+1,4</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">62 kişi (%55,4)</td>
            <td class="avg">-</td>
            <td class="diff">Çok yüksek katılım</td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kamu hizmeti motivasyonu (%92,5):</strong> Topluma hizmet gururu yüksek.</li>
<li><strong>İş-kişi uyumu (%90,6):</strong> Personel işini seviyor ve anlamlı buluyor.</li>
<li><strong>Ekip uyumu (%89,2, +2,3):</strong> Dayanışma güçlü - zorlu saha koşullarında birbirine destek.</li>
<li><strong>Yüksek katılım (%83,7):</strong> Hem ankete hem açık uçlu yorumlara (62 kişi) yüksek katılım.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Ücret memnuniyeti (%56,1, -12,9):</strong> Diğer belediyelerle maaş/SDS karşılaştırması yapılmakta, yetersiz bulunmakta.</li>
<li><strong>Servis hizmeti (%58,3, -9,4):</strong> Güzergahların yetersizliği ve ilçe dışından gelenlerin mağduriyeti.</li>
<li><strong>İSG uygulamaları (%67,6, -8,7):</strong> Saha çalışması riskleri göz önünde bulundurulmalı.</li>
<li><strong>Genel memnuniyet (%83,2, -7,6):</strong> Belediye ortalamasının altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çalışma saatleri sorunu:</strong> Haftalık 40 saate indirilme talebi, hafta sonu mesailerinin kaldırılması, nöbet düzeninin iyileştirilmesi yoğun şekilde dile getirilmiş.</li>
<li><strong>Maktu mesai/SDS yetersizliği:</strong> Diğer İstanbul ilçe belediyeleriyle karşılaştırıldığında ücretlerin düşük kaldığı sıkça belirtilmiş.</li>
<li><strong>Ücretsiz spor salonu talebi:</strong> Zabıta yönetmeliğinde yer alan hakkın kullandırılması talep edilmiş.</li>
<li><strong>Müdürlük binası yetersizliği:</strong> Temel ihtiyaçların karşılanmadığı, etkinlik yapılmadığı ifade edilmiş.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Zabıta (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">90,6</td>
<td class="stat-value">91,3</td>
<td>-0,7</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">85,1</td>
<td class="stat-value">86,6</td>
<td>-1,5</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü</strong></td>
<td class="stat-value">76,7</td>
<td class="stat-value">69,1</td>
<td class="highlight-warning">+7,6</td>
<td>Yüksek (olumsuz)</td>
</tr>
<tr>
<td><strong>Yönetici İlişkileri</strong></td>
<td class="stat-value">83,1</td>
<td class="stat-value">86,8</td>
<td class="highlight">-3,7</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Ekip Uyumu</strong></td>
<td class="stat-value">89,2</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+2,3</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Kurumsal İletişim</strong></td>
<td class="stat-value">74,7</td>
<td class="stat-value">79,8</td>
<td class="highlight-warning">-5,1</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">68,5</td>
<td class="stat-value">72,2</td>
<td class="highlight">-3,7</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">92,5</td>
<td class="stat-value">92,8</td>
<td>-0,3</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">71,8</td>
<td class="stat-value">77,2</td>
<td class="highlight-warning">-5,4</td>
<td class="highlight-critical">Düşük ⚠️</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">71,9</td>
<td class="stat-value">75,8</td>
<td class="highlight">-3,9</td>
<td>Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Tema Bazlı Değerlendirme:</strong> İş stresi teması (%76,7, +7,6) yüksek olup, zabıtanın saha çalışmasının doğası gereği vatandaş yoğunluğu ve duygusal zorlayıcılık yaşandığını göstermektedir. Ekip uyumu (%89,2, +2,3) güçlü olması, zorlu koşullarda dayanışmanın korunduğuna işaret etmektedir. Kurumsal iletişim (%74,7, -5,1) ve yetkinlik & performans (%71,8, -5,4) düşük olması, açık uçlu yorumlardaki taleplerin yeterince karşılanmadığı algısıyla tutarlıdır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Zabıta (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S10.</strong> Vatandaş/başvuru talep yoğunluğu işim gereği fazladır. <em>(olumsuz)</em></td>
<td class="stat-value">84,0</td>
<td>70,6</td>
<td class="highlight">+13,4</td>
</tr>
<tr>
<td><strong>S8.</strong> İşim gereği duygusal olarak zorlayıcı durumlarla sık karşılaşırım. <em>(olumsuz)</em></td>
<td class="stat-value">82,3</td>
<td>70,8</td>
<td class="highlight">+11,5</td>
</tr>
<tr>
<td><strong>S27.</strong> Isıtma/soğutma (iklimlendirme) sistemleri yeterlidir.</td>
<td class="stat-value">81,8</td>
<td>74,1</td>
<td class="highlight-positive">+7,7</td>
</tr>
<tr>
<td><strong>S19.</strong> Ekibimizde dayanışma güçlüdür.</td>
<td class="stat-value">90,3</td>
<td>87,0</td>
<td class="highlight-positive">+3,3</td>
</tr>
<tr>
<td><strong>S9.</strong> Gün içinde yetiştirmem gereken görevler çoğu zaman fazla olur. <em>(olumsuz)</em></td>
<td class="stat-value">73,4</td>
<td>70,4</td>
<td class="">+3,0</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Zabıta (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S34.</strong> Piyasa koşullarıyla kıyaslandığında verilen ücretler makuldür.</td>
<td class="stat-value">56,1</td>
<td>69,0</td>
<td class="highlight-critical">-12,9 ⚠️</td>
</tr>
<tr>
<td><strong>S32.</strong> Servis (ulaşım) hizmeti kalitesi yeterlidir.</td>
<td class="stat-value">58,3</td>
<td>67,7</td>
<td class="highlight-critical">-9,4 ⚠️</td>
</tr>
<tr>
<td><strong>S31.</strong> İş sağlığı ve güvenliği (İSG) uygulamaları düzenli ve yeterlidir.</td>
<td class="stat-value">67,6</td>
<td>76,3</td>
<td class="highlight-critical">-8,7</td>
</tr>
<tr>
<td><strong>S33.</strong> Sağlanan teknoloji altyapısı yeterlidir.</td>
<td class="stat-value">67,2</td>
<td>75,2</td>
<td class="highlight-critical">-8,0</td>
</tr>
<tr>
<td><strong>S25.</strong> Bu kurumda çalışmaktan genel olarak memnunum.</td>
<td class="stat-value">83,2</td>
<td>90,8</td>
<td class="highlight-critical">-7,6 ⚠️</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> S34 ücret memnuniyeti (%56,1, -12,9) belediyenin en düşük skorlarından biridir. Açık uçlu yorumlarda İstanbul'daki diğer belediyelerle maaş ve SDS karşılaştırması yapılarak yetersizlik vurgulanmıştır. S32 servis hizmeti (%58,3, -9,4) düşük olup, güzergah yetersizliği şikayetleriyle tutarlıdır. S10 vatandaş yoğunluğu (%84,0, +13,4) ve S8 duygusal zorlayıcılık (%82,3, +11,5) belediyenin en yüksek değerleri arasındadır - zabıta mesleğinin doğası gereği yoğun vatandaş etkileşimi ve çatışma durumlarıyla karşılaşılmaktadır. S19 ekip dayanışması (%90,3, +3,3) yüksek olması, zorlu saha koşullarında personelin birbirine destek olduğunu göstermektedir.</p>

<h2>3. Ruh Sağlığı Taraması</h2>

<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Zabıta (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S46.</strong> Keyif alamama</td>
<td class="stat-value">58,7</td>
<td>56,1</td>
<td class="">+2,6</td>
</tr>
<tr>
<td><strong>S47.</strong> Üzgün/çökkün hissetme</td>
<td class="stat-value">51,1</td>
<td>50,9</td>
<td class="">+0,2</td>
</tr>
<tr>
<td><strong>S48.</strong> Gerginlik/kaygı</td>
<td class="stat-value">51,4</td>
<td>50,8</td>
<td class="">+0,6</td>
</tr>
<tr>
<td><strong>S49.</strong> Endişeleri kontrol edememe</td>
<td class="stat-value">46,3</td>
<td>50,9</td>
<td class="highlight-positive">-4,6</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">46,3</td>
<td>44,9</td>
<td class="">+1,4</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Genel ruh sağlığı riski (%52,2) belediye ortalamasına eşittir. Yüksek iş stresi/yüküne rağmen ruh sağlığı göstergelerinin ortalamada kalması, güçlü ekip dayanışmasının koruyucu etkisine işaret etmektedir. S49 endişe kontrolü (%46,3, -4,6) belediye ortalamasının altında olması olumlu bir bulgudur. Açık uçlu yorumlarda çalışma saatlerinin kişisel ve aile yaşantısına olumsuz etkisi dile getirilmiştir.</p>

<h2>4. Açık Uçlu Yorumlar</h2>

<p>Zabıta Müdürlüğü'nden <strong>62 kişi</strong> açık uçlu yorum yapmıştır (%55,4 katılım) - belediyenin en yüksek yorum sayısına sahip birimlerinden biridir.</p>

<p><strong>1. Maaş ve SDS İyileştirmesi (20+ yorum):</strong></p>
<div class="quote">"İstanbul içindeki belediyelerdeki zabıta memuru meslektaşlarımızla eşit maddi ve sosyal haklara sahip olmak istiyoruz."</div>
<div class="quote">"Diğer belediyelere kıyasen maaşları az buluyorum."</div>
<div class="quote">"Bizimle aynı işi yapanlara göre maaşımız çok az, hak ettiğimiz ücreti almak istiyorum."</div>
<div class="quote">"Maktu mesai ücreti aylık çalıştığımız 30 saat fazla çalışmaya ve resmi tatillerde izin yapmadan çalışmalarımıza rağmen çok düşük."</div>

<p><strong>2. Çalışma Saatleri (15+ yorum):</strong></p>
<div class="quote">"Çalışma saatlerimizin haftalık 40 saat olmasını talep ediyoruz."</div>
<div class="quote">"Meslek dezavantajlarından dolayı çalışma saatlerinin 40 saate indirilmesi, kişisel ve ailevi olarak yeteri kadar zaman ayıramama problemi yaşanmaktadır."</div>
<div class="quote">"Zabıta memuru olarak çalışma saatlerinin düşmesi veya hafta sonu mesaisinin kaldırılmasını talep ediyorum."</div>

<p><strong>3. Ücretsiz Spor Salonu Talebi (10+ yorum):</strong></p>
<div class="quote">"Zabıta yönetmeliğinde bulunan ücretsiz spor salonu kullanma hakkımızı talep ediyorum."</div>
<div class="quote">"Belediyemizin spor tesislerinin ücretsiz veya indirimli olmasını talep ederiz."</div>
<div class="quote">"Ücretsiz spor salonu istiyoruz."</div>

<p><strong>4. Servis ve Ulaşım (8+ yorum):</strong></p>
<div class="quote">"Servis güzergahlarını yetersiz buluyorum."</div>
<div class="quote">"Servis ağının güçlendirilmesi ve ilçe dışından gelen çalışanlara yakın yerlere kadar gitmesini talep ediyorum."</div>

<p><strong>5. Yemek Hizmeti ve Diğer (5+ yorum):</strong></p>
<div class="quote">"Yemek ücretlerinin artırılsın ama kalitesinin biraz daha iyileştirilmesi gerekiyor."</div>
<div class="quote">"Müdürlük binası yeterli değil, temel ihtiyaçlarımızı karşılamıyor. Müdürlüğümüzde hiçbir etkinlik mevcut değil."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlar, nicel verilerle güçlü bir tutarlılık göstermektedir. S34 ücret skoru (%56,1, -12,9) ile maaş/SDS şikayetlerinin yoğunluğu, S32 servis skoru (%58,3, -9,4) ile güzergah yetersizliği doğrudan örtüşmektedir. Çalışma saatleri konusu anket sorularında doğrudan yer almamakla birlikte, iş stresi/yükü (%76,7, +7,6) ve genel memnuniyet (%83,2, -7,6) üzerindeki etkisi açıkça görülmektedir. Ücretsiz spor salonu talebi, zabıta yönetmeliğinde yer alan bir hakkın kullandırılması isteğidir.</p>

<h2>5. Sosyal Medya Takip Analizi</h2>

<table>
<thead>
<tr>
<th>Platform</th>
<th>Zabıta (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram - Belediye</strong></td>
<td class="stat-value">82,1</td>
<td>81,0</td>
<td class="highlight-positive">+1,1</td>
</tr>
<tr>
<td><strong>Instagram - Başkan</strong></td>
<td class="stat-value">73,7</td>
<td>76,9</td>
<td class="">-3,2</td>
</tr>
<tr>
<td><strong>Twitter/X - Belediye</strong></td>
<td class="stat-value">25,3</td>
<td>31,1</td>
<td class="">-5,8</td>
</tr>
<tr>
<td><strong>Twitter/X - Başkan</strong></td>
<td class="stat-value">21,1</td>
<td>29,3</td>
<td class="highlight-critical">-8,2</td>
</tr>
<tr>
<td><strong>Facebook - Belediye</strong></td>
<td class="stat-value">30,5</td>
<td>42,8</td>
<td class="highlight-critical">-12,3</td>
</tr>
<tr>
<td><strong>Facebook - Başkan</strong></td>
<td class="stat-value">28,4</td>
<td>39,6</td>
<td class="highlight-critical">-11,2</td>
</tr>
<tr>
<td><strong>NextSosyal - Belediye</strong></td>
<td class="stat-value">13,7</td>
<td>17,8</td>
<td class="">-4,1</td>
</tr>
<tr>
<td><strong>NextSosyal - Başkan</strong></td>
<td class="stat-value">14,7</td>
<td>17,6</td>
<td class="">-2,9</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Instagram Belediye takip oranı ortalamanın üzerinde iken, Facebook ve Twitter takip oranları belediye ortalamasının belirgin altındadır (Facebook Belediye: -12,3; Facebook Başkan: -11,2). Bu durum, saha personelinin sosyal medya kullanım tercihlerini ve yoğun çalışma temposunu yansıtmaktadır.</p>`
        },
        "imar_sehircilik": {
            name: "İmar ve Şehircilik Müdürlüğü",
            html: `<h1>İmar ve Şehircilik Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> İmar ve Şehircilik Müdürlüğü, güçlü iş-kişi uyumu ve yönetici ilişkilerine sahip olmakla birlikte, anket sonuçlarına göre personel çok yoğun vatandaş talebi ve iş yükü altında çalışmaktadır. Negatif stres-destek dengesi (-2,3) ve yüksek ruh sağlığı riski (%58,5), personel takviyesi, yemekhane hizmetinin iyileştirilmesi ve vatandaş iletişim süreçlerinin düzenlenmesi gerekliliğine işaret etmektedir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">43/47 kişi (%91,5)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+21,1</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%87,5</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight">-3,3</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%83,2</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-critical">+14,1 ↑↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%80,9</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">-1,4</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">-2,3</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-15,5</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%58,5</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-warning">+6,3 (olumsuz)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%28,6</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-16,3 ↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">23 kişi (%53,5)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>İş-kişi uyumu (%91,4):</strong> Belediye ortalamasının 0,1 puan üzerinde. Yetenek-iş uyumu (%94,4) çok yüksek.</li>
<li><strong>Yöneticilerle ilişkiler (%88,6):</strong> Belediye ortalamasının 1,8 puan üzerinde. Amir desteği (%90,9) ve amir saygısı (%92,9) güçlü.</li>
<li><strong>Düşük sigara kullanımı (%28,6):</strong> Belediye ortalamasının 16,3 puan altında - belediyenin en düşük oranlarından biri.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>İş stresi (%83,2):</strong> Belediye ortalamasının 14,1 puan üzerinde. Vatandaş yoğunluğu (%90,2, +19,6), görev yükü (%86,6, +16,2) ve zaman sıkışıklığı (%81,5, +16,8) çok yüksek.</li>
<li><strong>Çalışma koşulları (%66,3):</strong> Belediye ortalamasının 5,9 puan altında. Yemekhane (%40,2, -17,0) belediyenin en düşük skorlarından.</li>
<li><strong>Ruh sağlığı riski (%58,5):</strong> Belediye ortalamasının 6,3 puan üzerinde (olumsuz). Keyif alamama (%64,0) ve endişe kontrolü (%59,1) yüksek.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Negatif stres-destek dengesi (-2,3):</strong> Belediyenin Gelirler Müdürlüğü'nden sonra ikinci negatif dengeli birimi - kritik profil.</li>
<li><strong>Çok yüksek vatandaş yoğunluğu (%90,2):</strong> Belediye ortalamasının 19,6 puan üzerinde - açık uçlu yorumlardaki "küfür yiyoruz, saygısızlık çok oluyor" ifadesiyle tutarlı.</li>
<li><strong>Yemekhane skoru çok düşük (%40,2):</strong> Belediye ortalamasının 17 puan altında - en sık şikayet konusu.</li>
<li><strong>Yüksek yorum oranı (%53,5):</strong> 43 katılımcıdan 23'ü yorum yapmış - personel görüş bildirme konusunda aktif.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>İmar ve Şehircilik (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">91,4</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+0,1</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">87,7</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+1,1</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">83,2</td>
<td class="stat-value">69,1</td>
<td class="highlight-critical">+14,1</td>
<td class="highlight-critical">Çok yüksek (olumsuz)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">88,6</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+1,8</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">86,0</td>
<td class="stat-value">86,9</td>
<td>-0,9</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">82,4</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+2,6</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">66,3</td>
<td class="stat-value">72,2</td>
<td class="highlight-warning">-5,9</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">89,0</td>
<td class="stat-value">92,8</td>
<td class="highlight">-3,8</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">76,7</td>
<td class="stat-value">77,2</td>
<td>-0,5</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">74,7</td>
<td class="stat-value">75,8</td>
<td>-1,1</td>
<td>Ortalama düzeyde</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> İmar ve Şehircilik Müdürlüğü, 10 temadan 4'ünde (görev-rol netliği, yöneticilerle ilişkiler, kurum içi iletişim, iş-kişi uyumu) belediye ortalamasının üzerinde performans göstermektedir. En kritik alan iş stresi/yükü (+14,1) olup, çalışma koşulları (-5,9) ve kamu hizmeti motivasyonu (-3,8) geliştirilmesi gereken alanlardır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>İmar Şehircilik (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S14: Amirim destek olmak için çaba gösterir</strong></td>
<td class="stat-value">90,9</td>
<td>86,7</td>
<td class="">+4,2</td>
</tr>
<tr>
<td><strong>S1: Yaptığım iş yetenek ve becerilerimle uyumludur</strong></td>
<td class="stat-value">94,4</td>
<td>90,9</td>
<td class="">+3,5</td>
</tr>
<tr>
<td><strong>S23: Öneri ve şikayetlerimle ilgili geri bildirim alırım</strong></td>
<td class="stat-value">82,7</td>
<td>79,2</td>
<td class="">+3,5</td>
</tr>
<tr>
<td><strong>S17: Amirim bana karşı saygılıdır</strong></td>
<td class="stat-value">92,9</td>
<td>89,9</td>
<td class="">+3,0</td>
</tr>
<tr>
<td><strong>S15: Kararlara katılma ve fikrimi söyleme fırsatı</strong></td>
<td class="stat-value">85,4</td>
<td>82,5</td>
<td class="">+2,9</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>İmar Şehircilik (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">54,3</td>
<td>67,7</td>
<td class="highlight-critical">-13,4</td>
</tr>
<tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">86,6</td>
<td>70,4</td>
<td class="highlight-critical">+16,2 (yüksek stres)</td>
</tr>
<tr>
<td><strong>S11: Zaman sıkışıklığı yaşarım</strong></td>
<td class="stat-value">81,5</td>
<td>64,7</td>
<td class="highlight-critical">+16,8 (yüksek stres)</td>
</tr>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">40,2</td>
<td>57,2</td>
<td class="highlight-critical">-17,0</td>
</tr>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">90,2</td>
<td>70,6</td>
<td class="highlight-critical">+19,6 (yüksek stres)</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> İmar ve Şehircilik Müdürlüğü, belediyenin en yüksek iş stresi/yüküne sahip birimlerinden biridir (%83,2). Vatandaş/başvuru yoğunluğu (S10: %90,2, +19,6), zaman sıkışıklığı (S11: %81,5, +16,8) ve görev yükü (S9: %86,6, +16,2) skorları belediyenin en yüksekleri arasındadır - bu durum imar birimlerinin doğası gereği yoğun başvuru trafiğiyle açıklanabilir. Bu yoğun strese rağmen yönetici ilişkileri güçlü kalmıştır (S14: %90,9, +4,2; S17: %92,9, +3,0), bu da yönetimin zorlu koşullarda bile personeli desteklediğini göstermektedir. Ancak kurumsal hizmetler ciddi sorun alanıdır: yemekhane (S30: %40,2, -17,0) belediyenin en düşük skorlarından biri, servis de (S32: %54,3, -13,4) oldukça düşüktür. Yüksek stres ve düşük fiziksel destek kombinasyonu, JD-R modeli açısından zorlanma göstergesi taşımaktadır.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>İmar ve Şehircilik Müdürlüğü'nden <strong>23 kişi (%53,5)</strong> açık uçlu yorum yapmıştır - bu yüksek bir katılım oranıdır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Yemekhane Kalitesi ve Ücreti (6+ yorum - en sık):</strong></p>
<div class="quote">"Yemekhane ücretleri pahalı. Dışarıya göre herhangi uygun yanı yok. Lezzetleri de iyi değil."</div>
<div class="quote">"Yemekhane hizmetleri daha ulaşılabilir ve kalite anlamında iyileştirilmelidir."</div>
<div class="quote">"Yemek hizmeti çok kötü."</div>

<p><strong>2. İş Yoğunluğu ve Stres (4+ yorum):</strong></p>
<div class="quote">"Ruhsat başvurularında yaşanan yoğunluktan dolayı neredeyse bir günde bir evraktan çıkışıyoruz. Bunun maddi ve manevi karşılığını talep ediyoruz."</div>
<div class="quote">"Vatandaş konusunda çok asabi, çok stresli günler oluyor. Küfür yiyoruz, saygısızlık çok oluyor."</div>
<div class="quote">"İş yoğunluğu ve stres altında çalışmanın verdiği yorgunluk ile maaş beklentisi ek ödemeler ve iyileştirmeler ile düzeltilmeli."</div>

<p><strong>3. Maaş İyileştirmesi (3+ yorum):</strong></p>
<div class="quote">"Maaş konusunda iyileştirme olması gerektiği görüşündeyim."</div>
<div class="quote">"İstanbul genelinde mevcut kira geçinme endeksleri düşünüldüğünde belediyemizin çalışanlar için ek ikramiye gibi maddi destekler ile çalışanlarını desteklemesi gerektiğini düşünüyorum."</div>

<p><strong>4. Servis ve Ulaşım (2+ yorum):</strong></p>
<div class="quote">"Belediyemize ulaşım çok zor. Bu konuda İETT ile görüşülebilmesi çok iyi olur. Tüm otobüsler öğrenci dolu olduğu için gelebilmemiz çok zor."</div>
<div class="quote">"Servis hizmeti yetersiz. Mescidi Selam sonrasındaki konumlara da ulaşım sağlanmalı."</div>

<p><strong>5. Dinlenme Alanları:</strong></p>
<div class="quote">"Sigara içmeyenler için, mola vermek isteyen personeller için alan yok."</div>
<div class="quote">"Sigara kullanan personel için dinlenebileceği alanın olmaması."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlarda en sık tekrar eden tema <strong>yemekhane kalitesi ve ücreti</strong>dir. Bu, S30 yemekhane skoru (%40,2) ile tutarlıdır. <strong>Vatandaş kaynaklı stres</strong> ("küfür yiyoruz") özellikle dikkat çekicidir ve yüksek iş stresi/yükü (%83,2) ile S10 vatandaş yoğunluğu (%90,2) skorlarıyla örtüşmektedir.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>İmar ve Şehircilik (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">58,5</td>
<td>52,2</td>
<td class="highlight-critical">+6,3</td>
<td class="highlight-critical">Yüksek (olumsuz)</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">64,0</td>
<td>56,1</td>
<td class="highlight-critical">+7,9</td>
<td class="highlight-critical">Yüksek</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">54,3</td>
<td>50,9</td>
<td class="highlight">+3,4</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">56,5</td>
<td>50,8</td>
<td class="highlight-critical">+5,7</td>
<td class="highlight-critical">Yüksek</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">59,1</td>
<td>50,9</td>
<td class="highlight-critical">+8,2</td>
<td class="highlight-critical">Yüksek</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">28,6</td>
<td>44,9</td>
<td class="highlight-positive">-16,3</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> İmar ve Şehircilik Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının üzerindedir (olumsuz). Özellikle endişe kontrolü (+8,2), keyif alamama (+7,9) ve gerginlik/kaygı (+5,7) göstergelerinde belirgin yükseklik dikkat çekicidir. Bu bulgular, yüksek iş stresi/yükü (%83,2) ve yoğun vatandaş talebi (%90,2) ile tutarlıdır. Ancak sigara kullanımı (%28,6) belediye ortalamasının çok altındadır.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>İmar ve Şehircilik (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">76,2</td>
<td>81,0</td>
<td class="highlight">-4,8</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">73,8</td>
<td>76,9</td>
<td class="highlight">-3,1</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">31,0</td>
<td>31,1</td>
<td>-0,1</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">31,0</td>
<td>29,3</td>
<td class="highlight-positive">+1,7</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">26,2</td>
<td>42,8</td>
<td class="highlight-critical">-16,6</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">23,8</td>
<td>39,6</td>
<td class="highlight-critical">-15,8</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">11,9</td>
<td>17,8</td>
<td class="highlight">-5,9</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">11,9</td>
<td>17,6</td>
<td class="highlight">-5,7</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> İmar ve Şehircilik Müdürlüğü, çoğu sosyal medya platformunda belediye ortalamasının altında takip oranlarına sahiptir. Özellikle Facebook takibi (-16,6 ve -15,8) belirgin şekilde düşüktür. Yalnızca Twitter/X Başkan hesabında ortalamanın hafif üzerinde (+1,7) takip görülmektedir.</p>

<!-- ==================== #113 - İNOVASYON VE TEKNOLOJİ MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "emlak_istimlak": {
            name: "Emlak ve İstimlak Müdürlüğü",
            html: `<h1>Emlak ve İstimlak Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Emlak ve İstimlak Müdürlüğü, güçlü ekip dayanışması ve yüksek kamu hizmeti motivasyonu ile öne çıkmaktadır. Anket sonuçlarına göre personel, iş stresi/yüküni yüksek, çalışma koşullarını ise yetersiz bulmaktadır. Emlak ve İstimlak Müdürlüğüne göre eğitim imkanlarının artırılması, çalışma koşullarının (yemek, servis, ortak alanlar) iyileştirilmesi, ücret politikasının (özellikle tekniker-mühendis dengesi) gözden geçirilmesi ve iş yükü dengesinin sağlanması izlenmesi gereken alanlar olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">26/26 kişi (%100)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+29,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%91,7</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+0,9</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%78,6</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-critical">+9,5 ↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%80,1</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">-2,2</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+1,5</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-11,7</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%56,7</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight">+4,5 (olumsuz)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%14,3</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-30,6 ↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">20 kişi (%76,9)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
        
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çalışma arkadaşları (%94,8):</strong> Belediye ortalamasının 7,9 puan üzerinde. Ekip uyumu (%97,6), dayanışma (%94,0) ve bilgi paylaşımı (%95,2) çok güçlü.</li>
<li><strong>Kamu hizmeti motivasyonu (%94,8):</strong> Belediye ortalamasının 2,0 puan üzerinde. Topluma hizmet gururu (%97,6) ve işin anlamlılığı (%95,0) yüksek.</li>
<li><strong>İş-kişi uyumu (%93,5):</strong> Belediye ortalamasının 2,2 puan üzerinde. Personel işini anlamlı buluyor (%96,3) ve işi seçtiği için mutlu (%95,2).</li>
<li><strong>Yöneticilerle ilişkiler (%89,4):</strong> Belediye ortalamasının 2,6 puan üzerinde. Amir saygısı (%95,2) ve eşit yaklaşım (%92,5) yüksek.</li>
<li><strong>Düşük sigara kullanımı (%14,3):</strong> Belediye ortalamasının (%44,9) 30,6 puan altında - belediyenin en düşük oranlarından biri.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Eğitim & Gelişim (%58,6):</strong> Belediye ortalamasının 17,2 puan altında. Eğitim faaliyetleri (%56,6) ve eğitimlerin katkısı (%60,5) çok düşük skorlu.</li>
<li><strong>Çalışma koşulları (%63,4):</strong> Belediye ortalamasının 8,8 puan altında. Temizlik (%65,5), ortak alanlar (%61,9), yemekhane (%47,2) ve servis (%51,4) düşük.</li>
<li><strong>Yüksek iş stresi/yükü (%78,6):</strong> Belediye ortalamasının 9,5 puan üzerinde. Vatandaş yoğunluğu (%83,3), zaman sıkışıklığı (%78,6) ve görev yükü (%79,8) yüksek.</li>
<li><strong>Yetkinlik & Performans (%70,1):</strong> Belediye ortalamasının 7,1 puan altında. Değerlendirme sonrası geri bildirim (%63,7) düşük.</li>
<li><strong>Ücret memnuniyeti (%51,2):</strong> Belediye ortalamasının (%69,0) 17,8 puan altında - açık uçlu yorumlarda da en sık dile getirilen konulardan.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yüksek yorum oranı (%76,9):</strong> 26 kişiden 20'si açık uçlu yorum yapmış - belediyenin en yüksek yorum oranı. Personelin görüş bildirme motivasyonu çok yüksek.</li>
<li><strong>Güçlü ekip - Düşük çalışma koşulları skoru:</strong> Çalışma arkadaşları skoru (%94,8) çok yüksek iken çalışma koşulları skoru (%63,4) düşük. Anket sonuçlarına göre personel, çalışma koşullarını yetersiz bulmakla birlikte güçlü bir ekip dayanışması sergilemektedir.</li>
<li><strong>Tekniker-Mühendis maaş adaletsizliği:</strong> Açık uçlu yorumlarda tekrar eden tema: "Tekniker ile mühendis arasında bir asgari ücret fark var, ama teknisyenle tekniker arasında 2.000 TL."</li>
<li><strong>Yemek ve servis şikayetleri yoğun:</strong> Yorumların büyük çoğunluğu yemek kalitesi/fiyatı ve servis yetersizliği üzerine.</li>
<li><strong>JD-R (İş Talepleri-Kaynakları) modeli açısından kritik:</strong> Yüksek iş stresi/yükü (%78,6) ile düşük kurum desteği (%80,1) kombinasyonu, zorlanma göstergesi açısından izlenmesi gereken bir profil oluşturmaktadır.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Emlak İst. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">93,5</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+2,2</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">83,9</td>
<td class="stat-value">86,6</td>
<td class="highlight">-2,7</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">78,6</td>
<td class="stat-value">69,1</td>
<td class="highlight-critical">+9,5</td>
<td class="highlight-critical">Yüksek stres (olumsuz)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">89,4</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+2,6</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">94,8</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+7,9</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">77,4</td>
<td class="stat-value">79,8</td>
<td class="highlight">-2,4</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">63,4</td>
<td class="stat-value">72,2</td>
<td class="highlight-critical">-8,8</td>
<td class="highlight-critical">Belirgin düşük</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">94,8</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+2,0</td>
<td class="highlight-positive">Yüksek motivasyon</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">70,1</td>
<td class="stat-value">77,2</td>
<td class="highlight-warning">-7,1</td>
<td class="highlight-critical">Belirgin düşük</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">58,6</td>
<td class="stat-value">75,8</td>
<td class="highlight-critical">-17,2</td>
<td class="highlight-critical">Çok düşük</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Emlak ve İstimlak Müdürlüğü, 10 temadan 4'ünde belediye ortalamasının üzerinde performans göstermektedir. En yüksek skorlu alan çalışma arkadaşları (+7,9) iken, en düşük skorlu alanlar eğitim & gelişim (-17,2), iş stresi/yükü (+9,5 - yüksek stres olumsuz) ve çalışma koşulları (-8,8) olarak öne çıkmaktadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Emlak İstimlak (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S20: Bilgi ve deneyim paylaşımı yaygındır</strong></td>
<td class="stat-value">95,2</td>
<td>85,4</td>
<td class="highlight-positive">+9,8</td>
</tr>
<tr>
<td><strong>S16: Amirim çalışanlara eşit yaklaşır</strong></td>
<td class="stat-value">92,5</td>
<td>82,8</td>
<td class="highlight-positive">+9,7</td>
</tr>
<tr>
<td><strong>S21: İş arkadaşlarımın desteği işimi kolaylaştırır</strong></td>
<td class="stat-value">95,2</td>
<td>85,6</td>
<td class="highlight-positive">+9,6</td>
</tr>
<tr>
<td><strong>S19: Ekibimizde dayanışma güçlüdür</strong></td>
<td class="stat-value">94,0</td>
<td>87,0</td>
<td class="highlight-positive">+7,0</td>
</tr>
<tr>
<td><strong>S22: Anlaşmazlıkları iş arkadaşlarımızla kendi aramızda çözeriz</strong></td>
<td class="stat-value">91,7</td>
<td>84,7</td>
<td class="highlight-positive">+7,0</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Emlak İstimlak (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S26: Çalışma alanlarımın temizliği yeterlidir</strong></td>
<td class="stat-value">65,5</td>
<td>79,4</td>
<td class="highlight-critical">-13,9</td>
</tr>
<tr>
<td><strong>S43: Eğitimler mesleki gelişimime katkı sağlar</strong></td>
<td class="stat-value">60,5</td>
<td>76,8</td>
<td class="highlight-critical">-16,3</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">51,4</td>
<td>67,7</td>
<td class="highlight-critical">-16,3</td>
</tr>
<tr>
<td><strong>S34: Ücretler piyasa koşullarına göre makul</strong></td>
<td class="stat-value">51,2</td>
<td>69,0</td>
<td class="highlight-critical">-17,8</td>
</tr>
<tr>
<td><strong>S42: Kurumda yapılan eğitim faaliyetlerini yeterli bulurum</strong></td>
<td class="stat-value">56,6</td>
<td>74,8</td>
<td class="highlight-critical">-18,2</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Emlak ve İstimlak Müdürlüğü'nde güçlü ekip dinamikleri ile zayıf kurumsal destek arasında belirgin bir kontrast bulunmaktadır. Bilgi paylaşımı (S20: %95,2, +9,8), amir eşitliği (S16: %92,5, +9,7) ve iş arkadaşı desteği (S21: %95,2, +9,6) çok yüksek skorlarla birimin içsel uyumunu gösterirken; ücret (S34: %51,2, -17,8), eğitim yeterliliği (S42: %56,6, -18,2) ve eğitim katkısı (S43: %60,5, -16,3) belediyenin en düşük skorları arasındadır. Bu tablo, personelin kendi aralarında iyi çalıştığını ancak kurumsal kaynaklardan (ücret, eğitim, servis) yeterince yararlanamadığını göstermektedir. Servis hizmeti memnuniyetsizliği (S32: %51,4, -16,3) de fiziksel koşullar sorunlarına işaret etmektedir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Emlak ve İstimlak Müdürlüğü'nden <strong>20 kişi (%76,9)</strong> açık uçlu yorum yapmıştır - bu belediyenin en yüksek yorum oranıdır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Yemek Kalitesi ve Fiyatı (8+ yorum):</strong></p>
<div class="quote">"Yemek kalitesinin iyi olmadığını düşünüyorum ve yıllardır bu durumda bir ilerleme olmadı."</div>
<div class="quote">"Belediyenin yemekleri çok ağır, çok rahatsız edici."</div>
<div class="quote">"Yemekler verdiğimiz ücrete değmiyor."</div>
<div class="quote">"Yemekhanedeki yemeklerin kalitesi artırılmalı ve alternatif yemek seçeneği olmalı (vejetaryen biri olarak yemek yiyemiyorum)."</div>

<p><strong>2. Servis Yetersizliği (5+ yorum):</strong></p>
<div class="quote">"Servis ağı genişletilmelidir. Taşoluk metro istasyonundan belediye binasına ücretsiz ring seferleri konulmalıdır."</div>
<div class="quote">"Komşu ilçelere servisin yetersiz olması."</div>
<div class="quote">"Servis araçları bekleme alanı binen kişilerin daha yakın adresine taşınabilir."</div>

<p><strong>3. Maaş/Ücret Adaletsizliği (5+ yorum):</strong></p>
<div class="quote">"Bir tekniker ile bir mühendis arasında bir asgari ücret fark var, ama bir teknisyenle tekniker arasında 2.000 TL. Sorumluluk çok daha fazla."</div>
<div class="quote">"Diğer belediyelere göre iş yoğunluğumuzun fazla olmasına rağmen en az maaş alanlardan olmamız düşündürücü."</div>
<div class="quote">"Maaşlar diğer belediyelere oranla eşit değil. Sosyal denge yardımları ve ikramiyeler yetersiz."</div>

<p><strong>4. Sosyal Etkinlik Talebi:</strong></p>
<div class="quote">"Kurum içerisindeki sosyal ve kültürel faaliyetlerin çeşitlendirilmesi."</div>
<div class="quote">"Personellere yönelik etkinlikler olması, örneğin geziler düzenlenmesi güzel olurdu."</div>

<p><strong>5. Çalışma Ortamı:</strong></p>
<div class="quote">"Çalışma koltukları rahat değil değiştirilmesini arz ederim."</div>
<div class="quote">"Çay ocaklarındaki personellerin yönetici ayrımı hoş bir izlenim bırakmıyor personel için."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yanıtlarda en belirgin temalar <strong>yemek kalitesi/fiyatı</strong>, <strong>servis yetersizliği</strong> ve <strong>maaş adaletsizliği</strong>dir. Özellikle tekniker-mühendis maaş farkının adaletsiz bulunması dikkat çekicidir. Yüksek yorum oranı (%76,9) personelin sorunlarını dile getirme konusundaki motivasyonunu ve beklentilerini yansıtmaktadır.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Emlak İst. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">56,7</td>
<td>52,2</td>
<td class="highlight">+4,5</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">58,3</td>
<td>56,1</td>
<td class="highlight">+2,2</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">53,8</td>
<td>50,9</td>
<td class="highlight">+2,9</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">57,5</td>
<td>50,8</td>
<td class="highlight-critical">+6,7</td>
<td class="highlight-critical">Belirgin yüksek</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">57,1</td>
<td>50,9</td>
<td class="highlight-critical">+6,2</td>
<td class="highlight-critical">Belirgin yüksek</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">14,3</td>
<td>44,9</td>
<td class="highlight-positive">-30,6</td>
<td class="highlight-positive">Çok düşük (olumlu)</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Emlak ve İstimlak Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının üzerindedir (olumsuz) - bu durum yüksek iş stresi/yükü (%78,6) ile tutarlıdır. Özellikle gerginlik/kaygı (+6,7) ve endişe kontrolü (+6,2) göstergelerinde belirgin yükseklik dikkat çekicidir. Buna karşın sigara kullanımı (%14,3) belediyenin en düşük oranlarından biridir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Emlak İst. (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">81,0</td>
<td>81,0</td>
<td>0,0</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">90,5</td>
<td>76,9</td>
<td class="highlight-positive">+13,6</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">33,3</td>
<td>31,1</td>
<td class="highlight-positive">+2,2</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">23,8</td>
<td>29,3</td>
<td class="highlight">-5,5</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">38,1</td>
<td>42,8</td>
<td class="highlight">-4,7</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">33,3</td>
<td>39,6</td>
<td class="highlight">-6,3</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">9,5</td>
<td>17,8</td>
<td class="highlight">-8,3</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">9,5</td>
<td>17,6</td>
<td class="highlight">-8,1</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Emlak ve İstimlak Müdürlüğü'nde Başkan Instagram hesabı takibi (%90,5) belediye ortalamasının belirgin üzerindedir (+13,6). Diğer platformlarda ise takip oranları genellikle ortalamanın altında veya eşit düzeydedir. NextSosyal kullanımı (%9,5) oldukça düşüktür.</p>

<!-- ==================== #106 - FEN İŞLERİ MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "basin_yayin": {
            name: "Basın ve Yayın Müdürlüğü",
            html: `<h1>Basın ve Yayın Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Basın ve Yayın Müdürlüğü, güçlü yönetici ilişkileri ve yüksek kamu hizmeti motivasyonu ile işlevsel bir yapıda faaliyet göstermektedir. Basın ve Yayın Müdürlüğüne göre çalışma koşullarının (temizlik, ısıtma, ortak alanlar) iyileştirilmesi, ücret politikasının gözden geçirilmesi ve ekip içi iletişimin güçlendirilmesi izlenmesi gereken alanlar olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">21/21 kişi (%100)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+29,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%93,1</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+2,3</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%61,8</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-7,3 ↓</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%84,1</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+1,8</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+22,3</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+9,1</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%47,6</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-4,6 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%38,9</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-6,0 ↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">13 kişi (%61,9)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
        
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yönetici ilişkileri (%94,8):</strong> Belediye ortalamasının 8,0 puan üzerinde. Amir ulaşılabilirliği (%100), geri bildirim (%97,2) ve destek (%97,2) çok yüksek.</li>
<li><strong>İş-kişi uyumu (%97,1):</strong> Belediye ortalamasının 5,8 puan üzerinde. Personel işini anlamlı buluyor (%98,4) ve işi seçtiği için mutlu (%97,2).</li>
<li><strong>Kamu hizmeti motivasyonu (%97,2):</strong> Belediye ortalamasının 4,4 puan üzerinde. Topluma hizmet gururu (%98,6) ve işin toplum için anlamlılığı (%98,6) çok yüksek.</li>
<li><strong>Yetkinlik & Performans (%82,4):</strong> Belediye ortalamasının 5,2 puan üzerinde. Performans değerlendirme kriterleri net ve adil bulunuyor.</li>
<li><strong>Sosyal medya takibi:</strong> Tüm platformlarda belediye ortalamasının 20-55 puan üzerinde. Birimin görev alanı gereği beklenen bir sonuç.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çalışma koşulları (%69,1):</strong> Belediye ortalamasının 3,1 puan altında. Özellikle temizlik (%68,1), ısıtma/soğutma (%65,3) ve ortak alanlar (%63,9) düşük skorlu.</li>
<li><strong>Çalışma arkadaşları (%83,6):</strong> Belediye ortalamasının 3,3 puan altında. Anlaşmazlık çözümü (%76,4) ve iş arkadaşları desteği (%81,9) görece düşük.</li>
<li><strong>Ücret memnuniyeti (%68,1):</strong> Belediye ortalamasına yakın olsa da açık uçlu yorumlarda en sık dile getirilen konu.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yüksek yorum oranı (%61,9):</strong> 21 kişiden 13'ü açık uçlu yorum yapmış - bu belediyenin en yüksek yorum oranlarından biri. Personelin görüş bildirme motivasyonu yüksek.</li>
<li><strong>Açık uçlu yorumlarda tekrar eden temalar:</strong> Maaş iyileştirmesi (7+ kez), çalışma alanı temizliği (5+ kez), ısıtma sorunu (3+ kez), sosyal alan/kafeterya eksikliği, çay servisi talebi.</li>
<li><strong>İş yükü dengesizliği:</strong> Açık uçlu yorumlarda "zaman zaman iş yükü dengesizliği" ve "personel alımı artırılmalı" ifadeleri mevcut.</li>
<li><strong>Güçlü yönetici - Zayıf ekip dengesi:</strong> Yönetici ilişkileri (%94,8) çok güçlü iken çalışma arkadaşları skoru (%83,6) görece düşük. Bu durum, yönetici odaklı bir çalışma kültürüne işaret edebilir.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Basın Yayın (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">97,1</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+5,8</td>
<td class="highlight-positive">Çok yüksek</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">90,6</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+4,0</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">61,8</td>
<td class="stat-value">69,1</td>
<td class="highlight-warning">-7,3</td>
<td class="highlight-positive">Düşük stres (olumlu)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">94,8</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+8,0</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">83,6</td>
<td class="stat-value">86,9</td>
<td class="highlight">-3,3</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">81,9</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+2,1</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">69,1</td>
<td class="stat-value">72,2</td>
<td class="highlight">-3,1</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">97,2</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+4,4</td>
<td class="highlight-positive">Çok yüksek</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">82,4</td>
<td class="stat-value">77,2</td>
<td class="highlight-positive">+5,2</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">74,3</td>
<td class="stat-value">75,8</td>
<td class="highlight">-1,5</td>
<td>Ortalama düzeyde</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Basın ve Yayın Müdürlüğü, 10 temadan 7'sinde belediye ortalamasının üzerinde performans göstermektedir. En güçlü alanlar yöneticilerle ilişkiler (+8,0), iş-kişi uyumu (+5,8) ve yetkinlik & performans (+5,2) iken, çalışma arkadaşları (-3,3) ve çalışma koşulları (-3,1) geliştirilmesi gereken alanlar olarak öne çıkmaktadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Basın Yayın (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">52,8</td>
<td>70,6</td>
<td class="highlight-positive">-17,8 (düşük stres)</td>
</tr>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">58,3</td>
<td>70,8</td>
<td class="highlight-positive">-12,5 (düşük stres)</td>
</tr>
<tr>
<td><strong>S13: Amirimin geri bildirimleri gelişimime katkı sağlar</strong></td>
<td class="stat-value">97,2</td>
<td>86,5</td>
<td class="highlight-positive">+10,7</td>
</tr>
<tr>
<td><strong>S14: Amirim destek olmak için çaba gösterir</strong></td>
<td class="stat-value">97,2</td>
<td>86,7</td>
<td class="highlight-positive">+10,5</td>
</tr>
<tr>
<td><strong>S16: Amirim çalışanlara eşit yaklaşır</strong></td>
<td class="stat-value">91,7</td>
<td>82,8</td>
<td class="highlight-positive">+8,9</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Basın Yayın (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S28: Bireysel çalışma alanım (masa, sandalye vb.) yeterlidir</strong></td>
<td class="stat-value">75,0</td>
<td>79,2</td>
<td class="">-4,2</td>
</tr>
<tr>
<td><strong>S29: Ortak alanlar yeterlidir</strong></td>
<td class="stat-value">63,9</td>
<td>70,4</td>
<td class="highlight">-6,5</td>
</tr>
<tr>
<td><strong>S22: Anlaşmazlıkları iş arkadaşlarımızla kendi aramızda çözeriz</strong></td>
<td class="stat-value">76,4</td>
<td>84,7</td>
<td class="highlight-critical">-8,3</td>
</tr>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">65,3</td>
<td>74,1</td>
<td class="highlight-critical">-8,8</td>
</tr>
<tr>
<td><strong>S26: Çalışma alanlarımın temizliği yeterlidir</strong></td>
<td class="stat-value">68,1</td>
<td>79,4</td>
<td class="highlight-critical">-11,3</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Basın ve Yayın Müdürlüğü'nde güçlü yönetici ilişkileri (S13: %97,2, +10,7; S14: %97,2, +10,5) ile zayıf çalışma koşulları arasında belirgin bir kontrast bulunmaktadır. Fiziksel ortam sorunları - temizlik (S26: %68,1, -11,3), ısıtma/soğutma (S27: %65,3, -8,8), ortak alanlar (S29: %63,9, -6,5) - açık uçlu yorumlarda da en sık tekrarlanan şikayetlerdir ve bu tutarlılık sorunun ciddiyetini teyit etmektedir. Ekip içi anlaşmazlık çözme becerisi (S22: %76,4, -8,3) belediye ortalamasının altında kalması, yüksek yorum oranı (%61,9) ile birlikte değerlendirildiğinde personelin kendini ifade etme ihtiyacı hissettiğine işaret edebilir. Düşük iş stresi/yükü (%61,8) ve düşük ruh sağlığı riski (%47,6) arasındaki olumlu korelasyon, JD-R modeli ile uyumludur.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Basın ve Yayın Müdürlüğü'nden <strong>13 kişi (%61,9)</strong> açık uçlu yorum yapmıştır. Bu, belediyenin en yüksek yorum oranlarından biridir.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Maaş/Ücret İyileştirmesi (7+ yorum):</strong></p>
<div class="quote">"Maaşlarımızın iyileştrilmesini talep ediyorum."</div>
<div class="quote">"Maaşlarımızın piyasa koşullarına göre güncellenmesi hepimizi mutlu edecektir."</div>
<div class="quote">"Maaşlar düzeltilmeli ve mesai ücretleri artırılmalı."</div>

<p><strong>2. Çalışma Alanı Temizliği (5+ yorum):</strong></p>
<div class="quote">"Çalışma alanlarımız ve masalarımızın düzenli olarak temizlenmesini rica ediyorum."</div>
<div class="quote">"Çalışma Masalarımızın temizliğinin düzenli yapılması."</div>

<p><strong>3. Isıtma/İklimlendirme (3+ yorum):</strong></p>
<div class="quote">"Çalışma ortamlarımızın yeterli derecede ısıtılmaması" sorunu dile getirilmiş.</div>

<p><strong>4. Sosyal Alanlar ve Hizmetler:</strong></p>
<div class="quote">"Belediye binası içerisinde personel için bir kafeterya olabilir."</div>
<div class="quote">"Personel için vakit geçirilecek alan yetersiz."</div>
<div class="quote">"Çay servisinin ilgili personel tarafından yapılması kurumsal imaj için daha uygun."</div>

<p><strong>5. Yemekhane ve Servis:</strong></p>
<div class="quote">"Yemekhane hizmeti var fakat, bütün personele uygun değil. Servislerin ilçe dışına çıkmasını isterim."</div>

<p><strong>6. İş Yükü:</strong></p>
<div class="quote">"Çalışma ortamı genel olarak iyi ancak zaman zaman iş yükü dengesizliği hissediliyor."</div>
<div class="quote">"İş yükü genel olarak fazla, bence personel alımı artırılmalı."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yanıtlarda en sık tekrar eden tema <strong>maaş iyileştirmesi</strong>dir. İkinci sırada <strong>çalışma alanı temizliği</strong> gelmektedir. Personelin yüksek yorum oranı (%61,9) ve detaylı geri bildirimleri, kuruma olan bağlılık ve iyileştirme beklentisinin yüksek olduğunu göstermektedir.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Basın Yayın (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">47,6</td>
<td>52,2</td>
<td class="highlight-positive">-4,6</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">51,4</td>
<td>56,1</td>
<td class="highlight-positive">-4,7</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">50,0</td>
<td>50,9</td>
<td class="highlight-positive">-0,9</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">44,4</td>
<td>50,8</td>
<td class="highlight-positive">-6,4</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">44,4</td>
<td>50,9</td>
<td class="highlight-positive">-6,5</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">38,9</td>
<td>44,9</td>
<td class="highlight-positive">-6,0</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Basın ve Yayın Müdürlüğü personelinin ruh sağlığı risk göstergeleri genel olarak belediye ortalamasının altındadır (olumlu). Özellikle gerginlik/kaygı (-6,4) ve endişe kontrolü (-6,5) göstergelerinde olumlu bir tablo görülmektedir. Düşük iş stresi/yükü (%61,8) ve güçlü yönetici desteğinin (%94,8) bu sonuca katkı sağladığı düşünülebilir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Basın Yayın (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">100,0</td>
<td>81,0</td>
<td class="highlight-positive">+19,0</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">100,0</td>
<td>76,9</td>
<td class="highlight-positive">+23,1</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">83,3</td>
<td>31,1</td>
<td class="highlight-positive">+52,2</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">83,3</td>
<td>29,3</td>
<td class="highlight-positive">+54,0</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">83,3</td>
<td>42,8</td>
<td class="highlight-positive">+40,5</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">83,3</td>
<td>39,6</td>
<td class="highlight-positive">+43,7</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">72,2</td>
<td>17,8</td>
<td class="highlight-positive">+54,4</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">72,2</td>
<td>17,6</td>
<td class="highlight-positive">+54,6</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Basın ve Yayın Müdürlüğü, tüm sosyal medya platformlarında belediye ortalamasının çok üzerinde takip oranlarına sahiptir. Instagram hesapları %100 takip oranına ulaşırken, NextSosyal'de +54 puanlık fark dikkat çekicidir. Bu sonuç, birimin görev alanı (kurumsal iletişim, medya takibi) ile doğrudan ilişkilidir ve beklenen bir bulgudur.</p>

<!-- ==================== #104 - DESTEK HİZMETLERİ MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "gelirler": {
            name: "Gelirler Müdürlüğü",
            html: `<h1>Gelirler Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Gelirler Müdürlüğü, güçlü kamu hizmeti motivasyonuna sahip olmakla birlikte, anket sonuçlarına göre personel iş stresi/yüküni yüksek, çalışma koşullarını ise yetersiz bulmaktadır. Gelirler Müdürlüğüne göre fiziksel çalışma ortamının iyileştirilmesi (temizlik, ısıtma, havalandırma), iş yükü dengesinin gözden geçirilmesi, şirket personeli-memur eşitliğinin sağlanması ve kariyer gelişimi fırsatlarının artırılması izlenmesi gereken alanlar olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">34/39 kişi (%87,2)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+16,8</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%87,1</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight">-3,7</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%79,9</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-critical">+10,8 ↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%77,4</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight">-4,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">-2,5</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-15,7</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%53,7</td>
            <td class="avg">%52,2</td>
            <td class="diff">+1,5 (olumsuz)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%54,8</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-critical">+9,9 ↑</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">17 kişi (%50,0)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
        
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kamu hizmeti motivasyonu (%92,1):</strong> Belediye ortalamasına yakın. Topluma hizmet gururu (%94,4) ve kamu kurumlarını tavsiye (%91,7) yüksek.</li>
<li><strong>Yüksek katılım oranı (%87,2):</strong> Belediye ortalamasının 16,8 puan üzerinde - personelin ankete ilgisi yüksek.</li>
<li><strong>Yüksek yorum oranı (%50,0):</strong> 34 kişiden 17'si açık uçlu yorum yapmış - personelin görüş bildirme motivasyonu güçlü.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çalışma koşulları (%62,1):</strong> Belediye ortalamasının 10,1 puan altında. Temizlik (%55,6), ısıtma/soğutma (%58,3), ortak alanlar (%57,3) ve yemekhane (%43,8) çok düşük skorlu.</li>
<li><strong>Yüksek iş stresi/yükü (%79,9):</strong> Belediye ortalamasının 10,8 puan üzerinde. Vatandaş yoğunluğu (%84,7), zaman sıkışıklığı (%80,0) ve görev yükü (%76,6) yüksek.</li>
<li><strong>İş-kişi uyumu (%85,7):</strong> Belediye ortalamasının 5,6 puan altında. İşi seçtiği için mutluluk (%82,3) düşük.</li>
<li><strong>Görev-rol netliği (%81,0):</strong> Belediye ortalamasının 5,6 puan altında. Görev tanımı (%79,8) ve görev-talimat uyumu (%76,6) düşük.</li>
<li><strong>Yetkinlik & Performans (%72,9):</strong> Belediye ortalamasının 4,3 puan altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Negatif stres-destek dengesi (-2,5):</strong> Belediyenin en düşük denge skorlarından biri. Anket sonuçlarına göre personel, iş stresi/yüküni karşılayacak düzeyde kurum desteği almadığını düşünmektedir.</li>
<li><strong>Vatandaş yoğunluğu çok yüksek (%84,7):</strong> Belediye ortalamasının (%70,6) 14,1 puan üzerinde. Gelirler birimi doğası gereği yoğun vatandaş trafiğine maruz.</li>
<li><strong>Fiziksel çalışma ortamı sorunları:</strong> Açık uçlu yorumlarda "camların açılıp kapanır olması", "merkezi sistem ısıtma sorunu", "temizlik yetersizliği" gibi somut şikayetler var.</li>
<li><strong>Şirket personeli-memur eşitsizliği:</strong> "Şirket personelinin yemekhane hizmetinden memurlar gibi faydalanmaması büyük eşitsizlik ve haksızlık" ifadesi dikkat çekici.</li>
<li><strong>Kariyer ve terfi sistemi:</strong> "Performansa dayalı değerlendirme yapılmalı" yorumu, kariyer gelişimi beklentisini yansıtmaktadır.</li>
<li><strong>Kadın çalışan deneyimi:</strong> "Erkek çalışan sayısının fazla olması, zaman zaman sosyal yalnızlık ve dışlanmışlık hissi oluşturabilmektedir" ifadesi dikkat çekici.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Gelirler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">85,7</td>
<td class="stat-value">91,3</td>
<td class="highlight-warning">-5,6</td>
<td class="highlight-critical">Belirgin düşük</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">81,0</td>
<td class="stat-value">86,6</td>
<td class="highlight-warning">-5,6</td>
<td class="highlight-critical">Belirgin düşük</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">79,9</td>
<td class="stat-value">69,1</td>
<td class="highlight-critical">+10,8</td>
<td class="highlight-critical">Yüksek stres (olumsuz)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">84,6</td>
<td class="stat-value">86,8</td>
<td class="highlight">-2,2</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">84,0</td>
<td class="stat-value">86,9</td>
<td class="highlight">-2,9</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">79,6</td>
<td class="stat-value">79,8</td>
<td>-0,2</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">62,1</td>
<td class="stat-value">72,2</td>
<td class="highlight-critical">-10,1</td>
<td class="highlight-critical">Çok düşük</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">92,1</td>
<td class="stat-value">92,8</td>
<td>-0,7</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">72,9</td>
<td class="stat-value">77,2</td>
<td class="highlight">-4,3</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">71,3</td>
<td class="stat-value">75,8</td>
<td class="highlight">-4,5</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Gelirler Müdürlüğü, 10 temanın tamamında belediye ortalamasının altında veya eşit performans göstermektedir. En düşük skorlu alanlar çalışma koşulları (-10,1), iş stresi/yükü (+10,8 - yüksek stres olumsuz), iş-kişi uyumu (-5,6) ve görev-rol netliği (-5,6) olarak öne çıkmaktadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Gelirler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S36: Kamu kurumlarında çalışmayı tavsiye ederim</strong></td>
<td class="stat-value">91,7</td>
<td>90,7</td>
<td class="">+1,0</td>
</tr>
<tr>
<td><strong>S23: Öneri ve şikayetlerimle ilgili geri bildirim alırım</strong></td>
<td class="stat-value">79,3</td>
<td>79,2</td>
<td class="">+0,1</td>
</tr>
<tr>
<td><strong>S35: Topluma hizmet etmekten gurur duyuyorum</strong></td>
<td class="stat-value">94,4</td>
<td>94,5</td>
<td class="">-0,1</td>
</tr>
<tr>
<td><strong>S17: Amirim bana karşı saygılıdır</strong></td>
<td class="stat-value">89,5</td>
<td>89,9</td>
<td class="">-0,4</td>
</tr>
<tr>
<td><strong>S24: Belediyedeki karar ve gelişmelerden haberdar edilirim</strong></td>
<td class="stat-value">79,8</td>
<td>80,4</td>
<td class="">-0,6</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Gelirler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">43,8</td>
<td>57,2</td>
<td class="highlight-critical">-13,4</td>
</tr>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">84,7</td>
<td>70,6</td>
<td class="highlight-critical">+14,1 (yüksek stres)</td>
</tr>
<tr>
<td><strong>S11: Zaman sıkışıklığı yaşarım</strong></td>
<td class="stat-value">80,0</td>
<td>64,7</td>
<td class="highlight-critical">+15,3 (yüksek stres)</td>
</tr>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">58,3</td>
<td>74,1</td>
<td class="highlight-critical">-15,8</td>
</tr>
<tr>
<td><strong>S26: Çalışma alanlarımın temizliği yeterlidir</strong></td>
<td class="stat-value">55,6</td>
<td>79,4</td>
<td class="highlight-critical">-23,8</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Gelirler Müdürlüğü'nde en dikkat çekici bulgu, "en iyi" performans gösteren soruların bile belediye ortalamasına ancak eşit olmasıdır (S36: +1,0; S23: +0,1). Bu durum, birimin genel olarak belediye ortalamasının altında kaldığını göstermektedir. Çalışma alanı temizliği (S26: %55,6, -23,8) belediyenin en düşük skorlarından biri olup, açık uçlu yorumlardaki "temizlik yetersizliği" şikayetleriyle örtüşmektedir. Yüksek iş stresi/yükü - özellikle vatandaş yoğunluğu (S10: %84,7, +14,1) - birimin doğası gereği yoğun vatandaş trafiğine maruz kalmasıyla açıklanabilir. Fiziksel koşullar sorunları (S27: %58,3, -15,8; S30: %43,8, -13,4) ile düşük stres-destek dengesi (-2,5) birlikte değerlendirildiğinde, personelin zorlu iş koşullarında yeterli kurumsal destek almadığı görülmektedir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Gelirler Müdürlüğü'nden <strong>17 kişi (%50,0)</strong> açık uçlu yorum yapmıştır - bu yüksek bir yorum oranıdır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Fiziksel Çalışma Ortamı (5+ yorum):</strong></p>
<div class="quote">"Ofiste camların açılıp kapanır olmasını istiyoruz, hava alınmıyor. Temizlik ve çay daha iyi olabilir."</div>
<div class="quote">"Gelirler müdürlüğünde çalışıyorum. Emlak tahakkuk görevlisiyim, burada üşüyorum. Merkezi sistem ısıtma olduğum yerin açık olduğundan dolayı üşüyorum."</div>
<div class="quote">"Temizlik konusunda bürolar sorunlu. İş yükümüz diğer birimlere göre fazla."</div>

<p><strong>2. Yemek/Yemekhane Sorunu (3+ yorum):</strong></p>
<div class="quote">"Şirket personelinin yemekhane hizmetinden memurlar gibi faydalanmaması büyük eşitsizlik ve haksızlık."</div>
<div class="quote">"Hijyen - Temizlik - Yemek kalitesi."</div>
<div class="quote">"Yemekhanenin daha temiz ortamda olması gerekmektedir."</div>

<p><strong>3. Kariyer Gelişimi:</strong></p>
<div class="quote">"Performansa dayalı değerlendirme yapılmalı; düzenli olarak hak edenlere görevde yükselme ve/veya unvan değişikliği imkânı verilmeli."</div>
<div class="quote">"Sayın Başkanım, Ayın personel ödülü uygulamasını talep ediyoruz."</div>

<p><strong>4. Cinsiyet Dengesi ve Sosyal Ortam:</strong></p>
<div class="quote">"İş ortamında erkek çalışan sayısının kadın çalışan sayısına göre fazla olması, zaman zaman sosyal yalnızlık ve dışlanmışlık hissi oluşturabilmektedir."</div>

<p><strong>5. Sosyal İmkanlar:</strong></p>
<div class="quote">"Belediye çalışanlarına spor, kültür alanlarında %60-%70 indirim yapılmalıdır."</div>
<div class="quote">"Belediyemizin sosyal tesislerinden yeteri kadar yararlanmıyoruz."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yanıtlarda en belirgin tema <strong>fiziksel çalışma ortamı</strong> sorunlarıdır - temizlik, ısıtma ve havalandırma şikayetleri S26, S27 sorularındaki düşük skorlarla tutarlıdır. <strong>Şirket personeli-memur eşitsizliği</strong> yemekhane hizmetinde somut bir sorun olarak dile getirilmiştir. <strong>Kadın çalışan deneyimi</strong> hakkındaki yorum, cinsiyet dengesi ve kapsayıcılık konusunda farkındalık oluşturabilecek bir bulgudur.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Gelirler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">53,7</td>
<td>52,2</td>
<td class="highlight">+1,5</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">58,9</td>
<td>56,1</td>
<td class="highlight">+2,8</td>
<td>Ortalamanın hafif üzerinde</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">52,4</td>
<td>50,9</td>
<td>+1,5</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">50,0</td>
<td>50,8</td>
<td class="highlight-positive">-0,8</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">53,3</td>
<td>50,9</td>
<td class="highlight">+2,4</td>
<td>Ortalamanın hafif üzerinde</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">54,8</td>
<td>44,9</td>
<td class="highlight">+9,9</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Gelirler Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasına yakın düzeydedir. Yüksek iş stresi/yüküne (%79,9) rağmen ruh sağlığı göstergelerinin ortalamada kalması, personelin stresle başa çıkma kapasitesine veya kamu hizmeti motivasyonunun koruyucu etkisine işaret edebilir. Sigara kullanımı (%54,8) belediye ortalamasının 9,9 puan üzerindedir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Gelirler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">77,4</td>
<td>81,0</td>
<td class="highlight">-3,6</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">74,2</td>
<td>76,9</td>
<td class="highlight">-2,7</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">32,3</td>
<td>31,1</td>
<td class="highlight-positive">+1,2</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">32,3</td>
<td>29,3</td>
<td class="highlight-positive">+3,0</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">48,4</td>
<td>42,8</td>
<td class="highlight-positive">+5,6</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">35,5</td>
<td>39,6</td>
<td class="highlight">-4,1</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">25,8</td>
<td>17,8</td>
<td class="highlight-positive">+8,0</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">25,8</td>
<td>17,6</td>
<td class="highlight-positive">+8,2</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Gelirler Müdürlüğü'nde sosyal medya takip oranları karışık bir tablo sergilemektedir. NextSosyal takibi belediye ortalamasının belirgin üzerinde (+8 puan), Facebook Belediye ve Twitter hesapları da ortalamanın üzerindedir. Instagram takibi ise ortalamanın hafif altındadır.</p>

<!-- ==================== #108 - GENÇLİK VE SPOR HİZMETLERİ MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "inovasyon": {
            name: "İnovasyon ve Teknoloji Müdürlüğü",
            html: `<h1>İnovasyon ve Teknoloji Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> İnovasyon ve Teknoloji Müdürlüğü, belediyenin en güçlü performans gösteren birimlerinden biridir. Güçlü iş-kişi uyumu, yüksek kamu hizmeti motivasyonu, düşük iş stresi/yükü ve güçlü stres-destek dengesi (+24,2) ile JD-R modeli açısından ideal profil sergilemektedir. Yemekhane hizmetinin iyileştirilmesi tek gelişim alanı olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">39/41 kişi (%95,1)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+24,7</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%95,3</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+4,5</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%61,0</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-8,1 ↓</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%85,2</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+2,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+24,2</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+11,0</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%46,4</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-5,8 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%46,9</td>
            <td class="avg">%44,9</td>
            <td class="diff">+2,0</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">14 kişi (%35,9)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>İş-kişi uyumu (%97,6):</strong> Belediye ortalamasının 6,3 puan üzerinde - belediyenin en yüksek skoru. Yetenek-iş uyumu (%98,4) ve işi seçtiği için mutluluk (%97,7) güçlü.</li>
<li><strong>Kamu hizmeti motivasyonu (%96,6):</strong> Belediye ortalamasının 3,8 puan üzerinde. Topluma hizmet gururu (%99,2) neredeyse tam puan.</li>
<li><strong>Düşük iş stresi/yükü (%61,0):</strong> Belediye ortalamasının 8,1 puan altında. Vatandaş yoğunluğu (%56,3) ve duygusal zorlayıcılık (%58,6) düşük.</li>
<li><strong>Teknoloji altyapısı (%89,1):</strong> Belediye ortalamasının 13,9 puan üzerinde - görev alanı gereği beklenen güçlü altyapı.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yemekhane (%41,4):</strong> Belediye ortalamasının 15,8 puan altında - müdürlüğün tek belirgin zayıf noktası. Açık uçlu yorumların neredeyse tamamı yemekle ilgili.</li>
<li><strong>Servis hizmeti (%61,2):</strong> Belediye ortalamasının 6,5 puan altında.</li>
<li><strong>Eğitim faaliyetleri (%66,9):</strong> Belediye ortalamasının 7,9 puan altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yemekhane şikayetleri yoğunluğu:</strong> 14 açık uçlu yorumun 12'si yemekle ilgili - "Her anket, şikayet talebinde bulunuyoruz ama değişen bir şey yok" ifadesi kronik soruna işaret.</li>
<li><strong>Yemek ücreti eşitsizliği:</strong> "KHK'lı personeller de memurlar gibi yediği kadar ödemeli" şikayeti tekrar ediyor.</li>
<li><strong>Güçlü iş-kişi uyumu:</strong> S1 (%98,4), S2 (%97,7), S3 (%96,9) skorları belediyenin en yüksekleri - personel işiyle tam uyumlu.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>İnovasyon Teknoloji (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">97,6</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+6,3</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">92,0</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+5,4</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">61,0</td>
<td class="stat-value">69,1</td>
<td class="highlight-positive">-8,1</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">90,8</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+4,0</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">89,3</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+2,4</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">82,1</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+2,3</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">74,0</td>
<td class="stat-value">72,2</td>
<td class="highlight-positive">+1,8</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">96,6</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+3,8</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">79,5</td>
<td class="stat-value">77,2</td>
<td class="highlight-positive">+2,3</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">70,6</td>
<td class="stat-value">75,8</td>
<td class="highlight-warning">-5,2</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> İnovasyon ve Teknoloji Müdürlüğü, 10 temadan 9'unda belediye ortalamasının üzerinde performans göstermektedir - belediyenin en dengeli birimlerinden biri. Sadece eğitim & gelişim (-5,2) alanında ortalamanın altında kalmaktadır. İş-kişi uyumu (+6,3), görev-rol netliği (+5,4) ve kamu hizmeti motivasyonu (+3,8) özellikle güçlüdür.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>İnovasyon Teknoloji (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">56,3</td>
<td>70,6</td>
<td class="highlight-positive">-14,3 (düşük stres)</td>
</tr>
<tr>
<td><strong>S33: Sağlanan teknoloji altyapısı yeterlidir</strong></td>
<td class="stat-value">89,1</td>
<td>75,2</td>
<td class="highlight-positive">+13,9</td>
</tr>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">58,6</td>
<td>70,8</td>
<td class="highlight-positive">-12,2 (düşük stres)</td>
</tr>
<tr>
<td><strong>S28: Bireysel çalışma alanım (masa, sandalye vb.) yeterlidir</strong></td>
<td class="stat-value">87,5</td>
<td>79,2</td>
<td class="highlight-positive">+8,3</td>
</tr>
<tr>
<td><strong>S1: Yaptığım iş yetenek ve becerilerimle uyumludur</strong></td>
<td class="stat-value">98,4</td>
<td>90,9</td>
<td class="highlight-positive">+7,5</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>İnovasyon Teknoloji (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">71,8</td>
<td>70,4</td>
<td class="highlight-critical">+1,4</td>
</tr>
<tr>
<td><strong>S43: Eğitimler mesleki gelişimime katkı sağlar</strong></td>
<td class="stat-value">74,2</td>
<td>76,8</td>
<td class="">-2,6</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">61,2</td>
<td>67,7</td>
<td class="highlight">-6,5</td>
</tr>
<tr>
<td><strong>S42: Kurumda yapılan eğitim faaliyetlerini yeterli bulurum</strong></td>
<td class="stat-value">66,9</td>
<td>74,8</td>
<td class="highlight">-7,9</td>
</tr>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">41,4</td>
<td>57,2</td>
<td class="highlight-critical">-15,8</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> İnovasyon ve Teknoloji Müdürlüğü, teknik bir birim olarak beklenen profili sergilemektedir: düşük vatandaş yoğunluğu stresi (S10: %56,3, -14,3) ve düşük duygusal zorlayıcılık (S8: %58,6, -12,2). Teknoloji altyapısı (S33: %89,1, +13,9) ve bireysel çalışma alanı (S28: %87,5, +8,3) birimin kendi uzmanlık alanında başarılı olduğunu göstermektedir. Ancak eğitim alanı sorunludur: eğitim yeterliliği (S42: %66,9, -7,9) ve eğitimlerin katkısı (S43: %74,2, -2,6) düşük - teknoloji gibi hızla değişen bir alanda bu kritik bir eksikliktir. Yemekhane memnuniyeti (S30: %41,4, -15,8) belediyenin en düşük skorlarından biridir. Genel olarak teknik yetkinlikler güçlü, kurumsal destek hizmetleri zayıf bir profil çizmektedir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>İnovasyon ve Teknoloji Müdürlüğü'nden <strong>14 kişi (%35,9)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Yemekhane Kalitesi ve Ücreti (12 yorum - baskın tema):</strong></p>
<div class="quote">"Yemekhanedeki yemeklerin düzeltilmesini istiyorum. Her anket, şikayet talebinde bulunuyoruz ama değişen bir şey yok."</div>
<div class="quote">"Yemekler kalite ve çeşit olarak yetersiz, defalarca dile getirilmesine rağmen hiç düzeltilemedi."</div>
<div class="quote">"KHK'lı personeller de memurlar gibi yemek yediği kadar ödemelidir ve yemek ücreti aynı olmalıdır."</div>
<div class="quote">"Yemekhanede yemek şefi uygulaması günlük olarak yapılırsa personel daha esnek faydalanabilir."</div>

<p><strong>2. Servis ve Ulaşım (1 yorum):</strong></p>
<div class="quote">"Personel servislerinin ücretsiz olması gerektiğini, ilçe dışından gelen çalışanlar için mesai saatlerine geç kalmayacak şekilde metro, metrobüs servislerinin sağlanmasını talep ediyorum."</div>

<p><strong>3. Maaş ve Mesai (1 yorum):</strong></p>
<div class="quote">"Personellerin maaş skalası eğitimi ile doğru orantılı olması gerekir. Mesai saatleri dışında çalışan personelin hafta içi gün ve saatle aynı tutulmamalı."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumların <strong>%86'sı (12/14) yemekle ilgili</strong> - bu, belediyedeki en yoğun tek konulu şikayet oranıdır. "Her anket şikayet talebinde bulunuyoruz ama değişen bir şey yok" ifadesi kronik ve çözülmemiş bir soruna işaret etmektedir. KHK'lı personel ile memur arasındaki yemek ücreti farkı da sıkça vurgulanan eşitlik konusudur.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>İnovasyon Teknoloji (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">46,4</td>
<td>52,2</td>
<td class="highlight-positive">-5,8</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">50,0</td>
<td>56,1</td>
<td class="highlight-positive">-6,1</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">43,5</td>
<td>50,9</td>
<td class="highlight-positive">-7,4</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">46,8</td>
<td>50,8</td>
<td class="highlight-positive">-4,0</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">45,3</td>
<td>50,9</td>
<td class="highlight-positive">-5,6</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">46,9</td>
<td>44,9</td>
<td>+2,0</td>
<td>Ortalama düzeyde</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> İnovasyon ve Teknoloji Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının altındadır (olumlu). Tüm göstergelerde düşük değerler görülmektedir. Bu bulgular, düşük iş stresi/yükü (%61,0) ve güçlü stres-destek dengesi (+24,2) ile tutarlıdır. Sigara kullanımı belediye ortalamasına yakın düzeydedir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>İnovasyon Teknoloji (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">84,4</td>
<td>81,0</td>
<td class="highlight-positive">+3,4</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">81,3</td>
<td>76,9</td>
<td class="highlight-positive">+4,4</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">28,1</td>
<td>31,1</td>
<td class="highlight">-3,0</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">31,3</td>
<td>29,3</td>
<td class="highlight-positive">+2,0</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">37,5</td>
<td>42,8</td>
<td class="highlight">-5,3</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">40,6</td>
<td>39,6</td>
<td class="highlight-positive">+1,0</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">28,1</td>
<td>17,8</td>
<td class="highlight-positive">+10,3</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">28,1</td>
<td>17,6</td>
<td class="highlight-positive">+10,5</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> İnovasyon ve Teknoloji Müdürlüğü, NextSosyal platformlarında belediye ortalamasının belirgin üzerinde (+10,3 ve +10,5), Instagram'da da ortalamanın üzerinde takip oranlarına sahiptir. Twitter/X Belediye ve Facebook Belediye hesaplarında ortalamanın hafif altında kalmaktadır.</p>

<!-- ==================== #114 - İNSAN KAYNAKLARI VE EĞİTİM MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "yapi_kontrol": {
            name: "Yapı Kontrol Müdürlüğü",
            html: `<h1>Yapı Kontrol Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Yapı Kontrol Müdürlüğüne göre servis güzergahlarının yeniden düzenlenmesi (adalet algısı), ücret politikasının gözden geçirilmesi ve yemek hizmetinde işçi-memur eşitliğinin sağlanması izlenmesi gereken alanlar olarak öne çıkmaktadır. Güçlü ekip uyumu ve yönetici ilişkileri, yüksek iş stresi/yükünün etkilerini azaltan önemli koruyucu faktörlerdir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">28/37 kişi (%75,7)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+5,3</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%88,0</td>
            <td class="avg">%90,8</td>
            <td class="diff">-2,8</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar)</span>
            </td>
            <td class="value">%79,3</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-critical">+10,2 ↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları vb.)</span>
            </td>
            <td class="value">%82,2</td>
            <td class="avg">%82,3</td>
            <td class="diff">-0,1</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+2,9</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-10,3</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%50,2</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-2,0 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%60,0</td>
            <td class="avg">%44,9</td>
            <td class="diff">+1,1</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">11 kişi (%39,3)</td>
            <td class="avg">-</td>
            <td class="diff">Orta düzey katılım</td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kamu hizmeti motivasyonu (%93,3):</strong> Topluma hizmet gururu yüksek.</li>
<li><strong>Ekip uyumu (%90,0, +3,1):</strong> Belediye ortalamasının üzerinde, güçlü dayanışma.</li>
<li><strong>Yönetici ilişkileri (%89,8, +3,0):</strong> Amir desteği ve iletişimi iyi.</li>
<li><strong>Amir eşitliği (%90,0, +7,2):</strong> Adil yönetim algısı güçlü.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Ücret memnuniyeti (%54,0, -15,0):</strong> Belediyenin en düşük skorlarından - diğer belediyelerle maaş farkı şikayeti yaygın.</li>
<li><strong>Servis hizmeti (%54,2, -13,5):</strong> Güzergah sorunları ve adaletsizlik algısı mevcut.</li>
<li><strong>Yemek hizmeti (%51,1, -6,1):</strong> İşçi-memur ayrımı ve kalite şikayetleri var.</li>
<li><strong>Çalışma alanı temizliği (%74,0, -5,4):</strong> Ortalamanın altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Servis adaletsizliği:</strong> Açık uçlu yorumlarda bazı personelin kısa mesafeler için güzergah değiştirttiği, diğerlerinin uzun mesafe yürümek zorunda kaldığı belirtilmiş.</li>
<li><strong>Maaş karşılaştırması:</strong> Diğer belediyelerde aynı pozisyonda çalışan meslektaşlarla maaş farkı sıkça dile getirilmiş.</li>
<li><strong>Fiziksel aktivite talebi:</strong> Masa başı çalışanlar için egzersiz alanı ve sigara bağımlılığıyla mücadele önerileri mevcut.</li>
<li><strong>Yüksek iş yükü:</strong> S9 (%82,0, +11,6) ve S10 (%83,0, +12,4) vatandaş talebi yoğunluğu belediyenin en yüksek değerleri arasında.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Yapı Kontrol (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">88,3</td>
<td class="stat-value">91,3</td>
<td class="highlight">-3,0</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">87,3</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+0,7</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü</strong></td>
<td class="stat-value">79,3</td>
<td class="stat-value">69,1</td>
<td class="highlight-critical">+10,2</td>
<td>Yüksek (olumsuz)</td>
</tr>
<tr>
<td><strong>Yönetici İlişkileri</strong></td>
<td class="stat-value">89,8</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+3,0</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Ekip Uyumu</strong></td>
<td class="stat-value">90,0</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+3,1</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Kurumsal İletişim</strong></td>
<td class="stat-value">83,0</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+3,2</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">68,6</td>
<td class="stat-value">72,2</td>
<td class="highlight">-3,6</td>
<td>Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">93,3</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+0,5</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">77,0</td>
<td class="stat-value">77,2</td>
<td>-0,2</td>
<td>Ortalamada</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">73,5</td>
<td class="stat-value">75,8</td>
<td>-2,3</td>
<td>Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Tema Bazlı Değerlendirme:</strong> İş stresi teması (%79,3, +10,2) yüksek olmasına rağmen, yönetici ilişkileri (%89,8, +3,0) ve ekip uyumu (%90,0, +3,1) güçlüdür - bu durum stresin sosyal destekle dengelendiğini göstermektedir. Çalışma koşulları teması (%68,6, -3,6) düşük olup, açık uçlu yorumlardaki servis, yemek ve ücret şikayetleriyle tutarlıdır. Kurumsal iletişim (%83,0, +3,2) ortalamanın üzerindedir.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Yapı Kontrol (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S10.</strong> Vatandaş/başvuru talep yoğunluğu işim gereği fazladır. <em>(olumsuz)</em></td>
<td class="stat-value">83,0</td>
<td>70,6</td>
<td class="highlight">+12,4</td>
</tr>
<tr>
<td><strong>S9.</strong> Gün içinde yetiştirmem gereken görevler çoğu zaman fazla olur. <em>(olumsuz)</em></td>
<td class="stat-value">82,0</td>
<td>70,4</td>
<td class="highlight">+11,6</td>
</tr>
<tr>
<td><strong>S11.</strong> İşimi tamamlamak için sık sık zaman sıkışıklığı yaşarım. <em>(olumsuz)</em></td>
<td class="stat-value">74,0</td>
<td>64,7</td>
<td class="highlight">+9,3</td>
</tr>
<tr>
<td><strong>S16.</strong> Amirim çalışanlara eşit yaklaşır, ayrımcılık yapmaz.</td>
<td class="stat-value">90,0</td>
<td>82,8</td>
<td class="highlight-positive">+7,2</td>
</tr>
<tr>
<td><strong>S8.</strong> İşim gereği duygusal olarak zorlayıcı durumlarla sık karşılaşırım. <em>(olumsuz)</em></td>
<td class="stat-value">78,0</td>
<td>70,8</td>
<td class="highlight">+7,2</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Yapı Kontrol (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S34.</strong> Piyasa koşullarıyla kıyaslandığında verilen ücretler makuldür.</td>
<td class="stat-value">54,0</td>
<td>69,0</td>
<td class="highlight-critical">-15,0 ⚠️</td>
</tr>
<tr>
<td><strong>S32.</strong> Servis (ulaşım) hizmeti kalitesi yeterlidir.</td>
<td class="stat-value">54,2</td>
<td>67,7</td>
<td class="highlight-critical">-13,5 ⚠️</td>
</tr>
<tr>
<td><strong>S30.</strong> Yemekhane/yemek hizmeti kalitesinden memnunum.</td>
<td class="stat-value">51,1</td>
<td>57,2</td>
<td class="highlight-critical">-6,1</td>
</tr>
<tr>
<td><strong>S1.</strong> Yaptığım iş, yetenek ve becerilerimle uyumludur.</td>
<td class="stat-value">85,0</td>
<td>90,9</td>
<td class="">-5,9</td>
</tr>
<tr>
<td><strong>S26.</strong> Çalışma alanlarımın temizliği yeterlidir.</td>
<td class="stat-value">74,0</td>
<td>79,4</td>
<td class="">-5,4</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> S34 ücret memnuniyeti (%54,0, -15,0) ve S32 servis hizmeti (%54,2, -13,5) belediyenin en düşük skorları arasındadır. Açık uçlu yorumlarda bu iki alan en sık dile getirilen konulardır: diğer belediyelerdeki meslektaşlarla maaş farkı ve servis güzergahlarındaki adaletsizlik şikayetleri nicel verilerle örtüşmektedir. S9 (%82,0, +11,6) ve S10 (%83,0, +12,4) iş yükü ve vatandaş talebi yoğunluğu belediyenin en yüksek değerleri arasındadır. S16 amir eşitliği (%90,0, +7,2) çok yüksektir - amirlerin eşit davranış algısı güçlüdür ve bu durum, yüksek iş stresi/yüküne rağmen ekip uyumunun (%90,0) korunmasını açıklamaktadır.</p>

<h2>3. Ruh Sağlığı Taraması</h2>

<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Yapı Kontrol (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S46.</strong> Keyif alamama</td>
<td class="stat-value">60,0</td>
<td>56,1</td>
<td class="">+3,9</td>
</tr>
<tr>
<td><strong>S47.</strong> Üzgün/çökkün hissetme</td>
<td class="stat-value">52,0</td>
<td>50,9</td>
<td class="">+1,1</td>
</tr>
<tr>
<td><strong>S48.</strong> Gerginlik/kaygı</td>
<td class="stat-value">54,0</td>
<td>50,8</td>
<td class="">+3,2</td>
</tr>
<tr>
<td><strong>S49.</strong> Endişeleri kontrol edememe</td>
<td class="stat-value">49,0</td>
<td>50,9</td>
<td class="highlight-positive">-1,9</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">60,0</td>
<td>44,9</td>
<td class="highlight">+15,1</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Genel ruh sağlığı riski (%50,2) belediye ortalamasının altındadır (-2,0 olumlu). Yüksek iş stresi/yüküne rağmen ruh sağlığı göstergelerinin ortalamada kalması, güçlü ekip uyumu ve yönetici ilişkilerinin koruyucu etkisine işaret etmektedir. Açık uçlu yorumlarda fiziksel aktivite alanı ve sigara bağımlılığıyla mücadele önerileri dikkat çekicidir.</p>

<h2>4. Açık Uçlu Yorumlar</h2>

<p>Yapı Kontrol Müdürlüğü'nden <strong>11 kişi</strong> açık uçlu yorum yapmıştır (%39,3 katılım).</p>

<p><strong>1. Maaş ve Ücret Şikayetleri (5 yorum):</strong></p>
<div class="quote">"Diğer belediyelerde aynı pozisyonda çalışan meslektaşlarımızla aramızdaki maaş farkının iyileştirilmesi adına gerekli adımların atılarak mevcut maaş farkının düşürülmesi çok memnun edici olacaktır."</div>
<div class="quote">"Maaşların iyileştirilmesini talep ediyorum. Piyasa şartlarına göre çok düşük kaldığını düşünüyorum."</div>

<p><strong>2. Servis Hizmeti Sorunları (3 yorum):</strong></p>
<div class="quote">"Bazı personeller 100-200 metre yürümemek için servis güzergahını değiştirtiyorlar. 500 metre ve daha fazla yürüyen personeller varken bunların yaptığı ayıptır."</div>
<div class="quote">"Servis hizmetinin düzgün bir şekilde sağlanmasını talep ediyorum."</div>

<p><strong>3. Yemek Hizmeti ve Çalışma Ortamı (3 yorum):</strong></p>
<div class="quote">"Yemekler konusunda işçi, memur konusu eşit olursa daha iyi olur."</div>
<div class="quote">"Masa başı çalışıyoruz, ara sıra egzersiz yapabileceğimiz bir alan olmasını istiyorum. Sigara bağımlılığıyla mücadele güçlendirilmeli."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlar, nicel verilerle güçlü bir tutarlılık göstermektedir. S34 ücret skoru (%54,0, -15,0) ile maaş şikayetlerinin yoğunluğu, S32 servis skoru (%54,2, -13,5) ile güzergah adaletsizliği şikayetleri doğrudan örtüşmektedir. Fiziksel aktivite alanı talebi, masa başı çalışan teknik personelin ihtiyaçlarını yansıtmaktadır.</p>

<h2>5. Sosyal Medya Takip Analizi</h2>

<table>
<thead>
<tr>
<th>Platform</th>
<th>Yapı Kontrol (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram - Belediye</strong></td>
<td class="stat-value">84,0</td>
<td>81,0</td>
<td class="highlight-positive">+3,0</td>
</tr>
<tr>
<td><strong>Instagram - Başkan</strong></td>
<td class="stat-value">76,0</td>
<td>76,9</td>
<td class="">-0,9</td>
</tr>
<tr>
<td><strong>Twitter/X - Belediye</strong></td>
<td class="stat-value">24,0</td>
<td>31,1</td>
<td class="">-7,1</td>
</tr>
<tr>
<td><strong>Twitter/X - Başkan</strong></td>
<td class="stat-value">20,0</td>
<td>29,3</td>
<td class="">-9,3</td>
</tr>
<tr>
<td><strong>Facebook - Belediye</strong></td>
<td class="stat-value">8,0</td>
<td>42,8</td>
<td class="highlight-critical">-34,8 ⚠️</td>
</tr>
<tr>
<td><strong>Facebook - Başkan</strong></td>
<td class="stat-value">8,0</td>
<td>39,6</td>
<td class="highlight-critical">-31,6 ⚠️</td>
</tr>
<tr>
<td><strong>NextSosyal - Belediye</strong></td>
<td class="stat-value">4,0</td>
<td>17,8</td>
<td class="highlight-critical">-13,8</td>
</tr>
<tr>
<td><strong>NextSosyal - Başkan</strong></td>
<td class="stat-value">4,0</td>
<td>17,6</td>
<td class="highlight-critical">-13,6</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Instagram takip oranları belediye ortalamasında iken, Facebook ve NextSosyal takip oranları çok düşüktür (Facebook Belediye: -34,8; Facebook Başkan: -31,6). Bu durum, teknik personelin sosyal medya kullanım tercihlerini yansıtmaktadır - Instagram dışındaki platformlara ilgi düşüktür.</p>`
        },
        "kultur_isleri": {
            name: "Kültür İşleri Müdürlüğü",
            html: `<h1>Kültür İşleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Kültür İşleri Müdürlüğü, düşük iş stresi/yükü, güçlü stres-destek dengesi ve çok düşük sigara kullanımı ile sağlıklı bir çalışma ortamı sunmaktadır. JD-R modeli açısından olumlu profil sergilemektedir. Yemekhane, servis ve özellikle tuvalet/ortak alan koşullarının iyileştirilmesi öncelikli gelişim alanlarıdır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">60/87 kişi (%69,0)</td>
            <td class="avg">%70,4</td>
            <td class="diff">-1,4</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%89,6</td>
            <td class="avg">%90,8</td>
            <td class="diff">-1,2</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%58,4</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-10,7 ↓↓</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%80,3</td>
            <td class="avg">%82,3</td>
            <td class="diff">-2,0</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+21,9</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+8,7</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%48,9</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-3,3 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%29,3</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-15,6 ↓↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">11 kişi (%18,3)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Düşük iş stresi/yükü (%58,4):</strong> Belediye ortalamasının 10,7 puan altında. Görev yükü (%55,1), zaman sıkışıklığı (%51,9) çok düşük.</li>
<li><strong>Kamu hizmeti motivasyonu (%93,0):</strong> Belediye ortalamasının 0,2 puan üzerinde. Topluma hizmet gururu (%96,3) çok yüksek.</li>
<li><strong>Yöneticilerle ilişkiler (%89,9):</strong> Belediye ortalamasının 3,1 puan üzerinde. Amir ulaşılabilirliği (%95,1), amir saygısı (%94,5) çok güçlü.</li>
<li><strong>Çok düşük sigara kullanımı (%29,3):</strong> Belediye ortalamasının 15,6 puan altında - belediyenin en sağlıklı birimlerinden.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yemekhane (%46,6):</strong> Belediye ortalamasının 10,6 puan altında - müdürlüğün en zayıf noktası.</li>
<li><strong>Servis hizmeti (%59,2):</strong> Belediye ortalamasının 8,5 puan altında.</li>
<li><strong>Ortak alanlar (%64,4):</strong> Belediye ortalamasının 6,0 puan altında. Açık uçlu yorumlarda tuvalet şikayetleri baskın.</li>
<li><strong>Eğitim faaliyetleri (%70,4):</strong> Belediye ortalamasının 4,4 puan altında. "Böyle bir eğitim yok" yorumu dikkat çekici.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Tuvalet/lavabo şikayetleri yoğunluğu:</strong> 11 yorumun 3'ü tuvalet/lavabo sorunlarıyla ilgili - "Personel tuvaletleri ayrı olmalı" talebi tekrar ediyor.</li>
<li><strong>Kütüphane personeli özgün talepleri:</strong> Kütüphane binası, turnike sistemi, personel yeterliliğinin değerlendirilmesi gibi sektöre özgü talepler var.</li>
<li><strong>Maaş karşılaştırması:</strong> "Emsal belediyelere göre bir miktar altta" ifadesi karşılaştırmalı değerlendirmeye işaret.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Kültür İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">88,8</td>
<td class="stat-value">91,3</td>
<td class="highlight">-2,5</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">82,8</td>
<td class="stat-value">86,6</td>
<td class="highlight">-3,8</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">58,4</td>
<td class="stat-value">69,1</td>
<td class="highlight-positive">-10,7</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">89,9</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+3,1</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">85,2</td>
<td class="stat-value">86,9</td>
<td>-1,7</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">77,7</td>
<td class="stat-value">79,8</td>
<td>-2,1</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">68,8</td>
<td class="stat-value">72,2</td>
<td class="highlight">-3,4</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">93,0</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+0,2</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">71,8</td>
<td class="stat-value">77,2</td>
<td class="highlight-warning">-5,4</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">68,5</td>
<td class="stat-value">75,8</td>
<td class="highlight-warning">-7,3</td>
<td class="highlight-critical">Düşük</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Kültür İşleri Müdürlüğü, 10 temadan 3'ünde (iş stresi/yükü, yöneticilerle ilişkiler, kamu hizmeti motivasyonu) belediye ortalamasının üzerinde veya eşit performans göstermektedir. İş stresi çok düşük (-10,7) olumlu bir bulgudur. Eğitim & gelişim (-7,3), yetkinlik & performans (-5,4) ve görev-rol netliği (-3,8) alanlarında iyileştirme gereklidir.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Kültür İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">55,1</td>
<td>70,4</td>
<td class="highlight-positive">-15,3 (düşük stres)</td>
</tr>
<tr>
<td><strong>S11: Zaman sıkışıklığı yaşarım</strong></td>
<td class="stat-value">51,9</td>
<td>64,7</td>
<td class="highlight-positive">-12,8 (düşük stres)</td>
</tr>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">63,1</td>
<td>70,6</td>
<td class="highlight-positive">-7,5 (düşük stres)</td>
</tr>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">63,5</td>
<td>70,8</td>
<td class="highlight-positive">-7,3 (düşük stres)</td>
</tr>
<tr>
<td><strong>S16: Amirim çalışanlara eşit yaklaşır</strong></td>
<td class="stat-value">88,4</td>
<td>82,8</td>
<td class="highlight-positive">+5,6</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Kültür İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S40: Performansım düzenli aralıklarla değerlendirilir</strong></td>
<td class="stat-value">69,9</td>
<td>77,0</td>
<td class="highlight">-7,1</td>
</tr>
<tr>
<td><strong>S41: Değerlendirme sonrasında yapıcı geri bildirim alırım</strong></td>
<td class="stat-value">65,8</td>
<td>74,2</td>
<td class="highlight-critical">-8,4</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">59,2</td>
<td>67,7</td>
<td class="highlight-critical">-8,5</td>
</tr>
<tr>
<td><strong>S43: Eğitimler mesleki gelişimime katkı sağlar</strong></td>
<td class="stat-value">66,7</td>
<td>76,8</td>
<td class="highlight-critical">-10,1</td>
</tr>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">46,6</td>
<td>57,2</td>
<td class="highlight-critical">-10,6</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Kültür İşleri Müdürlüğü, dört stres göstergesinin tamamında belediye ortalamasının altında kalarak düşük stres profiline sahiptir (%58,4). Bu durum, kültürel etkinlik organizasyonunun doğrudan vatandaş başvurusu gerektirmemesiyle açıklanabilir. Amir eşitliği (S16: %88,4, +5,6) güçlü tek alan olarak öne çıkmaktadır. Ancak performans değerlendirme sistemi ciddi sorun alanıdır: düzenli değerlendirme (S40: %69,9, -7,1) ve yapıcı geri bildirim (S41: %65,8, -8,4) düşük skorludur. Kurumsal hizmetler de zayıftır: yemekhane (S30: %46,6, -10,6), eğitimlerin katkısı (S43: %66,7, -10,1) ve servis (S32: %59,2, -8,5). Düşük stres ile düşük kurumsal destek kombinasyonu, personelin rahat ama desteksiz hissettiğine işaret edebilir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Kültür İşleri Müdürlüğü'nden <strong>11 kişi (%18,3)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Tuvalet ve Lavabo Sorunları (3 yorum - baskın tema):</strong></p>
<div class="quote">"Bulunduğum kurumdaki lavabolar yetersiz kalıyor. Personel lavabosunun ayrı olmasını talep ediyorum."</div>
<div class="quote">"Personel tuvaletleri ayrı olmalıdır. Yardımcı personelin izinli olduğu günler yerine başka biri görevlendirilmelidir."</div>
<div class="quote">"Tuvalet temizliğinin arttırılması. Mescidin içinde bulunan abdesthaneye kapı ve havalandırma yapılması."</div>

<p><strong>2. Maaş İyileştirmesi (2 yorum):</strong></p>
<div class="quote">"Maaşımızın iyileştirilmesini talep ediyorum."</div>
<div class="quote">"Maaşlarımız emsal belediyelere göre bir miktar alttadır bu konuda bir düzenleme yapılırsa iyi olur."</div>

<p><strong>3. Ulaşım ve Servis (2 yorum):</strong></p>
<div class="quote">"İlçe dışından gelen personel ulaşım konusunda sıkıntı yaşamaktadır."</div>
<div class="quote">"Personel olarak otopark sorunu yaşıyorum."</div>

<p><strong>4. Eğitim ve Motivasyon (2 yorum):</strong></p>
<div class="quote">"Kurumun kendimizi geliştirmemiz için eğitim verdiğini yazmışsınız böyle bir eğitim yok. Personelin rahatlaması için motivasyon programları şart."</div>
<div class="quote">"Mesleki eğitim programları düzenlenebilir. Bu daha iyi bir hizmeti de beraberinde getirebilir."</div>

<p><strong>5. Kütüphane/Bina Koşulları (2 yorum):</strong></p>
<div class="quote">"Kataloğumuzun zenginliği personel kalitesi doğrultusunda diğer etkenleri de iyileştirecek. Kütüphanemiz daha da ileriye taşınmalıdır. Bina yapısı çevre faktörleri kütüphane içerisindeki eksiklikler buna engel olmaktadır."</div>
<div class="quote">"Klimasız araçla müze gezmek istemiyorum."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlarda <strong>tuvalet/lavabo sorunları</strong> en sık tekrar eden temadır. Personelin vatandaşlardan ayrı tuvalet talebi dikkat çekicidir. Eğitim konusundaki "böyle bir eğitim yok" ifadesi, S42 eğitim faaliyetleri (%70,4) ve S43 eğitimlerin katkısı (%66,7) skorlarıyla tutarlıdır.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Kültür İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">48,9</td>
<td>52,2</td>
<td class="highlight-positive">-3,3</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">54,4</td>
<td>56,1</td>
<td class="highlight-positive">-1,7</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">46,7</td>
<td>50,9</td>
<td class="highlight-positive">-4,2</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">47,3</td>
<td>50,8</td>
<td class="highlight-positive">-3,5</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">46,7</td>
<td>50,9</td>
<td class="highlight-positive">-4,2</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">29,3</td>
<td>44,9</td>
<td class="highlight-positive">-15,6</td>
<td class="highlight-positive">Çok düşük (olumlu)</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Kültür İşleri Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının altındadır (olumlu). Tüm göstergelerde düşük değerler görülmektedir. Sigara kullanımı (%29,3) belediyenin en düşük oranlarından biridir. Bu bulgular, düşük iş stresi/yükü (%58,4) ve güçlü stres-destek dengesi (+21,9) ile tutarlıdır.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Kültür İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">73,2</td>
<td>81,0</td>
<td class="highlight">-7,8</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">68,3</td>
<td>76,9</td>
<td class="highlight">-8,6</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">26,8</td>
<td>31,1</td>
<td class="highlight">-4,3</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">22,0</td>
<td>29,3</td>
<td class="highlight">-7,3</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">34,1</td>
<td>42,8</td>
<td class="highlight">-8,7</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">24,4</td>
<td>39,6</td>
<td class="highlight-critical">-15,2</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">9,8</td>
<td>17,8</td>
<td class="highlight">-8,0</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">9,8</td>
<td>17,6</td>
<td class="highlight">-7,8</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Kültür İşleri Müdürlüğü, tüm sosyal medya platformlarında belediye ortalamasının altında takip oranlarına sahiptir. Özellikle Facebook Başkan (-15,2) ve Instagram Başkan (-8,6) hesaplarında belirgin düşüklük dikkat çekmektedir. Sosyal medya etkileşiminin artırılması gereklidir.</p>

<!-- ==================== #118 - MALİ HİZMETLER MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "fen_isleri": {
            name: "Fen İşleri Müdürlüğü",
            html: `<h1>Fen İşleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Fen İşleri Müdürlüğü, güçlü kamu hizmeti motivasyonu ve görev netliğine sahip olmakla birlikte, anket sonuçlarına göre personel iş stresi/yüküni yüksek bulmaktadır. Fen İşleri Müdürlüğüne göre saha araçlarının yenilenmesi, iş yükü dengesinin gözden geçirilmesi, yönetici-çalışan ilişkilerinde adalet algısının güçlendirilmesi ve yemek hizmetinin iyileştirilmesi izlenmesi gereken alanlar olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">73/120 kişi (%60,8)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-critical">-9,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%88,1</td>
            <td class="avg">%90,8</td>
            <td class="diff">-2,7</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%80,3</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-critical">+11,2 ↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%82,0</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">-0,3</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+1,7</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-11,5</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%63,7</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-critical">+11,5 (olumsuz)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%62,7</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-critical">+17,8 ↑</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">10 kişi (%13,7)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
        
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kamu hizmeti motivasyonu (%90,9):</strong> Belediye ortalamasına yakın. Topluma hizmet gururu (%92,4) ve işin anlamlılığı (%92,8) yüksek.</li>
<li><strong>İş-kişi uyumu (%90,8):</strong> Belediye ortalamasına yakın. Personel işinin yetenek/becerileriyle uyumlu olduğunu düşünüyor (%92,4).</li>
<li><strong>Görev-rol netliği (%87,5):</strong> Belediye ortalamasının 0,9 puan üzerinde. Görev tanımları ve sorumluluklar net.</li>
<li><strong>Yetkinlik & Performans (%80,7):</strong> Belediye ortalamasının 3,5 puan üzerinde. Performans değerlendirme kriterleri net bulunuyor (%83,6).</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yüksek iş stresi/yükü (%80,3):</strong> Belediye ortalamasının 11,2 puan üzerinde. Zaman sıkışıklığı (%79,3), görev yükü (%82,2) ve duygusal zorlayıcılık (%80,5) yüksek skorlu.</li>
<li><strong>Amir eşitliği (%75,4):</strong> Belediye ortalamasının 7,4 puan altında. Açık uçlu yorumlarda adalet konusu da dile getirilmiş.</li>
<li><strong>Anlaşmazlık çözümü (%75,0):</strong> Belediye ortalamasının 9,7 puan altında. Ekip içi sorun çözme mekanizması geliştirilmeye açık.</li>
<li><strong>Ücret memnuniyeti (%61,6):</strong> Belediye ortalamasının 7,4 puan altında.</li>
<li><strong>Sosyal medya takibi:</strong> Tüm platformlarda belediye ortalamasının altında. Özellikle Başkan Instagram (%54,2) dikkat çekici düşüklükte (-22,7).</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>JD-R modeli açısından kritik profil:</strong> Yüksek iş stresi/yükü (%80,3) ile düşük stres-destek dengesi (+1,7) kombinasyonu, anket sonuçlarına göre zorlanma göstergesi açısından izlenmesi gereken bir profil oluşturmaktadır.</li>
<li><strong>Ruh sağlığı risk göstergeleri yüksek:</strong> Keyif alamama (%68,6 vs ort %56,1), gerginlik/kaygı (%60,1 vs ort %50,8) ve endişe kontrolü (%64,8 vs ort %50,9) belirgin yüksek. Bu durum yüksek iş stresi/yüküyle tutarlıdır.</li>
<li><strong>Saha personeli araç sorunu:</strong> Açık uçlu yorumlarda saha araçlarının eski, konforsuz ve arızalı olduğu vurgulanmış. "Araziye çıktığımız araçlar çok kötü, bizi çok yoruyor" ifadesi dikkat çekici.</li>
<li><strong>Yemek kalitesi şikayeti:</strong> Yorumlarda yemeklerin yağlı ve kalitesiz olduğu, vejetaryen seçenek bulunmadığı belirtilmiş.</li>
<li><strong>Adaletsiz ceza sistemi:</strong> "Ceza vermek için bir gerekçe olsun ve cezalandırılan kişi neden cezalandırıldığını bilsin. Bu adalettir." ifadesi, amir eşitliği skorunun düşüklüğüyle (%75,4) tutarlı.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Fen İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">90,8</td>
<td class="stat-value">91,3</td>
<td>-0,5</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">87,5</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+0,9</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">80,3</td>
<td class="stat-value">69,1</td>
<td class="highlight-critical">+11,2</td>
<td class="highlight-critical">Yüksek stres (olumsuz)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">85,2</td>
<td class="stat-value">86,8</td>
<td class="highlight">-1,6</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">85,2</td>
<td class="stat-value">86,9</td>
<td class="highlight">-1,7</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">78,8</td>
<td class="stat-value">79,8</td>
<td class="highlight">-1,0</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">72,6</td>
<td class="stat-value">72,2</td>
<td class="highlight-positive">+0,4</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">90,9</td>
<td class="stat-value">92,8</td>
<td class="highlight">-1,9</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">80,7</td>
<td class="stat-value">77,2</td>
<td class="highlight-positive">+3,5</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">73,9</td>
<td class="stat-value">75,8</td>
<td class="highlight">-1,9</td>
<td>Ortalama düzeyde</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Fen İşleri Müdürlüğü, 10 temadan 3'ünde belediye ortalamasının üzerinde performans göstermektedir. En yüksek skorlu alanlar yetkinlik & performans (+3,5) ve görev-rol netliği (+0,9) iken, iş stresi/yükü (+11,2 - yüksek stres olumsuz) en kritik alan olarak öne çıkmaktadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Fen İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">73,7</td>
<td>67,7</td>
<td class="highlight-positive">+6,0</td>
</tr>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">62,7</td>
<td>57,2</td>
<td class="highlight-positive">+5,5</td>
</tr>
<tr>
<td><strong>S40: Performansım düzenli aralıklarla değerlendirilir</strong></td>
<td class="stat-value">82,2</td>
<td>77,0</td>
<td class="highlight-positive">+5,2</td>
</tr>
<tr>
<td><strong>S41: Değerlendirme sonrasında yapıcı geri bildirim alırım</strong></td>
<td class="stat-value">79,2</td>
<td>74,2</td>
<td class="">+5,0</td>
</tr>
<tr>
<td><strong>S28: Bireysel çalışma alanım (masa, sandalye vb.) yeterlidir</strong></td>
<td class="stat-value">82,8</td>
<td>79,2</td>
<td class="">+3,6</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Fen İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">79,2</td>
<td>70,6</td>
<td class="highlight-critical">+8,6</td>
</tr>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">80,5</td>
<td>70,8</td>
<td class="highlight-critical">+9,7</td>
</tr>
<tr>
<td><strong>S22: Anlaşmazlıkları iş arkadaşlarımızla kendi aramızda çözeriz</strong></td>
<td class="stat-value">75,0</td>
<td>84,7</td>
<td class="highlight-critical">-9,7</td>
</tr>
<tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">82,2</td>
<td>70,4</td>
<td class="highlight-critical">+11,8 (yüksek stres)</td>
</tr>
<tr>
<td><strong>S11: Zaman sıkışıklığı yaşarım</strong></td>
<td class="stat-value">79,3</td>
<td>64,7</td>
<td class="highlight-critical">+14,6 (yüksek stres)</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Fen İşleri Müdürlüğü, belediyenin en yüksek iş stresi/yüküne sahip birimlerinden biridir. Dört stres göstergesinin tamamı - zaman sıkışıklığı (S11: %79,3, +14,6), görev yükü (S9: %82,2, +11,8), duygusal zorlayıcılık (S8: %80,5, +9,7) ve vatandaş yoğunluğu (S10: %79,2, +8,6) - belediye ortalamasının çok üzerindedir. Bu yoğun iş temposuna rağmen servis (S32: %73,7, +6,0) ve performans değerlendirme (S40: %82,2, +5,2) skorları ortalamanın üzerinde olması, birimin operasyonel kapasitesinin güçlü olduğunu göstermektedir. Ancak ekip içi anlaşmazlık çözme becerisi (S22: %75,0, -9,7) düşük kalması, yüksek stres ortamında iletişim sorunları yaşandığına işaret edebilir. Bu stres profili, ruh sağlığı göstergeleriyle birlikte değerlendirilmelidir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Fen İşleri Müdürlüğü'nden <strong>10 kişi (%13,7)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Saha Araçları Sorunu (3+ yorum):</strong></p>
<div class="quote">"Araziye çıktığımız araçlar çok kötü. Aşırı sarsıntılarımız olduğundan arabalar bizi çok yoruyor."</div>
<div class="quote">"Saha personelinin saha denetiminde kullandığı araçlar çok eski ve sık arıza yapıyor."</div>
<div class="quote">"Saha personelleri için arabalar konforsuz. 1 gün arabada geçiyor, direksiyon ve debriyaj kullanışsız, bizi yoruyor."</div>

<p><strong>2. Yemek Kalitesi (4+ yorum):</strong></p>
<div class="quote">"Yemekhane yemeklerinde kalite bulunmuyor. Yemek kalitesinde iyileştirme yapılmalı."</div>
<div class="quote">"Yemekhanede yemek yedikten sonra sürekli rahatsızlık hissediyorum. Yemekler olması gerekenden çok daha fazla yağlı oluyor."</div>
<div class="quote">"Alternatif yemek seçeneği olmalı (vejetaryen biri olarak yemek yiyemiyorum)."</div>

<p><strong>3. Adalet ve Ücret:</strong></p>
<div class="quote">"Ceza vermek için bir gerekçe olsun ve cezalandırılan kişi neden cezalandırıldığını bilsin. Bu adalettir."</div>
<div class="quote">"Kurum içinde daha fazla emek veren personellerin daha yüksek ücret alması gerektiğini düşünüyorum."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yanıtlarda en belirgin tema <strong>saha araçlarının yetersizliği</strong>dir - eski, konforsuz ve arızalı araçların personeli yorduğu vurgulanmaktadır. <strong>Yemek kalitesi</strong> ikinci önemli tema olup, yağlı yemekler ve vejetaryen seçenek eksikliği dile getirilmiştir. <strong>Adalet algısı</strong> konusundaki yorum, amir eşitliği skorunun düşüklüğüyle (%75,4) tutarlıdır.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Fen İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">63,7</td>
<td>52,2</td>
<td class="highlight-critical">+11,5</td>
<td class="highlight-critical">(olumsuz)</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">68,6</td>
<td>56,1</td>
<td class="highlight-critical">+12,5</td>
<td class="highlight-critical">(olumsuz)</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">60,6</td>
<td>50,9</td>
<td class="highlight-critical">+9,7</td>
<td class="highlight-critical">(olumsuz)</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">60,1</td>
<td>50,8</td>
<td class="highlight-critical">+9,3</td>
<td class="highlight-critical">(olumsuz)</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">64,8</td>
<td>50,9</td>
<td class="highlight-critical">+13,9</td>
<td class="highlight-critical">(olumsuz)</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">62,7</td>
<td>44,9</td>
<td class="highlight-critical">+17,8</td>
<td class="highlight-critical">Yüksek</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Fen İşleri Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının belirgin üzerindedir (olumsuz). Tüm alt göstergelerde +9 ile +14 puan arası farklar dikkat çekicidir. Bu durum, yüksek iş stresi/yükü (%80,3) ve zayıf stres-destek dengesi (+1,7) ile tutarlıdır. Sigara kullanımı (%62,7) belediye ortalamasının (%44,9) 17,8 puan üzerindedir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Fen İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">74,6</td>
<td>81,0</td>
<td class="highlight">-6,4</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">54,2</td>
<td>76,9</td>
<td class="highlight-critical">-22,7</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">22,0</td>
<td>31,1</td>
<td class="highlight">-9,1</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">15,3</td>
<td>29,3</td>
<td class="highlight-critical">-14,0</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">28,8</td>
<td>42,8</td>
<td class="highlight-critical">-14,0</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">28,8</td>
<td>39,6</td>
<td class="highlight">-10,8</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">6,8</td>
<td>17,8</td>
<td class="highlight">-11,0</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">6,8</td>
<td>17,6</td>
<td class="highlight">-10,8</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Fen İşleri Müdürlüğü, tüm sosyal medya platformlarında belediye ortalamasının altında takip oranlarına sahiptir. Özellikle Başkan Instagram hesabı takibi (%54,2) belediye ortalamasının (%76,9) 22,7 puan altındadır - bu belediyenin en düşük oranlarından biridir. Bu durum, saha ağırlıklı çalışan personelin sosyal medya kullanım alışkanlıklarıyla ilişkili olabilir.</p>

<!-- ==================== #107 - GELİRLER MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "plan_proje": {
            name: "Plan ve Proje Müdürlüğü",
            html: `<h1>Plan ve Proje Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Plan ve Proje Müdürlüğü, güçlü ekip dayanışmasına rağmen <strong>ciddi çalışma koşulları sorunları</strong> (yemekhane, servis, tuvalet) ve <strong>yüksek ruh sağlığı riski</strong> ile dikkat çekmektedir. Servislerin kaldırılması personelin psikolojisini olumsuz etkilemiştir. Acil olarak servis hizmetinin yeniden değerlendirilmesi, yemekhane kalitesinin iyileştirilmesi ve personel ruh sağlığının desteklenmesi önerilir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">17/17 kişi (%100)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+29,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%84,4</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-warning">-6,4</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%68,3</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-0,8</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%79,1</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight">-3,2</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+10,8</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-2,4</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%60,0</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-warning">+7,8 (olumsuz) ⚠️</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%25,0</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-19,9 ↓↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">9 kişi (%52,9)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çalışma arkadaşları (%89,6):</strong> Belediye ortalamasının 2,7 puan üzerinde. Anlaşmazlık çözümü (%93,3) çok güçlü.</li>
<li><strong>Kamu hizmeti motivasyonu (%89,6):</strong> Belediye ortalamasının 3,2 puan altında ama hala güçlü. Topluma hizmet gururu (%95,3) yüksek.</li>
<li><strong>Çok düşük sigara kullanımı (%25,0):</strong> Belediye ortalamasının 19,9 puan altında - belediyenin en düşüklerinden.</li>
<li><strong>Amir saygısı (%95,0):</strong> Belediye ortalamasının 5,1 puan üzerinde.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yemekhane (%35,0):</strong> Belediye ortalamasının 22,2 puan altında - <strong>belediyenin en düşük skoru!</strong></li>
<li><strong>Servis hizmeti (%44,6):</strong> Belediye ortalamasının 23,1 puan altında - <strong>belediyenin en düşük skorlarından!</strong> "Servislerin kaldırılması motivasyonu düşürüyor" yorumu.</li>
<li><strong>Ücret (%53,1):</strong> Belediye ortalamasının 15,9 puan altında.</li>
<li><strong>Ruh sağlığı riski (%60,0):</strong> Belediye ortalamasının 7,8 puan üzerinde - acil dikkat gerektirir.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>⚠️ Ruh sağlığı uyarısı (kritik):</strong> Gergin/kaygılı hissetme %65,0 (+14,2), endişe kontrolü %61,7 (+10,8) - belediyenin en yüksek değerleri.</li>
<li><strong>Servis kaldırılması şikayeti:</strong> "Psikolojimi, motivasyonumu ve enerjimi en çok düşüren etken servislerin kaldırılmasıdır" - doğrudan ifade.</li>
<li><strong>Yüksek yorum oranı (%52,9):</strong> 17 kişiden 9'u yorum yapmış - birim talep ve şikayetlerini aktif olarak ifade ediyor.</li>
<li><strong>Tuvalet/hijyen şikayetleri:</strong> Çok sayıda yorumda tuvalet temizliği ve yetersizliği vurgulanmış.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Plan ve Proje (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">87,5</td>
<td class="stat-value">91,3</td>
<td class="highlight">-3,8</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">84,9</td>
<td class="stat-value">86,6</td>
<td class="highlight">-1,7</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">68,3</td>
<td class="stat-value">69,1</td>
<td class="highlight-positive">-0,8</td>
<td class="highlight-positive">Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">84,5</td>
<td class="stat-value">86,8</td>
<td class="highlight">-2,3</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">89,6</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+2,7</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">78,2</td>
<td class="stat-value">79,8</td>
<td>-1,6</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">65,2</td>
<td class="stat-value">72,2</td>
<td class="highlight-warning">-7,0</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">89,6</td>
<td class="stat-value">92,8</td>
<td class="highlight">-3,2</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">73,7</td>
<td class="stat-value">77,2</td>
<td class="highlight">-3,5</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">68,5</td>
<td class="stat-value">75,8</td>
<td class="highlight-warning">-7,3</td>
<td class="highlight-critical">Düşük</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Plan ve Proje Müdürlüğü, 10 temadan yalnızca 2'sinde (iş stresi/yükü, çalışma arkadaşları) belediye ortalamasının üzerinde veya eşit performans göstermektedir. Çalışma koşulları (-7,0) ve eğitim & gelişim (-7,3) en kritik alanlardır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Plan ve Proje (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S28: Bireysel çalışma alanım (masa, sandalye vb.) yeterlidir</strong></td>
<td class="stat-value">90,6</td>
<td>79,2</td>
<td class="highlight-positive">+11,4</td>
</tr>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">82,8</td>
<td>74,1</td>
<td class="highlight-positive">+8,7</td>
</tr>
<tr>
<td><strong>S22: Anlaşmazlıkları iş arkadaşlarımızla kendi aramızda çözeriz</strong></td>
<td class="stat-value">93,3</td>
<td>84,7</td>
<td class="highlight-positive">+8,6</td>
</tr>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">62,5</td>
<td>70,8</td>
<td class="highlight-positive">-8,3 (düşük stres)</td>
</tr>
<tr>
<td><strong>S17: Amirim bana karşı saygılıdır</strong></td>
<td class="stat-value">95,0</td>
<td>89,9</td>
<td class="highlight-positive">+5,1</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Plan ve Proje (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S42: Kurumda yapılan eğitim faaliyetlerini yeterli bulurum</strong></td>
<td class="stat-value">65,6</td>
<td>74,8</td>
<td class="highlight-critical">-9,2</td>
</tr>
<tr>
<td><strong>S36: Kamu kurumlarında çalışmayı tavsiye ederim</strong></td>
<td class="stat-value">81,3</td>
<td>90,7</td>
<td class="highlight-critical">-9,4</td>
</tr>
<tr>
<td><strong>S34: Ücretler piyasa koşullarına göre makul</strong></td>
<td class="stat-value">53,1</td>
<td>69,0</td>
<td class="highlight-critical">-15,9</td>
</tr>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">35,0</td>
<td>57,2</td>
<td class="highlight-critical">-22,2</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">44,6</td>
<td>67,7</td>
<td class="highlight-critical">-23,1</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Plan ve Proje Müdürlüğü'nde ofis çalışma koşulları güçlü iken kurumsal hizmetler ciddi sorun alanıdır. Bireysel çalışma alanı (S28: %90,6, +11,4), ısıtma/soğutma (S27: %82,8, +8,7) ve ekip içi anlaşmazlık çözümü (S22: %93,3, +8,6) belediye ortalamasının çok üzerindedir. Düşük duygusal zorlayıcılık (S8: %62,5, -8,3) teknik bir birimin profilini yansıtmaktadır. Ancak servis (S32: %44,6, -23,1) ve yemekhane (S30: %35,0, -22,2) belediyenin en düşük skorları arasındadır - bu durum birimin belediye merkezinden uzak bir lokasyonda olabileceğine işaret etmektedir. Ücret memnuniyetsizliği (S34: %53,1, -15,9) ve kamu kurumlarını tavsiye etme oranının düşüklüğü (S36: %81,3, -9,4), teknik personelin piyasa karşılaştırması yaptığını düşündürmektedir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Plan ve Proje Müdürlüğü'nden <strong>9 kişi (%52,9)</strong> açık uçlu yorum yapmıştır - yüksek katılım.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Servis Hizmeti Sorunu (4 yorum - baskın tema):</strong></p>
<div class="quote">"Bir çalışan olarak psikolojimi, motivasyonumu ve enerjimi en çok düşüren etken servislerin kaldırılmasıdır (ilçe dışı)."</div>
<div class="quote">"Servis hizmetinin eskisi gibi geri gelmesi."</div>
<div class="quote">"Servislere KYK ve memurlar ücretsiz bir şekilde binebilmeli."</div>
<div class="quote">"Servis şoförleri daha dikkatli olmalı."</div>

<p><strong>2. Tuvalet/Hijyen Sorunları (4 yorum):</strong></p>
<div class="quote">"Lavabolar yetersiz ve yeteri kadar temiz değil."</div>
<div class="quote">"Tuvaletler temiz değil. Peçeteler yetersiz."</div>
<div class="quote">"Asansör ve tuvaletlerin bakım/temizliği."</div>
<div class="quote">"Dinlenme alanı, WC'ler iyileştirilmeli."</div>

<p><strong>3. Yemekhane Kalitesi (3 yorum):</strong></p>
<div class="quote">"Yemekhanenin yemekleri gerçekten iyileştirilmeli. Yemekte zorlanıyoruz, daha fazla çeşitte ve kalitede olmasını temenni ediyorum."</div>
<div class="quote">"Yemekhane servis tepsileri değiştirilmelidir."</div>

<p><strong>4. Maaş ve Mesai (3 yorum):</strong></p>
<div class="quote">"Mesaiye kaldığımız halde ücret alamıyoruz. Maaşlar iyileştirilmeli."</div>
<div class="quote">"Maaşların diğer belediye çalışanlara göre az kalması."</div>

<p><strong>5. İletişim ve İş Dağılımı (2 yorum):</strong></p>
<div class="quote">"Belediye genelinde iletişim kopukluğu tarafımca mevcut. Bunun giderilmesi için girişimlerde bulunulmasını talep ediyorum."</div>
<div class="quote">"Çalışanlar arası eşit iş dağılımı ve ekip çalışmasına daha fazla önem verilmesi gerektiğini düşünüyorum."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlarda <strong>servis kaldırılması/sorunları</strong> ve <strong>tuvalet hijyeni</strong> baskın temalar olarak öne çıkmaktadır. "Psikolojimi, motivasyonumu ve enerjimi en çok düşüren etken servislerin kaldırılması" ifadesi, S32 servis skoru (%44,6, -23,1) ile doğrudan tutarlıdır. Yemekhane şikayetleri de S30 (%35,0, -22,2) skoru ile örtüşmektedir.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Plan ve Proje (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">60,0</td>
<td>52,2</td>
<td class="highlight-critical">+7,8</td>
<td class="highlight-critical">Yüksek (olumsuz) ⚠️</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">56,7</td>
<td>56,1</td>
<td>+0,6</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">56,7</td>
<td>50,9</td>
<td class="highlight">+5,8</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">65,0</td>
<td>50,8</td>
<td class="highlight-critical">+14,2</td>
<td class="highlight-critical">Çok yüksek (olumsuz) ⚠️</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">61,7</td>
<td>50,9</td>
<td class="highlight-critical">+10,8</td>
<td class="highlight-critical">Çok yüksek (olumsuz) ⚠️</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">25,0</td>
<td>44,9</td>
<td class="highlight-positive">-19,9</td>
<td class="highlight-positive">Çok düşük (olumlu)</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Plan ve Proje Müdürlüğü personelinin ruh sağlığı göstergeleri <strong>ciddi düzeyde endişe vericidir</strong>. <strong>Gergin/kaygılı hissetme (%65,0, +14,2)</strong> ve <strong>endişe kontrolünde zorluk (%61,7, +10,8)</strong> belediyenin en yüksek değerleri arasındadır. Servis kaldırılması ve yemekhane/hijyen sorunlarının yarattığı stres bu tabloya katkıda bulunuyor olabilir. Sigara kullanımının düşük olması (%25,0) pozitif bir bulgudur.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Plan ve Proje (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">93,8</td>
<td>81,0</td>
<td class="highlight-positive">+12,8</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">93,8</td>
<td>76,9</td>
<td class="highlight-positive">+16,9</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">25,0</td>
<td>31,1</td>
<td class="highlight">-6,1</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">18,8</td>
<td>29,3</td>
<td class="highlight">-10,5</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">18,8</td>
<td>42,8</td>
<td class="highlight-critical">-24,0</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">12,5</td>
<td>39,6</td>
<td class="highlight-critical">-27,1</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">12,5</td>
<td>17,8</td>
<td class="highlight">-5,3</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">12,5</td>
<td>17,6</td>
<td class="highlight">-5,1</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Plan ve Proje Müdürlüğü, Instagram'da belediye ortalamasının belirgin üzerinde (+12,8 ve +16,9) takip oranlarına sahipken, Facebook'ta çok düşük (-24,0 ve -27,1), Twitter/X ve NextSosyal'de de ortalamanın altında takip görülmektedir.</p>

</body>
</html>`
        },
        "halkla_iliskiler": {
            name: "Halkla İlişkiler Müdürlüğü",
            html: `<h1>Halkla İlişkiler Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Halkla İlişkiler Müdürlüğü, güçlü kamu hizmeti motivasyonu ve yönetici ilişkilerine sahip olmakla birlikte, anket sonuçlarına göre personel iş-kişi uyumunu düşük bulmaktadır. Özellikle çağrı merkezi personelinin iş yükünün dengelenmesi, çalışma koşullarının iyileştirilmesi ve personelin yetenek-görev uyumunun gözden geçirilmesi izlenmesi gereken alanlar olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">25/30 kişi (%83,3)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+12,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%92,4</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+1,6</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%72,6</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight">+3,5 ↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%78,6</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight">-3,7</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+6,0</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-7,2</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%52,9</td>
            <td class="avg">%52,2</td>
            <td class="diff">+0,7 (olumsuz)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%60,9</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-critical">+16,0 ↑</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">6 kişi (%24,0)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kamu hizmeti motivasyonu (%95,3):</strong> Belediye ortalamasının 2,5 puan üzerinde. Topluma hizmet gururu (%96,7) ve kamu kurumlarını tavsiye (%95,7) çok yüksek.</li>
<li><strong>Yöneticilerle ilişkiler (%89,9):</strong> Belediye ortalamasının 3,1 puan üzerinde. Amir ulaşılabilirliği (%92,4) ve amir saygısı (%91,3) güçlü.</li>
<li><strong>Sosyal medya takibi:</strong> Tüm platformlarda belediye ortalamasının çok üzerinde - birimin görev alanı gereği beklenen bir sonuç.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>İş-kişi uyumu (%80,5):</strong> Belediye ortalamasının 10,8 puan altında - müdürlüğün en belirgin zayıf yönü. Yetenek-iş uyumu (%77,2) ve işi seçtiği için mutluluk (%79,3) düşük.</li>
<li><strong>Çalışma koşulları (%64,4):</strong> Belediye ortalamasının 7,8 puan altında. Ortak alanlar (%51,1), yemekhane (%48,5) ve İSG (%59,8) düşük.</li>
<li><strong>Kurum içi iletişim (%74,5):</strong> Belediye ortalamasının 5,3 puan altında.</li>
<li><strong>Görev-rol netliği (%81,5):</strong> Belediye ortalamasının 5,1 puan altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yüksek çağrı yükü:</strong> Açık uçlu yorumda "günde ortalama 160-200 çağrı, 3-4 saat konuşma süresi, iş içi gerginliğe sebep olmakta" ifadesi - çağrı merkezi personelinin iş yükü çok yüksek.</li>
<li><strong>Yüksek sigara kullanımı (%60,9):</strong> Belediye ortalamasının 16 puan üzerinde - yüksek iş stresi/yükü ile ilişkili olabilir.</li>
<li><strong>İş-kişi uyumu paradoksu:</strong> Kamu hizmeti motivasyonu çok yüksek (%95,3) iken iş-kişi uyumu çok düşük (%80,5) - personel topluma hizmet etmekten gurur duyuyor ancak yaptığı işi yetenek ve beklentileriyle uyumlu bulmuyor.</li>
<li><strong>Servis yetersizliği:</strong> "Boğazköy servisi yetersiz, ayakta gidiyoruz" şikayeti.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Halkla İlişkiler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">80,5</td>
<td class="stat-value">91,3</td>
<td class="highlight-critical">-10,8</td>
<td class="highlight-critical">Çok düşük</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">81,5</td>
<td class="stat-value">86,6</td>
<td class="highlight-warning">-5,1</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">72,6</td>
<td class="stat-value">69,1</td>
<td class="highlight">+3,5</td>
<td class="highlight">Ortalamanın üzerinde (olumsuz)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">89,9</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+3,1</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">83,0</td>
<td class="stat-value">86,9</td>
<td class="highlight">-3,9</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">74,5</td>
<td class="stat-value">79,8</td>
<td class="highlight-warning">-5,3</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">64,4</td>
<td class="stat-value">72,2</td>
<td class="highlight-warning">-7,8</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">95,3</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+2,5</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">73,9</td>
<td class="stat-value">77,2</td>
<td class="highlight">-3,3</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">72,3</td>
<td class="stat-value">75,8</td>
<td class="highlight">-3,5</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Halkla İlişkiler Müdürlüğü, 10 temadan sadece 2'sinde (kamu hizmeti motivasyonu ve yöneticilerle ilişkiler) belediye ortalamasının üzerinde performans göstermektedir. En düşük skorlu alanlar iş-kişi uyumu (-10,8), çalışma koşulları (-7,8), kurum içi iletişim (-5,3) ve görev-rol netliği (-5,1) olarak öne çıkmaktadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Halkla İlişkiler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S15: Kararlara katılma ve fikrimi söyleme fırsatı</strong></td>
<td class="stat-value">88,0</td>
<td>82,5</td>
<td class="highlight-positive">+5,5</td>
</tr>
<tr>
<td><strong>S16: Amirim çalışanlara eşit yaklaşır</strong></td>
<td class="stat-value">88,0</td>
<td>82,8</td>
<td class="highlight-positive">+5,2</td>
</tr>
<tr>
<td><strong>S36: Kamu kurumlarında çalışmayı tavsiye ederim</strong></td>
<td class="stat-value">95,7</td>
<td>90,7</td>
<td class="">+5,0</td>
</tr>
<tr>
<td><strong>S34: Ücretler piyasa koşullarına göre makul</strong></td>
<td class="stat-value">73,9</td>
<td>69,0</td>
<td class="">+4,9</td>
</tr>
<tr>
<td><strong>S13: Amirimin geri bildirimleri gelişimime katkı sağlar</strong></td>
<td class="stat-value">90,2</td>
<td>86,5</td>
<td class="">+3,7</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Halkla İlişkiler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S2: Bu işi seçtiğim için mutluyum</strong></td>
<td class="stat-value">79,3</td>
<td>90,7</td>
<td class="highlight-critical">-11,4</td>
</tr>
<tr>
<td><strong>S1: Yaptığım iş yetenek ve becerilerimle uyumludur</strong></td>
<td class="stat-value">77,2</td>
<td>90,9</td>
<td class="highlight-critical">-13,7</td>
</tr>
<tr>
<td><strong>S26: Çalışma alanlarımın temizliği yeterlidir</strong></td>
<td class="stat-value">65,2</td>
<td>79,4</td>
<td class="highlight-critical">-14,2</td>
</tr>
<tr>
<td><strong>S31: İş sağlığı ve güvenliği (İSG) uygulamaları yeterlidir</strong></td>
<td class="stat-value">59,8</td>
<td>76,3</td>
<td class="highlight-critical">-16,5</td>
</tr>
<tr>
<td><strong>S29: Ortak alanlar yeterlidir</strong></td>
<td class="stat-value">51,1</td>
<td>70,4</td>
<td class="highlight-critical">-19,3</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Halkla İlişkiler Müdürlüğü'nde dikkat çekici bir çelişki görülmektedir: Yönetici ilişkileri güçlü (S15: %88,0, +5,5; S16: %88,0, +5,2) ve kamu kurumlarını tavsiye oranı yüksek (S36: %95,7, +5,0) iken, iş-kişi uyumu belediyenin en düşük skorları arasındadır. "Bu işi seçtiğim için mutluyum" (S2: %79,3, -11,4) ve "İş-yetenek uyumu" (S1: %77,2, -13,7) soruları, personelin mevcut görevlerinden memnun olmadığına işaret etmektedir. Fiziksel koşullar da ciddi sorun alanıdır: ortak alanlar (S29: %51,1, -19,3), İSG (S31: %59,8, -16,5) ve temizlik (S26: %65,2, -14,2). Bu tablo, personelin kurumu ve yöneticileri beğendiği ancak kendi işi ve çalışma ortamından memnun olmadığı şeklinde yorumlanabilir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Halkla İlişkiler Müdürlüğü'nden <strong>6 kişi (%24,0)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Çağrı Merkezi İş Yükü (kritik bulgu):</strong></p>
<div class="quote">"Günde ortalama 160-200 çağrı, 3 ila 4 saat arası konuşma süreleri iş içi gerginliğe ve performansa sebep olmaktadır."</div>

<p><strong>2. Servis Yetersizliği:</strong></p>
<div class="quote">"Boğazköy Servisi yetersiz. Ayakta gidiyoruz."</div>

<p><strong>3. Teknoloji Altyapısı:</strong></p>
<div class="quote">"Belediye binamız içerisinde personeller için kullanılabilecek ayrı bir kablosuz ağ (Wi-Fi) eklenmesini talep ediyorum."</div>

<p><strong>4. Fiziksel Çevre:</strong></p>
<div class="quote">"Bina içindeki yönlendirme ve birim tabelalarının güncellenmesi esastır."</div>

<p><strong>5. Mola Vakti:</strong></p>
<div class="quote">"Mola vaktinin uzatılmasını talep ediyorum."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlarda en dikkat çekici bulgu <strong>çağrı merkezi personelinin yüksek iş yükü</strong>dür. Günde 160-200 çağrı ve 3-4 saat konuşma süresi, personelin stres düzeyini artıran somut bir veridir. Bu bulgu, yüksek iş stresi/yükü (%72,6) ve yüksek sigara kullanımı (%60,9) ile tutarlıdır. Servis yetersizliği de S32 skoruyla (%57,8) tutarlı bir şikayettir.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Halkla İlişkiler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">52,9</td>
<td>52,2</td>
<td>+0,7</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">57,6</td>
<td>56,1</td>
<td>+1,5</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">50,0</td>
<td>50,9</td>
<td class="highlight-positive">-0,9</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">52,4</td>
<td>50,8</td>
<td>+1,6</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">51,1</td>
<td>50,9</td>
<td>+0,2</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">60,9</td>
<td>44,9</td>
<td class="highlight-critical">+16,0</td>
<td class="highlight-critical">Çok yüksek</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Halkla İlişkiler Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasına yakın düzeydedir. Ancak sigara kullanımı (%60,9) belediye ortalamasının (%44,9) 16 puan üzerindedir - bu, yüksek iş stresi/yükü ve çağrı merkezi iş yükü ile ilişkili bir bulgu olabilir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Halkla İlişkiler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">91,3</td>
<td>81,0</td>
<td class="highlight-positive">+10,3</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">91,3</td>
<td>76,9</td>
<td class="highlight-positive">+14,4</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">69,6</td>
<td>31,1</td>
<td class="highlight-positive">+38,5</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">69,6</td>
<td>29,3</td>
<td class="highlight-positive">+40,3</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">47,8</td>
<td>42,8</td>
<td class="highlight-positive">+5,0</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">47,8</td>
<td>39,6</td>
<td class="highlight-positive">+8,2</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">30,4</td>
<td>17,8</td>
<td class="highlight-positive">+12,6</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">30,4</td>
<td>17,6</td>
<td class="highlight-positive">+12,8</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Halkla İlişkiler Müdürlüğü, tüm sosyal medya platformlarında belediye ortalamasının çok üzerinde takip oranlarına sahiptir. Özellikle Twitter/X takibi (+38,5 ve +40,3 puan) çok yüksektir. Bu durum, birimin görev alanı (kurumsal iletişim, sosyal medya yönetimi) ile doğrudan ilişkilidir.</p>

<!-- ==================== #110 - HUKUK İŞLERİ MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "iklim_degisikligi": {
            name: "İklim Değişikliği ve Sıfır Atık Müdürlüğü",
            html: `<h1>İklim Değişikliği ve Sıfır Atık Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> İklim Değişikliği ve Sıfır Atık Müdürlüğü, güçlü iş-kişi uyumu ve kamu hizmeti motivasyonuna sahip olmakla birlikte, anket sonuçlarına göre personel yoğun iş yükü altında çalışmaktadır. Kritik düzeyde düşük stres-destek dengesi (+0,7) ve çok yüksek sigara kullanımı (%70,6), personel takviyesi ve fiziksel çalışma koşullarının iyileştirilmesi gerekliliğine işaret etmektedir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">23/24 kişi (%95,8)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+25,4</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%88,2</td>
            <td class="avg">%90,8</td>
            <td class="diff">-2,6</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%78,7</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-critical">+9,6 ↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%79,4</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">-2,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+0,7</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-12,5</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%48,0</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-4,2 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%70,6</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-critical">+25,7 ↑↑</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">5 kişi (%21,7)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kamu hizmeti motivasyonu (%91,2):</strong> Belediye ortalamasının 1,6 puan altında olmakla birlikte, topluma hizmet gururu (%94,1) yüksek.</li>
<li><strong>İş-kişi uyumu (%90,7):</strong> Belediye ortalamasının 0,6 puan altında. Yetenek-iş uyumu (%95,6) çok yüksek.</li>
<li><strong>Ruh sağlığı göstergeleri (olumlu):</strong> Gerginlik/kaygı (%43,3) ve üzgün hissetme (%45,0) belediye ortalamasının altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>İş stresi (%78,7):</strong> Belediye ortalamasının 9,6 puan üzerinde. Görev yükü (%86,8, +16,4) ve zaman sıkışıklığı (%77,9, +13,2) çok yüksek.</li>
<li><strong>Çalışma koşulları (%65,9):</strong> Belediye ortalamasının 6,3 puan altında. Temizlik (%65,6), yemekhane (%55,4), servis (%55,8) düşük.</li>
<li><strong>Eğitim & Gelişim (%71,3):</strong> Belediye ortalamasının 4,5 puan altında.</li>
<li><strong>Personel yetersizliği:</strong> Açık uçlu yorumlarda "acil personel ihtiyacı" vurgusu.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kritik stres-destek dengesi (+0,7):</strong> Belediyenin en düşük dengelerinden - Gelirler Müdürlüğü'nden (-2,5) sonra en kritik profil.</li>
<li><strong>Çok yüksek sigara kullanımı (%70,6):</strong> Belediye ortalamasının 25,7 puan üzerinde - belediyenin en yüksek oranı.</li>
<li><strong>Personel ve araç yetersizliği:</strong> Açık uçlu yorumlarda "acil şekilde araba, kamyonet ve iş arkadaşlarına ihtiyacımız var" ifadesi - yüksek iş stresi/yüküyle tutarlı.</li>
<li><strong>Fiziksel koşullar yetersiz:</strong> "Dolap yok, tuvalet kilitleri yok, üstümüzü değiştirecek yerimiz yok" şikayeti.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>İklim Değişikliği (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">90,7</td>
<td class="stat-value">91,3</td>
<td>-0,6</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">85,2</td>
<td class="stat-value">86,6</td>
<td>-1,4</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">78,7</td>
<td class="stat-value">69,1</td>
<td class="highlight-critical">+9,6</td>
<td class="highlight-critical">Yüksek (olumsuz)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">85,1</td>
<td class="stat-value">86,8</td>
<td>-1,7</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">82,6</td>
<td class="stat-value">86,9</td>
<td class="highlight">-4,3</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">76,5</td>
<td class="stat-value">79,8</td>
<td class="highlight">-3,3</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">65,9</td>
<td class="stat-value">72,2</td>
<td class="highlight-warning">-6,3</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">91,2</td>
<td class="stat-value">92,8</td>
<td>-1,6</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">77,6</td>
<td class="stat-value">77,2</td>
<td class="highlight-positive">+0,4</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">71,3</td>
<td class="stat-value">75,8</td>
<td class="highlight">-4,5</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> İklim Değişikliği ve Sıfır Atık Müdürlüğü, 10 temadan sadece 1'inde (yetkinlik & performans) belediye ortalamasının üzerinde performans göstermektedir. En kritik alan iş stresi/yükü (+9,6) olup, çalışma koşulları (-6,3), eğitim & gelişim (-4,5) ve çalışma arkadaşları (-4,3) alanları da geliştirilmesi gereken bölgelerdir.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>İklim Değişikliği (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S6: Görevlerim ve sorumlulukların uyumludur</strong></td>
<td class="stat-value">91,7</td>
<td>87,0</td>
<td class="">+4,7</td>
</tr>
<tr>
<td><strong>S1: Yaptığım iş yetenek ve becerilerimle uyumludur</strong></td>
<td class="stat-value">95,6</td>
<td>90,9</td>
<td class="">+4,7</td>
</tr>
<tr>
<td><strong>S38: Performans değerlendirme kriterleri nettir</strong></td>
<td class="stat-value">83,8</td>
<td>80,6</td>
<td class="">+3,2</td>
</tr>
<tr>
<td><strong>S39: Performans değerlendirme kriterleri adildir</strong></td>
<td class="stat-value">79,4</td>
<td>77,2</td>
<td class="">+2,2</td>
</tr>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">75,0</td>
<td>74,1</td>
<td class="">+0,9</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>İklim Değişikliği (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S28: Bireysel çalışma alanım (masa, sandalye vb.) yeterlidir</strong></td>
<td class="stat-value">67,6</td>
<td>79,2</td>
<td class="highlight-critical">-11,6</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">55,8</td>
<td>67,7</td>
<td class="highlight-critical">-11,9</td>
</tr>
<tr>
<td><strong>S11: Zaman sıkışıklığı yaşarım</strong></td>
<td class="stat-value">77,9</td>
<td>64,7</td>
<td class="highlight-critical">+13,2 (yüksek stres)</td>
</tr>
<tr>
<td><strong>S26: Çalışma alanlarımın temizliği yeterlidir</strong></td>
<td class="stat-value">65,6</td>
<td>79,4</td>
<td class="highlight-critical">-13,8</td>
</tr>
<tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">86,8</td>
<td>70,4</td>
<td class="highlight-critical">+16,4 (yüksek stres)</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> İklim Değişikliği ve Sıfır Atık Müdürlüğü'nde personel işiyle uyumlu olduğunu düşünmekte (S1: %95,6, +4,7; S6: %91,7, +4,7) ve performans değerlendirme sistemini olumlu bulmaktadır (S38: %83,8, +3,2; S39: %79,4, +2,2). Ancak yüksek iş stresi/yükü dikkat çekmektedir - görev yükü (S9: %86,8, +16,4) ve zaman sıkışıklığı (S11: %77,9, +13,2) belediyenin en yüksek stres skorları arasındadır. Bu durum, yeni kurulan ve gelişmekte olan bir birimin artan iş yüküyle karşı karşıya olduğuna işaret edebilir. Fiziksel koşullar da sorun alanıdır: temizlik (S26: %65,6, -13,8), servis (S32: %55,8, -11,9) ve bireysel çalışma alanı (S28: %67,6, -11,6). Yüksek stres ile düşük fiziksel koşullar kombinasyonu, zorlanma göstergesi açısından izlenmesi gereken bir profil oluşturmaktadır.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>İklim Değişikliği ve Sıfır Atık Müdürlüğü'nden <strong>5 kişi (%21,7)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Personel ve Araç Yetersizliği (2 yorum - kritik):</strong></p>
<div class="quote">"Birimde yeni personele ihtiyacımız var acil."</div>
<div class="quote">"Acil bir şekilde araba, kamyonet ve iş arkadaşlarına ihtiyacımız var. Çok zorlanıyoruz."</div>

<p><strong>2. Fiziksel Çalışma Koşulları (2 yorum):</strong></p>
<div class="quote">"Yeterli dolap yok. Tuvalet kapılarının kilitleri komple yok. Oturacağımız oda yok, üstümüzü değiştirecek ne yerimiz ne de dolabımız var."</div>
<div class="quote">"Belediyemizin çalışma ve dinlenme alanları diğer birimler ile eşit değildir. Temizlik açısından çalıştığımız alan hijyenik değil."</div>

<p><strong>3. Sosyal Haklar ve Eğitim:</strong></p>
<div class="quote">"Sosyal hakların geliştirilmesi, personelin moral motivasyon artışı için geziler düzenlenmesi, maaşların personelin faydasına olacak şekilde düzenlenmesi, eğitim faaliyetlerinin artırılması belediyenin çalışanlarının verimliliğini artıracaktır."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlarda en belirgin tema <strong>personel ve araç yetersizliği</strong>dir. Bu bulgu, yüksek iş stresi/yükü (%78,7) ve özellikle S9 görev yükü (%86,8) skoru ile tutarlıdır. Fiziksel çalışma koşullarının yetersizliği (dolap, tuvalet, dinlenme alanı) de sık vurgulanan konulardandır.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>İklim Değişikliği (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">48,0</td>
<td>52,2</td>
<td class="highlight-positive">-4,2</td>
<td class="highlight-positive">Ortalamanın altında (olumlu)</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">54,4</td>
<td>56,1</td>
<td class="highlight-positive">-1,7</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">45,0</td>
<td>50,9</td>
<td class="highlight-positive">-5,9</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">43,3</td>
<td>50,8</td>
<td class="highlight-positive">-7,5</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">48,4</td>
<td>50,9</td>
<td class="highlight-positive">-2,5</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">70,6</td>
<td>44,9</td>
<td class="highlight-critical">+25,7</td>
<td class="highlight-critical">Çok yüksek</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> İklim Değişikliği ve Sıfır Atık Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının altındadır (olumlu). Özellikle gerginlik/kaygı (-7,5) ve üzgün hissetme (-5,9) göstergelerinde belirgin düşüklük dikkat çekicidir. Ancak sigara kullanımı (%70,6) belediye ortalamasının (%44,9) 25,7 puan üzerindedir - bu, belediyenin en yüksek sigara kullanım oranıdır ve yüksek iş stresi/yükü ile ilişkili olabilir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>İklim Değişikliği (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">82,4</td>
<td>81,0</td>
<td class="highlight-positive">+1,4</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">88,2</td>
<td>76,9</td>
<td class="highlight-positive">+11,3</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">35,3</td>
<td>31,1</td>
<td class="highlight-positive">+4,2</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">23,5</td>
<td>29,3</td>
<td class="highlight">-5,8</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">58,8</td>
<td>42,8</td>
<td class="highlight-positive">+16,0</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">52,9</td>
<td>39,6</td>
<td class="highlight-positive">+13,3</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">11,8</td>
<td>17,8</td>
<td class="highlight">-6,0</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">11,8</td>
<td>17,6</td>
<td class="highlight">-5,8</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> İklim Değişikliği ve Sıfır Atık Müdürlüğü, Instagram ve Facebook platformlarında belediye ortalamasının üzerinde takip oranlarına sahipken, NextSosyal ve Twitter/X Başkan hesaplarında ortalamanın altında kalmaktadır. Facebook takibi (+16,0 ve +13,3) özellikle güçlüdür.</p>

<!-- ==================== #112 - İMAR VE ŞEHİRCİLİK MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "hukuk_isleri": {
            name: "Hukuk İşleri Müdürlüğü",
            html: `<h1>Hukuk İşleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Hukuk İşleri Müdürlüğü, güçlü yönetici ilişkileri ve ekip dayanışmasına sahip olmakla birlikte, anket sonuçlarına göre personel çalışma koşullarını ve genel memnuniyetini düşük bulmaktadır. Özellikle yemek ücreti eşitliğinin sağlanması, eğitim imkanlarının artırılması ve fiziksel çalışma koşullarının iyileştirilmesi izlenmesi gereken alanlar olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">12/12 kişi (%100)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+29,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%84,1</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-warning">-6,7</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%69,3</td>
            <td class="avg">%69,1</td>
            <td class="diff">+0,2</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%80,4</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">-1,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+11,1</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-2,1</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%55,0</td>
            <td class="avg">%52,2</td>
            <td class="diff">+2,8 (olumsuz)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%54,5</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-critical">+9,6 ↑</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">4 kişi (%30,8)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yöneticilerle ilişkiler (%93,6):</strong> Belediye ortalamasının 6,8 puan üzerinde. Amir desteği (%95,5) ve amir saygısı (%95,5) çok yüksek.</li>
<li><strong>Çalışma arkadaşları (%90,0):</strong> Belediye ortalamasının 3,1 puan üzerinde. Bilgi paylaşımı (%93,2) güçlü.</li>
<li><strong>İş-kişi uyumu (%88,6):</strong> Belediye ortalamasının 2,7 puan altında olmakla birlikte, işi anlamlı bulma (%93,2) yüksek.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çalışma koşulları (%64,8):</strong> Belediye ortalamasının 7,4 puan altında. Yemekhane (%45,5), servis (%52,5), ücret (%52,3) ve ortak alanlar (%61,4) düşük.</li>
<li><strong>Eğitim & Gelişim (%68,2):</strong> Belediye ortalamasının 7,6 puan altında. Eğitimlerin katkısı (%65,9) düşük.</li>
<li><strong>Genel memnuniyet (%84,1):</strong> Belediye ortalamasının 6,7 puan altında - dikkat çekici düşüklük.</li>
<li><strong>Kamu hizmeti motivasyonu (%87,1):</strong> Belediye ortalamasının 5,7 puan altında. Kamu kurumlarını tavsiye (%81,8) düşük.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yemek ücreti eşitsizliği:</strong> Açık uçlu yorumlarda en sık tekrar eden tema "memur, işçi ve KHK'lı personel arasındaki yemek ücreti farkı"dır.</li>
<li><strong>Düşük memnuniyet - güçlü yönetici ilişkileri paradoksu:</strong> Yöneticilerle ilişkiler çok güçlü (%93,6) iken genel memnuniyet düşük (%84,1) - sorun yönetici kaynaklı değil, çalışma koşulları ve ücret kaynaklı olabilir.</li>
<li><strong>Ruh sağlığı göstergeleri yüksek:</strong> Gerginlik/kaygı (%57,5) ve endişe kontrolü (%56,8) belediye ortalamasının üzerinde.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Hukuk İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">88,6</td>
<td class="stat-value">91,3</td>
<td class="highlight">-2,7</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">86,9</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+0,3</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">69,3</td>
<td class="stat-value">69,1</td>
<td>+0,2</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">93,6</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+6,8</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">90,0</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+3,1</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">76,1</td>
<td class="stat-value">79,8</td>
<td class="highlight">-3,7</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">64,8</td>
<td class="stat-value">72,2</td>
<td class="highlight-warning">-7,4</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">87,1</td>
<td class="stat-value">92,8</td>
<td class="highlight-warning">-5,7</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">73,8</td>
<td class="stat-value">77,2</td>
<td class="highlight">-3,4</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">68,2</td>
<td class="stat-value">75,8</td>
<td class="highlight-warning">-7,6</td>
<td class="highlight-critical">Düşük</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Hukuk İşleri Müdürlüğü, 10 temadan sadece 3'ünde (yöneticilerle ilişkiler, çalışma arkadaşları, görev-rol netliği) belediye ortalamasının üzerinde veya eşit performans göstermektedir. En düşük skorlu alanlar eğitim & gelişim (-7,6), çalışma koşulları (-7,4) ve kamu hizmeti motivasyonu (-5,7) olarak öne çıkmaktadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Hukuk İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S16: Amirim çalışanlara eşit yaklaşır</strong></td>
<td class="stat-value">93,2</td>
<td>82,8</td>
<td class="highlight-positive">+10,4</td>
</tr>
<tr>
<td><strong>S14: Amirim destek olmak için çaba gösterir</strong></td>
<td class="stat-value">95,5</td>
<td>86,7</td>
<td class="highlight-positive">+8,8</td>
</tr>
<tr>
<td><strong>S15: Kararlara katılma ve fikrimi söyleme fırsatı</strong></td>
<td class="stat-value">90,9</td>
<td>82,5</td>
<td class="highlight-positive">+8,4</td>
</tr>
<tr>
<td><strong>S20: Bilgi ve deneyim paylaşımı yaygındır</strong></td>
<td class="stat-value">93,2</td>
<td>85,4</td>
<td class="highlight-positive">+7,8</td>
</tr>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">63,6</td>
<td>70,6</td>
<td class="highlight-positive">-7,0 (düşük stres)</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Hukuk İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S43: Eğitimler mesleki gelişimime katkı sağlar</strong></td>
<td class="stat-value">65,9</td>
<td>76,8</td>
<td class="highlight-critical">-10,9</td>
</tr>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">45,5</td>
<td>57,2</td>
<td class="highlight-critical">-11,7</td>
</tr>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">61,4</td>
<td>74,1</td>
<td class="highlight-critical">-12,7</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">52,5</td>
<td>67,7</td>
<td class="highlight-critical">-15,2</td>
</tr>
<tr>
<td><strong>S34: Ücretler piyasa koşullarına göre makul</strong></td>
<td class="stat-value">52,3</td>
<td>69,0</td>
<td class="highlight-critical">-16,7</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Hukuk İşleri Müdürlüğü'nde güçlü yönetici ilişkileri ile zayıf kurumsal kaynaklar arasında belirgin bir ayrışma görülmektedir. Amir eşitliği (S16: %93,2, +10,4), amir desteği (S14: %95,5, +8,8) ve kararlara katılma fırsatı (S15: %90,9, +8,4) belediyenin en yüksek skorları arasındadır. Öte yandan ücret memnuniyeti (S34: %52,3, -16,7), servis (S32: %52,5, -15,2), ısıtma/soğutma (S27: %61,4, -12,7) ve yemekhane (S30: %45,5, -11,7) belediyenin en düşük skorları arasındadır. Bu tablo, personelin doğrudan yöneticisiyle ilişkisinden çok memnun olduğu ancak kurumsal destek hizmetlerinden (ücret, ulaşım, yemek, fiziksel koşullar) memnun olmadığı şeklinde yorumlanabilir. Eğitim katkısının düşük skoru (S43: %65,9, -10,9), hukuk gibi uzmanlık gerektiren bir alanda kariyer gelişimi ihtiyacına işaret etmektedir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Hukuk İşleri Müdürlüğü'nden <strong>4 kişi (%30,8)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Yemek Ücreti Eşitsizliği (2 yorum - en sık):</strong></p>
<div class="quote">"Memur ve işçi ve KHK'lı personelin yemek ücretleri konusunda daha özverili, daha birbirine yakın ücretler olmasını tavsiye ederim."</div>
<div class="quote">"Yemek kalitesinin iyi olmadığını düşünüyorum. Yemek ücretlerinde şirket personeli ile memur personel arası fark daha uygun hale getirilerek daha ulaşılabilir olması gerektiğini düşünüyorum."</div>

<p><strong>2. Servis Yetersizliği:</strong></p>
<div class="quote">"Servis hizmetinin tasarruf tedbirleri kapsamında ilçe içi hizmet vermesi, ilçe dışından gelenleri olumsuz etkilemektedir."</div>

<p><strong>3. Ortak Alanlar:</strong></p>
<div class="quote">"Dinlenme, etkinlik odası gibi yerler yetersizdir."</div>

<p><strong>4. Çay Ocağı Hizmeti:</strong></p>
<div class="quote">"Çay ocağı görevlilerine ulaşım, görevlilerin personel ile saygılı ve seviyeli iletişimde bulunmaları konularında uyarıda bulunulması faydalı olabilir."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlarda en belirgin tema <strong>yemek ücreti eşitsizliği</strong>dir - memur, işçi ve şirket personeli arasındaki fark eleştirilmektedir. Bu bulgu, S30 yemekhane skoru (%45,5) ve S34 ücret skoru (%52,3) ile tutarlıdır.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Hukuk İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">55,0</td>
<td>52,2</td>
<td class="highlight">+2,8</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">52,5</td>
<td>56,1</td>
<td class="highlight-positive">-3,6</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">52,8</td>
<td>50,9</td>
<td>+1,9</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">57,5</td>
<td>50,8</td>
<td class="highlight-critical">+6,7</td>
<td class="highlight-critical">Yüksek</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">56,8</td>
<td>50,9</td>
<td class="highlight">+5,9</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">54,5</td>
<td>44,9</td>
<td class="highlight">+9,6</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Hukuk İşleri Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının üzerindedir (olumsuz). Özellikle gerginlik/kaygı (+6,7) ve endişe kontrolü (+5,9) göstergelerinde belirgin yükseklik dikkat çekicidir. Hukuk işlerinin doğası gereği dava süreçleri ve yasal sorumlulukların yarattığı baskı bu duruma katkıda bulunuyor olabilir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Hukuk İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">90,9</td>
<td>81,0</td>
<td class="highlight-positive">+9,9</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">90,9</td>
<td>76,9</td>
<td class="highlight-positive">+14,0</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">54,5</td>
<td>31,1</td>
<td class="highlight-positive">+23,4</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">54,5</td>
<td>29,3</td>
<td class="highlight-positive">+25,2</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">45,5</td>
<td>42,8</td>
<td class="highlight-positive">+2,7</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">45,5</td>
<td>39,6</td>
<td class="highlight-positive">+5,9</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">18,2</td>
<td>17,8</td>
<td class="highlight-positive">+0,4</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">18,2</td>
<td>17,6</td>
<td class="highlight-positive">+0,6</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Hukuk İşleri Müdürlüğü, tüm sosyal medya platformlarında belediye ortalamasının üzerinde takip oranlarına sahiptir. Özellikle Instagram (+14,0) ve Twitter/X (+25,2) takibi yüksektir.</p>

<!-- ==================== #111 - İKLİM DEĞİŞİKLİĞİ VE SIFIR ATIK MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "mali_hizmetler": {
            name: "Mali Hizmetler Müdürlüğü",
            html: `<h1>Mali Hizmetler Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Mali Hizmetler Müdürlüğü, güçlü yönetici ilişkileri ve ekip dayanışması ile güçlü bir çalışma ortamı sunmaktadır. Küçük ekip yapısı (9 kişi) yoğun görev yükü (%80,6) oluştursa da, güçlü stres-destek dengesi (+19,9) ile bu yük karşılanmaktadır. Çalışan ebeveynler için çocuk bakım/etüt hizmeti değerlendirilebilir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">9/9 kişi (%100)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+29,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%86,1</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight">-4,7</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%65,3</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-3,8</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%85,2</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+2,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+19,9</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+6,7</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%54,2</td>
            <td class="avg">%52,2</td>
            <td class="diff">+2,0</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%22,2</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-22,7 ↓↓↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">3 kişi (%33,3)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yöneticilerle ilişkiler (%93,5):</strong> Belediye ortalamasının 6,7 puan üzerinde. Amir saygısı (%100), amir eşitliği (%97,2), amir ulaşılabilirliği (%97,2) güçlü.</li>
<li><strong>Çalışma arkadaşları (%93,9):</strong> Belediye ortalamasının 7,0 puan üzerinde - belediyenin en yüksek skorlarından. Ekip dayanışması, bilgi paylaşımı, anlaşmazlık çözümü tümü %94,4.</li>
<li><strong>Kamu hizmeti motivasyonu (%95,4):</strong> Belediye ortalamasının 2,6 puan üzerinde. Topluma hizmet gururu (%100) tam puan.</li>
<li><strong>Çok düşük sigara kullanımı (%22,2):</strong> Belediye ortalamasının 22,7 puan altında - belediyenin en düşük oranı.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yemekhane (%53,6):</strong> Belediye ortalamasının 3,6 puan altında.</li>
<li><strong>Servis hizmeti (%64,3):</strong> Belediye ortalamasının 3,4 puan altında.</li>
<li><strong>Isıtma/soğutma (%69,4):</strong> Belediye ortalamasının 4,7 puan altında.</li>
<li><strong>Performans değerlendirme kriterleri netliği (%72,2):</strong> Belediye ortalamasının 8,4 puan altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>İş-yaşam dengesi talebi:</strong> 3 yorumun 2'si çocuklar için etüt/dinlenme alanı talebiyle ilgili - çalışan ebeveynlerin iş-yaşam dengesi ihtiyacına işaret.</li>
<li><strong>Görev yükü yüksek (%80,6):</strong> Belediye ortalamasının 10,2 puan üzerinde - küçük ekip yoğun çalışıyor.</li>
<li><strong>Vatandaş yoğunluğu düşük (%50,0):</strong> Belediye ortalamasının 20,6 puan altında - back-office birim olması nedeniyle beklenen.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Mali Hizmetler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">94,2</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+2,9</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">88,9</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+2,3</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">65,3</td>
<td class="stat-value">69,1</td>
<td class="highlight">-3,8</td>
<td class="highlight-positive">Ortalamanın altında (olumlu)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">93,5</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+6,7</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">93,9</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+7,0</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">87,5</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+7,7</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">72,7</td>
<td class="stat-value">72,2</td>
<td class="highlight-positive">+0,5</td>
<td class="highlight-positive">Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">95,4</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+2,6</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">73,6</td>
<td class="stat-value">77,2</td>
<td class="highlight">-3,6</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">77,8</td>
<td class="stat-value">75,8</td>
<td class="highlight-positive">+2,0</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Mali Hizmetler Müdürlüğü, 10 temadan 9'unda belediye ortalamasının üzerinde veya eşit performans göstermektedir. Çalışma arkadaşları (+7,0), kurum içi iletişim (+7,7) ve yöneticilerle ilişkiler (+6,7) özellikle güçlüdür. Sadece yetkinlik & performans (-3,6) ortalamanın altındadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Mali Hizmetler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">50,0</td>
<td>70,6</td>
<td class="highlight-positive">-20,6 (düşük stres)</td>
</tr>
<tr>
<td><strong>S16: Amirim çalışanlara eşit yaklaşır</strong></td>
<td class="stat-value">97,2</td>
<td>82,8</td>
<td class="highlight-positive">+14,4</td>
</tr>
<tr>
<td><strong>S17: Amirim bana karşı saygılıdır</strong></td>
<td class="stat-value">100,0</td>
<td>89,9</td>
<td class="highlight-positive">+5,5</td>
</tr>
<tr>
<td><strong>S22: Anlaşmazlıkları iş arkadaşlarımızla kendi aramızda çözeriz</strong></td>
<td class="stat-value">94,4</td>
<td>84,7</td>
<td class="highlight-positive">+9,7</td>
</tr>
<tr>
<td><strong>S20: Bilgi ve deneyim paylaşımı yaygındır</strong></td>
<td class="stat-value">94,4</td>
<td>85,4</td>
<td class="highlight-positive">+9,0</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Mali Hizmetler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">69,4</td>
<td>74,1</td>
<td class="">-4,7</td>
</tr>
<tr>
<td><strong>S25: Bu kurumda çalışmaktan memnunum</strong></td>
<td class="stat-value">86,1</td>
<td>90,8</td>
<td class="">-4,7</td>
</tr>
<tr>
<td><strong>S41: Değerlendirme sonrasında yapıcı geri bildirim alırım</strong></td>
<td class="stat-value">69,4</td>
<td>74,2</td>
<td class="">-4,8</td>
</tr>
<tr>
<td><strong>S38: Performans değerlendirme kriterleri nettir</strong></td>
<td class="stat-value">72,2</td>
<td>80,6</td>
<td class="highlight-critical">-8,4</td>
</tr>
<tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">80,6</td>
<td>70,4</td>
<td class="highlight-critical">+10,2 (yüksek stres)</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Mali Hizmetler Müdürlüğü'nde yönetici ilişkileri belediyenin en güçlü skorlarına sahiptir: amir eşitliği (S16: %97,2, +14,4) ve amir saygısı (S17: %100,0, +10,1 - tam puan). Ekip uyumu da güçlüdür (S22: %94,4, +9,7; S20: %94,4, +9,0). Ancak görev yükü stresi yüksektir (S9: %80,6, +10,2), bu durum mali işlemlerin yoğunluğuyla tutarlıdır. Performans değerlendirme kriterleri netliği (S38: %72,2, -8,4) düşük olması dikkat çekicidir - personel güçlü yönetici ilişkisine rağmen değerlendirme sistemini yeterli bulmamaktadır. Kurumda çalışma memnuniyeti (S25: %86,1, -4,7) belediye ortalamasının altında kalması, iş yükü baskısının genel memnuniyeti olumsuz etkilediğine işaret edebilir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Mali Hizmetler Müdürlüğü'nden <strong>3 kişi (%33,3)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Çocuk Bakım/Etüt Hizmeti Talebi (2 yorum - baskın tema):</strong></p>
<div class="quote">"İlkokul çağındaki çocuklarımız için bekleme, dinlenme, etüt merkezi gibi dinlenme alanı tahsis edilmesi."</div>
<div class="quote">"Çalışan personelin ilkokul çağındaki çocuklarının okul sonrası zaman için etüt alanı etkinlik alanı hizmetinin sağlanması."</div>

<p><strong>2. Sağlık Hizmeti Talebi (1 yorum):</strong></p>
<div class="quote">"Taşoluk merkez binada diyetisyen olmasını talep ediyorum."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlarda <strong>iş-yaşam dengesi</strong> talebi öne çıkmaktadır. İlkokul çağı çocuklar için etüt/dinlenme alanı talebi, çalışan ebeveynlerin okul sonrası saatlerde çocuk bakımı ihtiyacını yansıtmaktadır. Bu, belediye genelinde değerlendirilebilecek bir sosyal hizmet önerisidir.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Mali Hizmetler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">54,2</td>
<td>52,2</td>
<td>+2,0</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">58,3</td>
<td>56,1</td>
<td>+2,2</td>
<td>Ortalamanın hafif üzerinde</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">55,6</td>
<td>50,9</td>
<td>+4,7</td>
<td>Ortalamanın hafif üzerinde</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">52,8</td>
<td>50,8</td>
<td>+2,0</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">50,0</td>
<td>50,9</td>
<td class="highlight-positive">-0,9</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">22,2</td>
<td>44,9</td>
<td class="highlight-positive">-22,7</td>
<td class="highlight-positive">Çok düşük (olumlu)</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Mali Hizmetler Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasına yakın düzeydedir. Güçlü yönetici ilişkilerine rağmen ruh sağlığı riskinin ortalama düzeyde olması, küçük örneklem büyüklüğünden (9 kişi) kaynaklanıyor olabilir. Sigara kullanımı (%22,2) belediyenin en düşük oranıdır - sağlıklı yaşam bilinci yüksektir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Mali Hizmetler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">88,9</td>
<td>81,0</td>
<td class="highlight-positive">+7,9</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">88,9</td>
<td>76,9</td>
<td class="highlight-positive">+12,0</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">0,0</td>
<td>31,1</td>
<td class="highlight-critical">-31,1</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">11,1</td>
<td>29,3</td>
<td class="highlight-critical">-18,2</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">33,3</td>
<td>42,8</td>
<td class="highlight">-9,5</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">22,2</td>
<td>39,6</td>
<td class="highlight-critical">-17,4</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">0,0</td>
<td>17,8</td>
<td class="highlight-critical">-17,8</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">0,0</td>
<td>17,6</td>
<td class="highlight-critical">-17,6</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Mali Hizmetler Müdürlüğü, Instagram'da belediye ortalamasının üzerinde (+7,9 ve +12,0) takip oranlarına sahipken, Twitter/X (%0 ve %11,1) ve NextSosyal (%0) platformlarında çok düşük veya sıfır takip görülmektedir. Sosyal medya çeşitliliğinin artırılması önerilir.</p>

<!-- ==================== #119 - MUHTARLIK İŞLERİ MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "koordinasyon": {
            name: "Koordinasyon İşleri Müdürlüğü",
            html: `<h1>Koordinasyon İşleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Koordinasyon İşleri Müdürlüğü, belediyenin en güçlü yönetici ve ekip ilişkilerine sahip birimidir. Güçlü sosyal ortam ve çok düşük iş stresi/yükü ile JD-R modeli açısından ideal profil sergilemektedir. Düşük memnuniyetin kaynağı ücret, servis ve yemekhane gibi maddi koşullardır - bunların iyileştirilmesi memnuniyeti artırabilir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">7/7 kişi (%100)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+46,3</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%85,7</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-warning">-5,1</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%51,8</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-17,3 ↓↓</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%86,2</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+3,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+34,4</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-positive">+21,2</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%46,2</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-6,0 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%71,4</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-critical">+26,5 ↑↑</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">3 kişi (%37,5)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<p style="font-size:9pt; color:#666;">* Katılım oranının %100'ü aşması, muhtemelen geçici personelin de ankete katılmasından kaynaklanmaktadır.</p>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yöneticilerle ilişkiler (%98,2):</strong> Belediye ortalamasının 11,4 puan üzerinde - belediyenin en yüksek skoru. S12, S13, S14, S17 sorularında %100 tam puan.</li>
<li><strong>Çalışma arkadaşları (%97,9):</strong> Belediye ortalamasının 11,0 puan üzerinde - belediyenin en yüksek skoru. S19, S20, S21 sorularında %100 tam puan.</li>
<li><strong>Çok düşük iş stresi/yükü (%51,8):</strong> Belediye ortalamasının 17,3 puan altında. Vatandaş yoğunluğu (%35,7, -34,9) çok düşük.</li>
<li><strong>Görev-rol netliği (%93,8):</strong> Belediye ortalamasının 7,2 puan üzerinde. S4, S5 sorularında %96,4.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Ücret (%53,6):</strong> Belediye ortalamasının 15,4 puan altında - müdürlüğün en düşük skoru.</li>
<li><strong>Servis hizmeti (%53,6):</strong> Belediye ortalamasının 14,1 puan altında. Açık uçlu yorumlarda servis iyileştirmesi talebi.</li>
<li><strong>Yemekhane (%53,6):</strong> Belediye ortalamasının 3,6 puan altında.</li>
<li><strong>Kamu hizmeti motivasyonu (%86,9):</strong> Belediye ortalamasının 5,9 puan altında. Kamu tavsiyesi (%82,1, -8,6) düşük.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Güçlü ilişkiler - düşük memnuniyet paradoksu:</strong> Yönetici (%98,2) ve çalışma arkadaşları (%97,9) ilişkileri güçlü, iş stresi/yükü çok düşük (%51,8), ama memnuniyet ortalamanın altında (%85,7). Sorun çalışma koşulları (ücret, servis) kaynaklı.</li>
<li><strong>Çok yüksek sigara kullanımı (%71,4):</strong> Belediye ortalamasının 26,5 puan üzerinde - İklim Değişikliği Müdürlüğü (%70,6) ile birlikte belediyenin en yüksek oranlarından.</li>
<li><strong>%100 sosyal medya takibi:</strong> Instagram Belediye ve Başkan hesaplarında tam takip oranı.</li>
<li><strong>Küçük örneklem (n=7):</strong> Sonuçlar temkinle değerlendirilmelidir.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Koordinasyon (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">89,3</td>
<td class="stat-value">91,3</td>
<td>-2,0</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">93,8</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+7,2</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">51,8</td>
<td class="stat-value">69,1</td>
<td class="highlight-positive">-17,3</td>
<td class="highlight-positive">Çok düşük (olumlu)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">98,2</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+11,4</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">97,9</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+11,0</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">89,3</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+9,5</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">69,0</td>
<td class="stat-value">72,2</td>
<td class="highlight">-3,2</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">86,9</td>
<td class="stat-value">92,8</td>
<td class="highlight-warning">-5,9</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">86,1</td>
<td class="stat-value">77,2</td>
<td class="highlight-positive">+8,9</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">75,0</td>
<td class="stat-value">75,8</td>
<td>-0,8</td>
<td>Ortalama düzeyde</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Koordinasyon İşleri Müdürlüğü, 10 temadan 6'sında belediye ortalamasının üzerinde performans göstermektedir. Yöneticilerle ilişkiler (+11,4), çalışma arkadaşları (+11,0), kurum içi iletişim (+9,5) ve yetkinlik & performans (+8,9) özellikle güçlüdür. Kamu hizmeti motivasyonu (-5,9) ve çalışma koşulları (-3,2) geliştirilmesi gereken alanlardır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Koordinasyon (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">35,7</td>
<td>70,6</td>
<td class="highlight-positive">-34,9 (düşük stres)</td>
</tr>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">46,4</td>
<td>70,8</td>
<td class="highlight-positive">-24,4 (düşük stres)</td>
</tr>
<tr>
<td><strong>S20: Bilgi ve deneyim paylaşımı yaygındır</strong></td>
<td class="stat-value">100,0</td>
<td>85,4</td>
<td class="highlight-positive">+14,6</td>
</tr>
<tr>
<td><strong>S21: İş arkadaşlarımın desteği işimi kolaylaştırır</strong></td>
<td class="stat-value">100,0</td>
<td>85,6</td>
<td class="highlight-positive">+14,4</td>
</tr>
<tr>
<td><strong>S23: Öneri ve şikayetlerimle ilgili geri bildirim alırım</strong></td>
<td class="stat-value">92,9</td>
<td>79,2</td>
<td class="highlight-positive">+13,7</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Koordinasyon (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S43: Eğitimler mesleki gelişimime katkı sağlar</strong></td>
<td class="stat-value">71,4</td>
<td>76,8</td>
<td class="highlight">-5,4</td>
</tr>
<tr>
<td><strong>S37: İşimin toplum için anlamlı/faydalı olduğunu düşünüyorum</strong></td>
<td class="stat-value">85,7</td>
<td>93,2</td>
<td class="highlight">-7,5</td>
</tr>
<tr>
<td><strong>S36: Kamu kurumlarında çalışmayı tavsiye ederim</strong></td>
<td class="stat-value">82,1</td>
<td>90,7</td>
<td class="highlight-critical">-8,6</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">53,6</td>
<td>67,7</td>
<td class="highlight-critical">-14,1</td>
</tr>
<tr>
<td><strong>S34: Ücretler piyasa koşullarına göre makul</strong></td>
<td class="stat-value">53,6</td>
<td>69,0</td>
<td class="highlight-critical">-15,4</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Koordinasyon İşleri Müdürlüğü, belediyenin en düşük vatandaş yoğunluğu stresine (S10: %35,7, -34,9) sahip birimidir - bu durum birimin doğrudan vatandaş hizmeti vermemesiyle tutarlıdır. Ekip uyumu güçlüdir: bilgi paylaşımı (S20: %100,0, +14,6) ve iş arkadaşı desteği (S21: %100,0, +14,4) tam puan almıştır. Ancak kamu hizmeti motivasyonu düşüktür: kamu kurumlarını tavsiye (S36: %82,1, -8,6) ve işin toplum için faydalılığı (S37: %85,7, -7,5). Ücret memnuniyeti (S34: %53,6, -15,4) ve servis hizmeti (S32: %53,6, -14,1) belediyenin en düşük skorları arasındadır. Bu tablo, personelin kendi aralarında çok iyi çalıştığı ancak kurumsal kaynaklardan ve işin toplumsal katkısından memnun olmadığı şeklinde yorumlanabilir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Koordinasyon İşleri Müdürlüğü'nden <strong>3 kişi (%37,5)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Servis İyileştirmesi (1 yorum - detaylı):</strong></p>
<div class="quote">"Servislerin iyileştirilmesi hususunda çalışma yapılabilir. Belediyemizde ilçe dışında çalışan birçok personel mevcut. Ulaşım konusunda zorluklar çekiliyor. Servislerin eski haline gelmesini öneriyorum. Servislerin eski haline gelmesi, personelin yolda geçirdiği zamanda daha verimli olmasını sağlayacaktır."</div>

<p><strong>2. Çay/Kahve Servisi (2 yorum):</strong></p>
<div class="quote">"Personele belli aralıklarda çay ve kahve ikramı olmalı."</div>
<div class="quote">"Çay servisi yapılabilir."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorumlarda <strong>servis iyileştirmesi</strong> detaylı şekilde ele alınmıştır. Bu bulgu, S32 servis skoru (%53,6, -14,1) ile tutarlıdır. İlçe dışından gelen personel için ulaşım zorluğu vurgulanmıştır. Çay/kahve servisi talebi de sosyal imkan beklentisini yansıtmaktadır.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Koordinasyon (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">46,2</td>
<td>52,2</td>
<td class="highlight-positive">-6,0</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">53,6</td>
<td>56,1</td>
<td class="highlight-positive">-2,5</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">46,4</td>
<td>50,9</td>
<td class="highlight-positive">-4,5</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">45,8</td>
<td>50,8</td>
<td class="highlight-positive">-5,0</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">37,5</td>
<td>50,9</td>
<td class="highlight-positive">-13,4</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">71,4</td>
<td>44,9</td>
<td class="highlight-critical">+26,5</td>
<td class="highlight-critical">Çok yüksek</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Koordinasyon İşleri Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının altındadır (olumlu). Özellikle endişe kontrolü (-13,4) göstergesinde belirgin düşüklük dikkat çekicidir - düşük iş stresi/yükü (%51,8) ile tutarlıdır. Ancak sigara kullanımı (%71,4) belediye ortalamasının 26,5 puan üzerindedir - bu, belediyenin en yüksek sigara kullanım oranlarından biridir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Koordinasyon (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">100,0</td>
<td>81,0</td>
<td class="highlight-positive">+19,0</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">100,0</td>
<td>76,9</td>
<td class="highlight-positive">+23,1</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">71,4</td>
<td>31,1</td>
<td class="highlight-positive">+40,3</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">71,4</td>
<td>29,3</td>
<td class="highlight-positive">+42,1</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">42,9</td>
<td>42,8</td>
<td class="highlight-positive">+0,1</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">28,6</td>
<td>39,6</td>
<td class="highlight">-11,0</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">57,1</td>
<td>17,8</td>
<td class="highlight-positive">+39,3</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">42,9</td>
<td>17,6</td>
<td class="highlight-positive">+25,3</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Koordinasyon İşleri Müdürlüğü, sosyal medya takibinde belediyenin en aktif birimlerinden biridir. Instagram'da %100 takip oranı, Twitter/X'te +40 puan üzerinde fark, NextSosyal'de +25-39 puan fark görülmektedir. Yalnızca Facebook Başkan hesabında ortalamanın altında (-11,0) takip bulunmaktadır.</p>

<!-- ==================== #117 - KÜLTÜR İŞLERİ MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "insan_kaynaklari": {
            name: "İnsan Kaynakları ve Eğitim Müdürlüğü",
            html: `<h1>İnsan Kaynakları ve Eğitim Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> İnsan Kaynakları ve Eğitim Müdürlüğü, düşük iş stresi/yükü ve güçlü stres-destek dengesi (+24,5) ile rahat bir çalışma ortamına sahiptir. Yönetici ilişkileri güçlü düzeydedir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">13/13 kişi (%100)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+29,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%80,8</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-critical">-10,0</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%53,9</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-15,2 ↓↓</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%78,4</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight">-3,9</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+24,5</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+11,3</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%48,1</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-4,1 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%30,8</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-14,1 ↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">3 kişi (%23,1)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çok düşük iş stresi/yükü (%53,9):</strong> Belediye ortalamasının 15,2 puan altında - belediyenin en düşük stresli birimi. Vatandaş yoğunluğu (%46,2) ve duygusal zorlayıcılık (%47,9) çok düşük.</li>
<li><strong>Yöneticilerle ilişkiler (%90,1):</strong> Belediye ortalamasının 3,3 puan üzerinde. Amir ulaşılabilirliği (%94,2) ve amir saygısı (%94,2) çok yüksek.</li>
<li><strong>Düşük sigara kullanımı (%30,8):</strong> Belediye ortalamasının 14,1 puan altında.</li>
<li><strong>Güçlü stres-destek dengesi (+24,5):</strong> Belediye ortalamasının 11,3 puan üzerinde.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>İş-kişi uyumu:</strong> Belediye ortalamasının altında.</li>
<li><strong>Kamu hizmeti motivasyonu:</strong> Belediye ortalamasının altında.</li>
<li><strong>Çalışma koşulları:</strong> Ortak alanlar ve yemekhane iyileştirilebilir.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>İnsan Kaynakları (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">79,5</td>
<td class="stat-value">91,3</td>
<td class="highlight-critical">-11,8</td>
<td class="highlight-critical">Çok düşük</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">85,6</td>
<td class="stat-value">86,6</td>
<td>-1,0</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">53,9</td>
<td class="stat-value">69,1</td>
<td class="highlight-positive">-15,2</td>
<td class="highlight-positive">Çok düşük (olumlu)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">90,1</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+3,3</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">83,8</td>
<td class="stat-value">86,9</td>
<td class="highlight">-3,1</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">75,0</td>
<td class="stat-value">79,8</td>
<td class="highlight">-4,8</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">67,3</td>
<td class="stat-value">72,2</td>
<td class="highlight">-4,9</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">83,3</td>
<td class="stat-value">92,8</td>
<td class="highlight-critical">-9,5</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">71,6</td>
<td class="stat-value">77,2</td>
<td class="highlight-warning">-5,6</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">74,0</td>
<td class="stat-value">75,8</td>
<td>-1,8</td>
<td>Ortalama düzeyde</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> İnsan Kaynakları ve Eğitim Müdürlüğü, 10 temadan sadece 2'sinde (yöneticilerle ilişkiler ve iş stresi/yükü) belediye ortalamasının üzerinde performans göstermektedir. En kritik alanlar iş-kişi uyumu (-11,8) ve kamu hizmeti motivasyonu (-9,5) olup, bu iki alan düşük memnuniyetin temel kaynağıdır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>İnsan Kaynakları (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">46,2</td>
<td>70,6</td>
<td class="highlight-positive">-24,4 (düşük stres)</td>
</tr>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">47,9</td>
<td>70,8</td>
<td class="highlight-positive">-22,9 (düşük stres)</td>
</tr>
<tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">61,5</td>
<td>70,4</td>
<td class="highlight-positive">-8,9 (düşük stres)</td>
</tr>
<tr>
<td><strong>S34: Ücretler piyasa koşullarına göre makul</strong></td>
<td class="stat-value">75,0</td>
<td>69,0</td>
<td class="highlight-positive">+6,0</td>
</tr>
<tr>
<td><strong>S14: Amirim destek olmak için çaba gösterir</strong></td>
<td class="stat-value">92,3</td>
<td>86,7</td>
<td class="highlight-positive">+5,6</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>İnsan Kaynakları (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S26: Çalışma alanlarımın temizliği yeterlidir</strong></td>
<td class="stat-value">67,3</td>
<td>79,4</td>
<td class="highlight-critical">-12,1</td>
</tr>
<tr>
<td><strong>S37: İşimin toplum için anlamlı/faydalı olduğunu düşünüyorum</strong></td>
<td class="stat-value">80,8</td>
<td>93,2</td>
<td class="highlight-critical">-12,4</td>
</tr>
<tr>
<td><strong>S29: Ortak alanlar yeterlidir</strong></td>
<td class="stat-value">57,7</td>
<td>70,4</td>
<td class="highlight-critical">-12,7</td>
</tr>
<tr>
<td><strong>S36: Kamu kurumlarında çalışmayı tavsiye ederim</strong></td>
<td class="stat-value">76,9</td>
<td>90,7</td>
<td class="highlight-critical">-13,8</td>
</tr>
<tr>
<td><strong>S2: Bu işi seçtiğim için mutluyum</strong></td>
<td class="stat-value">71,2</td>
<td>90,7</td>
<td class="highlight-critical">-19,5</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> İnsan Kaynakları ve Eğitim Müdürlüğü, belediyenin en düşük iş stresi/yüküne sahip birimidir (%53,8). Vatandaş yoğunluğu (S10: %46,2, -24,4) ve duygusal zorlayıcılık (S8: %47,9, -22,9) skorları belediyenin en düşükleri arasındadır - bu durum birimin doğrudan vatandaş hizmeti vermemesiyle tutarlıdır. Ancak dikkat çekici bir bulgu, düşük strese rağmen "işi seçtiğim için mutluyum" skorunun (S2: %71,2, -19,5) belediyenin en düşükleri arasında olmasıdır. Kamu hizmeti motivasyonu da düşüktür (S36: %76,9, -13,8; S37: %80,8, -12,4). Bu tablo, personelin rahat bir çalışma ortamına sahip olmasına rağmen işinden tatmin olmadığına işaret etmektedir. Fiziksel koşullar da sorunludur: ortak alanlar (S29: %57,7, -12,7) ve temizlik (S26: %67,3, -12,1) düşük skorludur.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>



<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Yemek Kalitesi (1 yorum):</strong></p>
<div class="quote">"Genel olarak yemek kalitesinin daha iyi olmasını talep ediyorum."</div>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>İnsan Kaynakları (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">48,1</td>
<td>52,2</td>
<td class="highlight-positive">-4,1</td>
<td class="highlight-positive">Ortalamanın altında (olumlu)</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">53,8</td>
<td>56,1</td>
<td class="highlight-positive">-2,3</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">42,3</td>
<td>50,9</td>
<td class="highlight-positive">-8,6</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">48,1</td>
<td>50,8</td>
<td class="highlight-positive">-2,7</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">48,1</td>
<td>50,9</td>
<td class="highlight-positive">-2,8</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">30,8</td>
<td>44,9</td>
<td class="highlight-positive">-14,1</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> İnsan Kaynakları ve Eğitim Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının altındadır (olumlu). Özellikle üzgün/çökkün hissetme (-8,6) göstergesinde belirgin düşüklük dikkat çekicidir. Sigara kullanımı (%30,8) belediye ortalamasının çok altındadır. Bu bulgular, düşük iş stresi/yükü (%53,9) ile tutarlıdır.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>İnsan Kaynakları (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">84,6</td>
<td>81,0</td>
<td class="highlight-positive">+3,6</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">84,6</td>
<td>76,9</td>
<td class="highlight-positive">+7,7</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">61,5</td>
<td>31,1</td>
<td class="highlight-positive">+30,4</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">61,5</td>
<td>29,3</td>
<td class="highlight-positive">+32,2</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">38,5</td>
<td>42,8</td>
<td class="highlight">-4,3</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">38,5</td>
<td>39,6</td>
<td>-1,1</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">30,8</td>
<td>17,8</td>
<td class="highlight-positive">+13,0</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">38,5</td>
<td>17,6</td>
<td class="highlight-positive">+20,9</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> İnsan Kaynakları ve Eğitim Müdürlüğü, Twitter/X (+30,4 ve +32,2), NextSosyal (+13,0 ve +20,9) ve Instagram platformlarında belediye ortalamasının belirgin üzerinde takip oranlarına sahiptir. Facebook'ta ortalamanın hafif altında kalmaktadır.</p>

<!-- ==================== #115 - İŞLETME VE İŞTİRAKLER MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "afet_isleri": {
            name: "Afet İşleri Müdürlüğü",
            html: `<h1>Afet İşleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Afet İşleri Müdürlüğü, düşük iş stresi/yükü ve güçlü kurum desteği dengesine sahip, işlevsel bir yapıda faaliyet göstermektedir. Afet İşleri Müdürlüğüne göre çalışma koşullarının (ısıtma/soğutma, yemekhane) ve İSG uygulamalarının iyileştirilmesi izlenmesi gereken alanlar olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">12/12 kişi (%100)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+29,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%90,9</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+0,1</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%52,3</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-16,8 ↓</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%86,6</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+4,3</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+34,3</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-positive">+21,1</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%46,6</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-5,6 (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%27,3</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-17,6 ↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">1 kişi (%8,3)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
        
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Görev netliği (%97,7):</strong> Belediyenin en yüksek skorlarından biri (+11,1 puan). Küçük ve uzmanlaşmış bir birimin avantajı.</li>
<li><strong>Yönetici ilişkileri (%96,6):</strong> Tüm yönetici sorularında (ulaşılabilirlik, geri bildirim, destek, eşit yaklaşım, saygı) %95+ skorlar.</li>
<li><strong>Çalışma arkadaşları uyumu (%95,5):</strong> Ekip dayanışması ve bilgi paylaşımı güçlü.</li>
<li><strong>İş-kişi uyumu (%98,5):</strong> Personel yaptığı işi anlamlı buluyor (%100) ve yetenek-görev uyumu yüksek.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çalışma koşulları (%68,2):</strong> Belediye ortalamasının 4 puan altında. Özellikle ısıtma/soğutma (%59,1) ve yemekhane (%47,2) memnuniyeti düşük.</li>
<li><strong>İSG uygulamaları (%70,5):</strong> Belediye ortalamasının 5,8 puan altında. Afet birimi için bu gösterge önemlidir.</li>
<li><strong>Kamu kurumlarını tavsiye (%79,5):</strong> Belediye ortalamasının 11,2 puan altında. Personel kendi işinden memnun (%100 "Bu işi seçtiğim için mutluyum") ancak kurumu tavsiye etmekte çekingen - bu 20,5 puanlık fark dikkat çekicidir.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Düşük stres - Yüksek memnuniyet ilişkisi:</strong> En düşük iş stresi/yüküne sahip birimlerden biri (%52,3), aynı zamanda yüksek memnuniyet (%90,9) ve düşük ruh sağlığı riski (%46,6) sergiliyor. JD-R (İş Talepleri-Kaynakları) modeli ile uyumlu.</li>
<li><strong>Küçük ekip - Net görev tanımı:</strong> 12 kişilik birimde sorumluluk alanları net tanımlanmış (%97,7). Küçük ekiplerde görev dağılımının daha kolay yapılabildiği görülüyor.</li>
<li><strong>Fiziki koşullar - Memnuniyet ayrışması:</strong> Çalışma koşulları düşük (%68,2) olmasına rağmen genel memnuniyet yüksek (%90,9). Personel fiziki koşullardan ziyade iş ilişkilerine daha fazla önem veriyor.</li>
<li><strong>Psikolojik destek farkındalığı:</strong> Açık uçlu yorumda personel psikolojik destek hizmetinden haberdar olduğunu belirtmiş ve ek olarak diyetisyen hizmeti talep etmiş. Afet işleri personelinin potansiyel stresli durumlarla karşılaşma riski düşünüldüğünde, bu farkındalık olumlu bir bulgudur.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Afet İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">98,5</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+7,2</td>
<td class="highlight-positive">Belediyenin en yüksek skorlarından</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">97,7</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+11,1</td>
<td class="highlight-positive">Belediyenin en yüksek skoru</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">96,6</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+9,8</td>
<td class="highlight-positive">Çok yüksek</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">95,5</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+8,6</td>
<td class="highlight-positive">Çok yüksek</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">90,9</td>
<td class="stat-value">92,8</td>
<td>-1,9</td>
<td>Ortalama civarı</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">88,6</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+8,8</td>
<td>Yüksek</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">80,1</td>
<td class="stat-value">77,2</td>
<td class="highlight-positive">+2,9</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">79,5</td>
<td class="stat-value">75,8</td>
<td class="highlight-positive">+3,7</td>
<td>Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">68,2</td>
<td class="stat-value">72,2</td>
<td class="highlight">-4,0</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü</strong> <em>(iş yükü, zaman sıkışıklığı, vatandaş/iş yoğunluğu vb.)</em></td>
<td class="stat-value">52,3</td>
<td class="stat-value">69,1</td>
<td class="highlight-positive">-16,8</td>
<td>Düşük stres düzeyi</td>
</tr>
</tbody>
</table>

<p><strong>Tema Analizi:</strong> Afet İşleri Müdürlüğü, görev-rol netliği (%97,7) ve iş-kişi uyumu (%98,5) temalarında belediyenin en yüksek skorlarını sergilemektedir. Bu durum, küçük ve uzmanlaşmış bir birimin net iş tanımlarına sahip olmasıyla uyumludur. Ancak çalışma koşulları teması (%68,2) belediye ortalamasının 4 puan altında kalmaktadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Afet İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S11: Zaman sıkışıklığı yaşarım</strong></td>
<td class="stat-value">45,5</td>
<td>64,7</td>
<td class="highlight-positive">-19,2 (düşük stres)</td>
</tr><tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">52,3</td>
<td>70,6</td>
<td class="highlight-positive">-18,3 (düşük stres)</td>
</tr><tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">54,5</td>
<td>70,4</td>
<td class="highlight-positive">-15,9 (düşük stres)</td>
</tr><tr>
<td><strong>S21: İş arkadaşlarımın desteği işimi kolaylaştırır</strong></td>
<td class="stat-value">100,0</td>
<td>85,6</td>
<td class="highlight-positive">+14,4</td>
</tr><tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">56,8</td>
<td>70,8</td>
<td class="highlight-positive">-14,0 (düşük stres)</td>
</tr></tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Afet İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S38: Performans değerlendirme kriterleri nettir</strong></td>
<td class="stat-value">72,7</td>
<td>80,6</td>
<td class="highlight">-7,9</td>
</tr><tr>
<td><strong>S26: Çalışma alanlarımın temizliği yeterlidir</strong></td>
<td class="stat-value">70,5</td>
<td>79,4</td>
<td class="highlight-critical">-8,9</td>
</tr><tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">47,2</td>
<td>57,2</td>
<td class="highlight-critical">-10,0</td>
</tr><tr>
<td><strong>S36: Kamu kurumlarında çalışmayı tavsiye ederim</strong></td>
<td class="stat-value">79,5</td>
<td>90,7</td>
<td class="highlight-critical">-11,2</td>
</tr><tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">59,1</td>
<td>74,1</td>
<td class="highlight-critical">-15,0</td>
</tr></tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> En iyi performans gösteren alanlarda iş stresi/yükü soruları öne çıkmaktadır - S11 zaman sıkışıklığı, S10 vatandaş yoğunluğu, S9 görev yükü, S8 duygusal zorlayıcılık belediye ortalamasının altında olup düşük iş stresi/yükü düzeyini göstermektedir. Güçlü alanlar: S21 iş arkadaşı desteği (%100,0, +14,4). Geliştirilmesi gereken alanlar: S38 değerlendirme kriterleri netliği (%72,7, -7,9); S26 çalışma alanı temizliği (%70,5, -8,9); S30 yemekhane (%47,2, -10,0).</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>
<p>Afet İşleri Müdürlüğü'nden <strong>1 personel</strong> (%8,3) açık uçlu yorum yapmıştır:</p>

<div class="quote">
"Kurumumuzda verilecek olan psikolojik destek hizmetini öğrendiğime mutlu oldum. Bunun yanı sıra diyetisyen hizmetininde tamamlayıcı olacağı düşüncesindeyim."
</div>

<p><strong>Yorum Değerlendirmesi:</strong> Tek açık uçlu cevap, olumsuz bir şikayet içermemekte; aksine kurumsal hizmetlere ilişkin olumlu bir geri bildirim ve ek talep (diyetisyen hizmeti) sunmaktadır. Psikolojik destek hizmetinin personel tarafından fark edilmiş olması, kurum içi iletişimin bu konuda etkili olduğunu göstermektedir. Afet işleri personelinin stresli durumlarla karşılaşma potansiyeli göz önüne alındığında, psikolojik destek hizmetine yönelik farkındalık olumlu bir bulgudur.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<p>Ruh sağlığı riski %46,6 ile belediye ortalamasının (%52,2) 5,6 puan altındadır:</p>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Afet İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">59,1</td>
<td>56,1</td>
<td>+3,0</td>
<td>Ortalamanın biraz üzerinde</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">40,9</td>
<td>50,9</td>
<td class="highlight-positive">-10,0</td>
<td class="highlight-positive">Ortalamanın belirgin altında</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">45,5</td>
<td>50,8</td>
<td class="highlight-positive">-5,3</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">40,9</td>
<td>50,9</td>
<td class="highlight-positive">-10,0</td>
<td class="highlight-positive">Ortalamanın belirgin altında</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">27,3</td>
<td>44,9</td>
<td class="highlight-positive">-17,6</td>
<td class="highlight-positive">Belediyenin en düşük oranlarından</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Afet İşleri Müdürlüğü personelinin ruh sağlığı risk göstergeleri genel olarak belediye ortalamasının altındadır (olumlu). Sigara kullanım oranı (%27,3), belediye ortalamasının (%44,9) önemli ölçüde altındadır. Düşük iş stresi/yükü (%52,3) ve güçlü sosyal destek yapısının (yönetici ilişkileri %96,6, çalışma arkadaşları %95,5) bu olumlu tabloya katkı sağladığı düşünülebilir. Ancak "keyif alamama" göstergesinin ortalamanın biraz üzerinde olması (%59,1) izlenmeye değer bir bulgu olarak not edilmelidir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Afet İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">81,8</td>
<td>81,0</td>
<td>+0,8</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">100,0</td>
<td>76,9</td>
<td class="highlight-positive">+23,1</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">9,1</td>
<td>31,1</td>
<td class="highlight-critical">-22,0</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">9,1</td>
<td>29,3</td>
<td class="highlight-critical">-20,2</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">27,3</td>
<td>42,8</td>
<td class="highlight">-15,5</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">27,3</td>
<td>39,6</td>
<td class="highlight">-12,3</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> İlginç bir tablo ortaya çıkmaktadır: Başkan'ın Instagram hesabı %100 oranında takip edilirken, Twitter/X kullanımı son derece düşüktür (%9,1). Bu durum, personelin belirli bir platform tercihine sahip olduğunu veya küçük örneklem boyutunun etkisini yansıtıyor olabilir.</p>

<!-- ==================== #102 - AKILLI ULAŞIM SİSTEMLERİ MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "ozel_kalem": {
            name: "Özel Kalem Müdürlüğü",
            html: `<h1>Özel Kalem Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Özel Kalem Müdürlüğü, belediyenin en güçlü performans gösteren birimlerinden biridir. Güçlü iş-kişi uyumu, yönetici ve ekip ilişkileri, düşük ruh sağlığı riski ve %98,4 memnuniyet ile JD-R modeli açısından örnek profil sergilemektedir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">16/16 kişi (%100)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+36,3</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%98,4</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+7,6 ↑↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%67,1</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-2,0</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%90,0</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+7,7 ↑</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+22,9</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+9,7</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%39,2</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-13,0 ↓↓ (olumlu)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%43,8</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-1,1</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">2 kişi (%12,5)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<p style="font-size:9pt; color:#666;">* Katılım oranının %100'ü aşması, muhtemelen geçici personelin de ankete katılmasından kaynaklanmaktadır.</p>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>İş-kişi uyumu (%97,9):</strong> Belediye ortalamasının 6,6 puan üzerinde. S1 yetenek-iş uyumu (%98,4) ve S3 işin anlamlılığı (%98,4) neredeyse tam puan.</li>
<li><strong>Görev-rol netliği (%95,7):</strong> Belediye ortalamasının 9,1 puan üzerinde. S4 (%98,4) ve S5 (%95,3) güçlü.</li>
<li><strong>Yöneticilerle ilişkiler (%94,3):</strong> Belediye ortalamasının 7,5 puan üzerinde. S12, S13 sorularında %98,4.</li>
<li><strong>Çalışma arkadaşları (%94,7):</strong> Belediye ortalamasının 7,8 puan üzerinde. S18, S19 sorularında %96,9.</li>
<li><strong>Çok düşük ruh sağlığı riski (%39,2):</strong> Belediye ortalamasının 13,0 puan altında - belediyenin en düşük risk seviyelerinden biri.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yemekhane (%54,7):</strong> Belediye ortalamasının 2,5 puan altında - müdürlüğün tek zayıf noktası. Açık uçlu yorumlarda lezzet şikayeti.</li>
<li><strong>Kurum iletişimi - S24 (%70,3):</strong> Belediye ortalamasının 10,1 puan altında - tek düşük skor.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yüksek memnuniyet (%98,4):</strong> Bu kurumda çalışmaktan genel olarak memnunum sorusunda belediyenin en yüksek skoru.</li>
<li><strong>10 temada 10 ortalamanın üzerinde:</strong> Tüm temalarda belediye ortalamasının üzerinde performans - belediyenin en dengeli birimi.</li>
<li><strong>Belediyenin en düşük ruh sağlığı risklerinden:</strong> %39,2 ile personelin ruh sağlığı göstergeleri çok olumlu.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Özel Kalem (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">97,9</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+6,6</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">95,7</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+9,1</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">67,1</td>
<td class="stat-value">69,1</td>
<td class="highlight-positive">-2,0</td>
<td class="highlight-positive">Ortalamanın altında (olumlu)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">94,3</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+7,5</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">94,7</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+7,8</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">81,3</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+1,5</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">83,5</td>
<td class="stat-value">72,2</td>
<td class="highlight-positive">+11,3</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">95,8</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+3,0</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">85,2</td>
<td class="stat-value">77,2</td>
<td class="highlight-positive">+8,0</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">81,3</td>
<td class="stat-value">75,8</td>
<td class="highlight-positive">+5,5</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Özel Kalem Müdürlüğü, <strong>10 temanın tamamında belediye ortalamasının üzerinde</strong> performans göstermektedir - belediyede bu başarıya ulaşan nadir birimlerden biri. Çalışma koşulları (+11,3), görev-rol netliği (+9,1), yetkinlik & performans (+8,0), çalışma arkadaşları (+7,8) ve yöneticilerle ilişkiler (+7,5) özellikle güçlüdür.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Özel Kalem (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S29: Ortak alanlar yeterlidir</strong></td>
<td class="stat-value">92,2</td>
<td>70,4</td>
<td class="highlight-positive">+21,8</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">85,9</td>
<td>67,7</td>
<td class="highlight-positive">+18,2</td>
</tr>
<tr>
<td><strong>S28: Bireysel çalışma alanım (masa, sandalye vb.) yeterlidir</strong></td>
<td class="stat-value">93,8</td>
<td>79,2</td>
<td class="highlight-positive">+14,6</td>
</tr>
<tr>
<td><strong>S23: Öneri ve şikayetlerimle ilgili geri bildirim alırım</strong></td>
<td class="stat-value">92,2</td>
<td>79,2</td>
<td class="highlight-positive">+13,0</td>
</tr>
<tr>
<td><strong>S33: Sağlanan teknoloji altyapısı yeterlidir</strong></td>
<td class="stat-value">87,5</td>
<td>75,2</td>
<td class="highlight-positive">+12,3</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Özel Kalem (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">69,6</td>
<td>70,4</td>
<td class="highlight-positive">-0,8 (düşük stres)</td>
</tr>
<tr>
<td><strong>S38: Performans değerlendirme kriterleri nettir</strong></td>
<td class="stat-value">81,3</td>
<td>80,6</td>
<td class="">+0,7</td>
</tr>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">71,7</td>
<td>70,8</td>
<td class="highlight-critical">+0,9</td>
</tr>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">54,7</td>
<td>57,2</td>
<td class="">-2,5</td>
</tr>
<tr>
<td><strong>S24: Belediyedeki karar ve gelişmelerden haberdar edilirim</strong></td>
<td class="stat-value">70,3</td>
<td>80,4</td>
<td class="highlight-critical">-10,1</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Özel Kalem Müdürlüğü, fiziksel çalışma koşullarında belediyenin en yüksek skorlarına sahiptir: ortak alanlar (S29: %92,2, +21,8), servis (S32: %85,9, +18,2), bireysel çalışma alanı (S28: %93,8, +14,6) ve teknoloji altyapısı (S33: %87,5, +12,3). Bu üstünlük, birimin Başkanlık makamına yakınlığı ve öncelikli kaynak tahsisi ile açıklanabilir. İş stresi belediye ortalamasına çok yakındır (S9: -0,8; S8: +0,9), dengeli bir profil sergilemektedir. "Geliştirilmesi gereken" alanların bile belediye ortalamasına yakın olması, birimin genel olarak olumlu bir tabloya sahip olduğunu göstermektedir. Tek dikkat çekici düşük skor, karar ve gelişmelerden bilgilendirme (S24: %70,3, -10,1) konusundadır.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Özel Kalem Müdürlüğü'nden <strong>2 kişi (%12,5)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Yemek Lezzeti (2 yorum):</strong></p>
<div class="quote">"Yediğimiz yemeklerden hiç tat tuz şeker alamıyoruz!!!"</div>
<div class="quote">"Maaşların iyileştirilmesi konusunda talebim var. Kurum içi eğitimlerin çoğaltılmasını istiyorum. Yemekhane hizmetinden memnunum fakat yemeklerin lezzet konusunda iyileştirilmesini talep ediyorum."</div>

<p><strong>Yorum Analizi:</strong> Her iki yorum da yemek lezzetine odaklanmaktadır. S30 yemekhane skoru (%54,7) ortalamanın hafif altındadır. Ayrıca maaş iyileştirmesi ve eğitim talebi de dile getirilmiştir. Genel olarak şikayet yoğunluğu düşük olup, bu durum yüksek memnuniyet skorlarıyla tutarlıdır.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Özel Kalem (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">39,2</td>
<td>52,2</td>
<td class="highlight-positive">-13,0</td>
<td class="highlight-positive">Çok düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">45,0</td>
<td>56,1</td>
<td class="highlight-positive">-11,1</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">40,0</td>
<td>50,9</td>
<td class="highlight-positive">-10,9</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">36,7</td>
<td>50,8</td>
<td class="highlight-positive">-14,1</td>
<td class="highlight-positive">Çok düşük (olumlu)</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">35,0</td>
<td>50,9</td>
<td class="highlight-positive">-15,9</td>
<td class="highlight-positive">Çok düşük (olumlu)</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">43,8</td>
<td>44,9</td>
<td class="highlight-positive">-1,1</td>
<td class="highlight-positive">Ortalama düzeyde</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Özel Kalem Müdürlüğü personelinin ruh sağlığı risk göstergeleri <strong>belediyenin en düşük değerleri</strong>ndedir (çok olumlu). Tüm göstergelerde 10-16 puan düşüklük görülmektedir. Özellikle S49 endişe kontrolü (%35,0, -15,9) ve S48 gerginlik/kaygı (%36,7, -14,1) çok olumludur. Bu bulgular, yüksek kurum desteği (%90,0) ve güçlü iş-kişi uyumu (%97,9) ile tutarlıdır.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Özel Kalem (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">93,8</td>
<td>81,0</td>
<td class="highlight-positive">+12,8</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">93,8</td>
<td>76,9</td>
<td class="highlight-positive">+16,9</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">50,0</td>
<td>31,1</td>
<td class="highlight-positive">+18,9</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">62,5</td>
<td>29,3</td>
<td class="highlight-positive">+33,2</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">68,8</td>
<td>42,8</td>
<td class="highlight-positive">+26,0</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">68,8</td>
<td>39,6</td>
<td class="highlight-positive">+29,2</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">25,0</td>
<td>17,8</td>
<td class="highlight-positive">+7,2</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">25,0</td>
<td>17,6</td>
<td class="highlight-positive">+7,4</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Özel Kalem Müdürlüğü, tüm sosyal medya platformlarında belediye ortalamasının üzerinde takip oranlarına sahiptir. Twitter/X Başkan (+33,2), Facebook Başkan (+29,2), Facebook Belediye (+26,0) ve Twitter/X Belediye (+18,9) takibinde belirgin yükseklik görülmektedir. Başkanlık makamına yakınlık, başkan hesaplarının takip oranlarını artırmaktadır.</p>

<!-- ==================== #121 - PARK VE BAHÇELER MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "muhtarlik": {
            name: "Muhtarlık İşleri Müdürlüğü",
            html: `<h1>Muhtarlık İşleri Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Muhtarlık İşleri Müdürlüğü, güçlü sosyal ortam ve düşük iş stresi/yükü ile belediyenin en memnun birimlerinden biridir. Fiziksel çalışma koşullarının (ortak alanlar, ısıtma/soğutma, teknoloji altyapısı) iyileştirilmesi bu yüksek memnuniyeti daha da pekiştirebilir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">6/6 kişi (%100)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+49,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%95,8</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+5,0</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%56,3</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-12,8 ↓</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%79,5</td>
            <td class="avg">%82,3</td>
            <td class="diff">-2,8</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+23,2</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+10,0</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%54,5</td>
            <td class="avg">%52,2</td>
            <td class="diff">+2,3</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%33,3</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-11,6 ↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">2 kişi (%28,6)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<p style="font-size:9pt; color:#666;">* Katılım oranının %100'ü aşması, muhtemelen geçici personelin de ankete katılmasından kaynaklanmaktadır.</p>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yüksek memnuniyet (%95,8):</strong> Belediye ortalamasının 5 puan üzerinde - belediyenin en memnun birimlerinden.</li>
<li><strong>Düşük iş stresi/yükü (%56,3):</strong> Belediye ortalamasının 12,8 puan altında. Duygusal zorlayıcılık (%50,0) düşük.</li>
<li><strong>Çalışma arkadaşları (%90,8):</strong> Belediye ortalamasının 3,9 puan üzerinde. İş arkadaşları desteği (%95,8) çok yüksek.</li>
<li><strong>İş-kişi uyumu (%91,7):</strong> Belediye ortalamasının 0,4 puan üzerinde. Tüm alt sorular %91,7 düzeyinde.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Ortak alanlar (%50,0):</strong> Belediye ortalamasının 20,4 puan altında - müdürlüğün en kritik sorunu.</li>
<li><strong>Ücret (%54,2):</strong> Belediye ortalamasının 14,8 puan altında.</li>
<li><strong>Servis hizmeti (%56,3):</strong> Belediye ortalamasının 11,4 puan altında.</li>
<li><strong>Teknoloji altyapısı (%58,3):</strong> Belediye ortalamasının 16,9 puan altında.</li>
<li><strong>Isıtma/soğutma (%58,3):</strong> Belediye ortalamasının 15,8 puan altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Yüksek memnuniyet - düşük fiziksel koşullar paradoksu:</strong> Memnuniyet çok yüksek (%95,8) iken fiziksel koşullar (ortak alan, ısıtma, teknoloji) çok zayıf - sosyal ortam memnuniyeti taşıyor.</li>
<li><strong>%100 Instagram takibi:</strong> Her iki Instagram hesabında da tam takip oranı.</li>
<li><strong>Küçük örneklem (n=6):</strong> Sonuçlar temkinle değerlendirilmelidir.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Muhtarlık İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">91,7</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+0,4</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">81,3</td>
<td class="stat-value">86,6</td>
<td class="highlight-warning">-5,3</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">56,3</td>
<td class="stat-value">69,1</td>
<td class="highlight-positive">-12,8</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">88,9</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+2,1</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">90,8</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+3,9</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">83,3</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+3,5</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">63,3</td>
<td class="stat-value">72,2</td>
<td class="highlight-critical">-8,9</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">90,3</td>
<td class="stat-value">92,8</td>
<td class="highlight">-2,5</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">68,8</td>
<td class="stat-value">77,2</td>
<td class="highlight-critical">-8,4</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">64,6</td>
<td class="stat-value">75,8</td>
<td class="highlight-critical">-11,2</td>
<td class="highlight-critical">Çok düşük</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Muhtarlık İşleri Müdürlüğü, 10 temadan 5'inde (iş-kişi uyumu, iş stresi/yükü, yöneticilerle ilişkiler, çalışma arkadaşları, kurum içi iletişim) belediye ortalamasının üzerinde performans göstermektedir. Eğitim & gelişim (-11,2), çalışma koşulları (-8,9) ve yetkinlik & performans (-8,4) en zayıf alanlardır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Muhtarlık İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">50,0</td>
<td>70,8</td>
<td class="highlight-positive">-20,8 (düşük stres)</td>
</tr>
<tr>
<td><strong>S10: Vatandaş/başvuru talep yoğunluğu fazladır</strong></td>
<td class="stat-value">58,3</td>
<td>70,6</td>
<td class="highlight-positive">-12,3 (düşük stres)</td>
</tr>
<tr>
<td><strong>S26: Çalışma alanlarımın temizliği yeterlidir</strong></td>
<td class="stat-value">91,7</td>
<td>79,4</td>
<td class="highlight-positive">+12,3</td>
</tr>
<tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">58,3</td>
<td>70,4</td>
<td class="highlight-positive">-12,1 (düşük stres)</td>
</tr>
<tr>
<td><strong>S21: İş arkadaşlarımın desteği işimi kolaylaştırır</strong></td>
<td class="stat-value">95,8</td>
<td>85,6</td>
<td class="highlight-positive">+10,2</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Muhtarlık İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S43: Eğitimler mesleki gelişimime katkı sağlar</strong></td>
<td class="stat-value">62,5</td>
<td>76,8</td>
<td class="highlight-critical">-14,3</td>
</tr>
<tr>
<td><strong>S34: Ücretler piyasa koşullarına göre makul</strong></td>
<td class="stat-value">54,2</td>
<td>69,0</td>
<td class="highlight-critical">-14,8</td>
</tr>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">58,3</td>
<td>74,1</td>
<td class="highlight-critical">-15,8</td>
</tr>
<tr>
<td><strong>S33: Sağlanan teknoloji altyapısı yeterlidir</strong></td>
<td class="stat-value">58,3</td>
<td>75,2</td>
<td class="highlight-critical">-16,9</td>
</tr>
<tr>
<td><strong>S29: Ortak alanlar yeterlidir</strong></td>
<td class="stat-value">50,0</td>
<td>70,4</td>
<td class="highlight-critical">-20,4</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Muhtarlık İşleri Müdürlüğü'nde düşük iş stresi/yükü (%56,2) ile yetersiz kurumsal kaynaklar arasında belirgin bir kontrast görülmektedir. Stres göstergeleri (S8: -20,8; S10: -12,3; S9: -12,1) belediye ortalamasının çok altında olup, sakin bir çalışma ortamına işaret etmektedir. Temizlik (S26: %91,7, +12,3) ve iş arkadaşı desteği (S21: %95,8, +10,2) güçlüdür. Ancak kurumsal altyapı ciddi sorun alanıdır: ortak alanlar (S29: %50,0, -20,4) ve teknoloji altyapısı (S33: %58,3, -16,9) belediyenin en düşük skorları arasındadır. Ücret (S34: %54,2, -14,8), ısıtma/soğutma (S27: %58,3, -15,8) ve eğitim katkısı (S43: %62,5, -14,3) da düşüktür. Bu tablo, personelin kendi aralarında iyi çalıştığı ancak fiziksel ve kurumsal kaynaklardan yoksun olduğu şeklinde yorumlanabilir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Muhtarlık İşleri Müdürlüğü'nden <strong>2 kişi (%28,6)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Tuvalet Ayrımı:</strong></p>
<div class="quote">"Personel ve vatandaşın kullanacağı ayrı tuvaletlerin olması."</div>

<p><strong>2. Yemek Alanı:</strong></p>
<div class="quote">"Yemekhane kullanmayanlar için yemeklerini yiyebileceği alan olmalı."</div>

<p><strong>Yorum Analizi:</strong> Her iki yorum da fiziksel alan ihtiyaçlarına odaklanmaktadır. Personel-vatandaş tuvalet ayrımı talebi, S29 ortak alanlar (%50,0, -20,4) skoruyla tutarlıdır. Yemek alanı talebi de dinlenme alanı ihtiyacını yansıtmaktadır.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Muhtarlık İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">54,5</td>
<td>52,2</td>
<td class="highlight">+2,3</td>
<td class="highlight">Ortalamanın hafif üzerinde</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">58,3</td>
<td>56,1</td>
<td>+2,2</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">50,0</td>
<td>50,9</td>
<td class="highlight-positive">-0,9</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">55,0</td>
<td>50,8</td>
<td class="highlight">+4,2</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">54,2</td>
<td>50,9</td>
<td class="highlight">+3,3</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">33,3</td>
<td>44,9</td>
<td class="highlight-positive">-11,6</td>
<td class="highlight-positive">Düşük (olumlu)</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Muhtarlık İşleri Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasına yakın düzeydedir. Gerginlik/kaygı (+4,2) ve endişe kontrolü (+3,3) göstergelerinde hafif yükseklik görülmekle birlikte, sigara kullanımı (%33,3) belediye ortalamasının 11,6 puan altındadır.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Muhtarlık İşleri (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">100,0</td>
<td>81,0</td>
<td class="highlight-positive">+19,0</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">100,0</td>
<td>76,9</td>
<td class="highlight-positive">+23,1</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">33,3</td>
<td>31,1</td>
<td class="highlight-positive">+2,2</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">50,0</td>
<td>29,3</td>
<td class="highlight-positive">+20,7</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">66,7</td>
<td>42,8</td>
<td class="highlight-positive">+23,9</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">66,7</td>
<td>39,6</td>
<td class="highlight-positive">+27,1</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">50,0</td>
<td>17,8</td>
<td class="highlight-positive">+32,2</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">50,0</td>
<td>17,6</td>
<td class="highlight-positive">+32,4</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Muhtarlık İşleri Müdürlüğü, tüm sosyal medya platformlarında belediye ortalamasının üzerinde takip oranlarına sahiptir. Instagram'da %100 takip oranı, NextSosyal'de +32 puan, Facebook'ta +24-27 puan fark görülmektedir. Birim sosyal medya farkındalığı açısından örnek teşkil etmektedir.</p>

<!-- ==================== #120 - ÖZEL KALEM MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "isletme_istirakler": {
            name: "İşletme ve İştirakler Müdürlüğü",
            html: `<h1>İşletme ve İştirakler Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> İşletme ve İştirakler Müdürlüğü, ankete katılan personel açısından belediyenin en memnun birimlerinden biridir. Güçlü kamu hizmeti motivasyonu, güçlü kurum içi iletişim ve yetkinlik değerlendirme sistemleri öne çıkmaktadır. Ancak çok düşük katılım oranı (%44,4), sonuçların temkinle değerlendirilmesini gerektirmektedir - katılmayan personelin görüşleri bilinmemektedir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">8/18 kişi (%44,4)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-critical">-26,0 ↓</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%96,9</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+6,1</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%69,5</td>
            <td class="avg">%69,1</td>
            <td class="diff">+0,4</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%84,5</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+2,2</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+15,0</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-warning">+1,8</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%54,8</td>
            <td class="avg">%52,2</td>
            <td class="diff">+2,6 (olumsuz)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%50,0</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-warning">+5,1</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">2 kişi (%25,0)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Kamu hizmeti motivasyonu (%96,9):</strong> Belediye ortalamasının 4,1 puan üzerinde. İşin anlamlılığı (%96,9), topluma hizmet gururu (%96,9), kamu tavsiyesi (%96,9) ve toplum faydalılığı (%96,9) güçlü.</li>
<li><strong>Kurum içi iletişim (%89,1):</strong> Belediye ortalamasının 9,3 puan üzerinde. Bilgilendirme (%90,6) ve öneri geri bildirimi (%87,5) çok güçlü.</li>
<li><strong>Yetkinlik & Performans (%86,7):</strong> Belediye ortalamasının 9,5 puan üzerinde. Değerlendirme kriterleri nettir (%90,6) ve adildir (%87,5).</li>
<li><strong>Çalışma arkadaşları (%88,8):</strong> Belediye ortalamasının 1,9 puan üzerinde. Ekip dayanışması (%90,6) güçlü.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Katılım oranı (%44,4):</strong> Belediye ortalamasının 26 puan altında - belediyenin en düşük katılımı. Ankete katılmayan %55,6'lık kesimin görüşleri bilinmiyor.</li>
<li><strong>Yemekhane (%53,1):</strong> Belediye ortalamasının 4,1 puan altında.</li>
<li><strong>Çalışma alanı yetersizliği:</strong> Açık uçlu yorumlarda "çalıştığımız ofis küçük geliyor" şikayeti.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Çok düşük katılım - çok yüksek memnuniyet paradoksu:</strong> Sadece %44,4 katılım ama %96,9 memnuniyet - katılanlar memnun ancak katılmayanların durumu bilinmiyor.</li>
<li><strong>Güçlü kamu hizmeti motivasyonu:</strong> S3, S35, S36, S37 sorularının tamamında %96,9 skor - belediyenin en yüksek motivasyon oranlarından.</li>
<li><strong>NextSosyal takibi sıfır:</strong> Her iki NextSosyal hesabında da %0 takip - platform farkındalığı düşük olabilir.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>İşletme İştirakler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">87,5</td>
<td class="stat-value">91,3</td>
<td class="highlight">-3,8</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">88,3</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+1,7</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">69,5</td>
<td class="stat-value">69,1</td>
<td>+0,4</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">87,5</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+0,7</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">88,8</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+1,9</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">89,1</td>
<td class="stat-value">79,8</td>
<td class="highlight-positive">+9,3</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">74,0</td>
<td class="stat-value">72,2</td>
<td class="highlight-positive">+1,8</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">96,9</td>
<td class="stat-value">92,8</td>
<td class="highlight-positive">+4,1</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">86,7</td>
<td class="stat-value">77,2</td>
<td class="highlight-positive">+9,5</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">73,4</td>
<td class="stat-value">75,8</td>
<td class="highlight">-2,4</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> İşletme ve İştirakler Müdürlüğü, 10 temadan 7'sinde belediye ortalamasının üzerinde performans göstermektedir. Kurum içi iletişim (+9,3), yetkinlik & performans (+9,5) ve kamu hizmeti motivasyonu (+4,1) özellikle güçlüdür. İş-kişi uyumu (-3,8) ve eğitim & gelişim (-2,4) ortalamanın altındadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>İşletme İştirakler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S40: Performansım düzenli aralıklarla değerlendirilir</strong></td>
<td class="stat-value">87,5</td>
<td>77,0</td>
<td class="highlight-positive">+10,5</td>
</tr>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">84,4</td>
<td>74,1</td>
<td class="highlight-positive">+10,3</td>
</tr>
<tr>
<td><strong>S39: Performans değerlendirme kriterleri adildir</strong></td>
<td class="stat-value">87,5</td>
<td>77,2</td>
<td class="highlight-positive">+10,3</td>
</tr>
<tr>
<td><strong>S24: Belediyedeki karar ve gelişmelerden haberdar edilirim</strong></td>
<td class="stat-value">90,6</td>
<td>80,4</td>
<td class="highlight-positive">+10,2</td>
</tr>
<tr>
<td><strong>S38: Performans değerlendirme kriterleri nettir</strong></td>
<td class="stat-value">90,6</td>
<td>80,6</td>
<td class="highlight-positive">+10,0</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>İşletme İştirakler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">53,1</td>
<td>57,2</td>
<td class="">-4,1</td>
</tr>
<tr>
<td><strong>S18: İş arkadaşlarımla uyum içinde çalışırım</strong></td>
<td class="stat-value">87,5</td>
<td>91,9</td>
<td class="">-4,4</td>
</tr>
<tr>
<td><strong>S12: Amirime kolaylıkla ulaşabilirim</strong></td>
<td class="stat-value">87,5</td>
<td>92,2</td>
<td class="">-4,7</td>
</tr>
<tr>
<td><strong>S2: Bu işi seçtiğim için mutluyum</strong></td>
<td class="stat-value">84,4</td>
<td>90,7</td>
<td class="highlight">-6,3</td>
</tr>
<tr>
<td><strong>S1: Yaptığım iş yetenek ve becerilerimle uyumludur</strong></td>
<td class="stat-value">81,3</td>
<td>90,9</td>
<td class="highlight-critical">-9,6</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> İşletme ve İştirakler Müdürlüğü, performans değerlendirme sisteminde belediyenin en yüksek skorlarına sahiptir: düzenli değerlendirme (S40: %87,5, +10,5), kriterler adaleti (S39: %87,5, +10,3) ve kriterler netliği (S38: %90,6, +10,0). Bu durum, birimin yapılandırılmış ve şeffaf bir yönetim sistemine sahip olduğuna işaret etmektedir. Fiziksel koşullar da güçlüdür (S27: %84,4, +10,3). Ancak iş-kişi uyumu sorunludur: "iş-yetenek uyumu" (S1: %81,3, -9,6) ve "işi seçtiğim için mutluyum" (S2: %84,4, -6,3) belediye ortalamasının altındadır. "Geliştirilmesi gereken" alanların bile belediye ortalamasına çok yakın olması (-4 ile -10 puan arası), birimin genel olarak sorunsuz bir yapıda faaliyet gösterdiğini ortaya koymaktadır.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>İşletme ve İştirakler Müdürlüğü'nden <strong>2 kişi (%25,0)</strong> açık uçlu yorum yapmıştır.</p>

<h4>Öne Çıkan Temalar:</h4>

<p><strong>1. Ofis Alanı Yetersizliği:</strong></p>
<div class="quote">"Çalıştığımız ofis küçük geliyor."</div>

<p><strong>2. Personel Sosyal İmkanları:</strong></p>
<div class="quote">"Personel olarak talebim; personel dinlenme alanı oluşturulması ve sabah poğaça, simit ve aperatif ürünler satılan bir bölüm oluşturulması."</div>

<p><strong>Yorum Analizi:</strong> Açık uçlu yorum sayısı düşük olmakla birlikte (2 yorum), fiziksel çalışma alanı yetersizliği ve sosyal imkan talepleri dile getirilmiştir. Bu bulgular S29 ortak alanlar (%68,8) skoruyla tutarlıdır.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>İşletme İştirakler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">54,8</td>
<td>52,2</td>
<td class="highlight">+2,6</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">59,4</td>
<td>56,1</td>
<td class="highlight">+3,3</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">56,3</td>
<td>50,9</td>
<td class="highlight">+5,4</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">53,6</td>
<td>50,8</td>
<td>+2,8</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">50,0</td>
<td>50,9</td>
<td class="highlight-positive">-0,9</td>
<td class="highlight-positive">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">50,0</td>
<td>44,9</td>
<td class="highlight">+5,1</td>
<td class="highlight">Ortalamanın üzerinde</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> İşletme ve İştirakler Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının hafif üzerindedir. Özellikle üzgün/çökkün hissetme (+5,4) ve keyif alamama (+3,3) göstergelerinde artış dikkat çekicidir. Bu durum, yüksek memnuniyet skorlarıyla bir paradoks oluşturmaktadır - ancak küçük örneklem boyutu (n=8) bu farklılığı açıklayabilir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>İşletme İştirakler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">75,0</td>
<td>81,0</td>
<td class="highlight">-6,0</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">75,0</td>
<td>76,9</td>
<td>-1,9</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">37,5</td>
<td>31,1</td>
<td class="highlight-positive">+6,4</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">25,0</td>
<td>29,3</td>
<td class="highlight">-4,3</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">25,0</td>
<td>42,8</td>
<td class="highlight-critical">-17,8</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">25,0</td>
<td>39,6</td>
<td class="highlight-critical">-14,6</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">0,0</td>
<td>17,8</td>
<td class="highlight-critical">-17,8</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">0,0</td>
<td>17,6</td>
<td class="highlight-critical">-17,6</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> İşletme ve İştirakler Müdürlüğü, NextSosyal platformlarında %0 takip oranıyla belediyenin en düşük NextSosyal takibine sahiptir. Facebook takibi de ortalamanın çok altındadır (-17,8 ve -14,6). Yalnızca Twitter/X Belediye hesabında ortalamanın üzerinde (+6,4) takip görülmektedir.</p>

<!-- ==================== #116 - KOORDİNASYON İŞLERİ MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "park_bahceler": {
            name: "Park ve Bahçeler Müdürlüğü",
            html: `<h1>Park ve Bahçeler Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Park ve Bahçeler Müdürlüğü, güçlü çalışma koşulları ve görev netliğine rağmen yüksek iş stresi/yükü ve ruh sağlığı riski sergileyen bir birimdir. Saha çalışmasının yarattığı fiziksel ve duygusal yükün hafifletilmesi, personel ruh sağlığının izlenmesi ve destek mekanizmalarının güçlendirilmesi önerilir.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">56/85 kişi (%65,9)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight">-4,5</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%91,7</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+0,9</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar örn: zor vatandaşlarla iletişim vb.)</span>
            </td>
            <td class="value">%76,3</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-warning">+7,2 ↑</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları, yemekhane, ortak alanlar, ısıtma/soğutma, teknoloji altyapısı, servis, eğitim imkanları vb.)</span>
            </td>
            <td class="value">%83,7</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+1,4</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+7,4</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight-critical">-5,8</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%58,1</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-warning">+5,9 (olumsuz)</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%39,6</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-5,3</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">0 kişi (%0)</td>
            <td class="avg">-</td>
            <td class="diff"></td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Görev-rol netliği (%87,4):</strong> Belediye ortalamasının 0,8 puan üzerinde. Görev tanımı (%89,6) ve sorumluluk netliği (%87,5) yüksek.</li>
<li><strong>Çalışma koşulları (%80,0):</strong> Belediye ortalamasının 7,8 puan üzerinde - saha birimi için çok iyi. Ortak alanlar (%82,4), ısıtma/soğutma (%82,8) güçlü.</li>
<li><strong>Yetkinlik & performans (%80,6):</strong> Belediye ortalamasının 3,4 puan üzerinde.</li>
<li><strong>Eğitim & gelişim (%79,4):</strong> Belediye ortalamasının 3,6 puan üzerinde.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>İş stresi (%76,3):</strong> Belediye ortalamasının 7,2 puan üzerinde. Duygusal zorlayıcılık (%77,7), görev yükü (%79,3), zaman sıkışıklığı (%72,9) yüksek.</li>
<li><strong>Ruh sağlığı riski (%58,1):</strong> Belediye ortalamasının 5,9 puan üzerinde (olumsuz). Üzgün hissetme (%62,0, +11,1) ve gerginlik (%59,8, +9,0) yüksek.</li>
<li><strong>Kamu hizmeti motivasyonu (%87,2):</strong> Belediye ortalamasının 5,6 puan altında.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Ruh sağlığı uyarısı:</strong> Üzgün/çökkün hissetme %62,0 (+11,1), gergin/kaygılı hissetme %59,8 (+9,0) - belediye ortalamasının belirgin üzerinde.</li>
<li><strong>Hiç açık uçlu yorum yok:</strong> 56 katılımcıdan hiçbiri yorum yapmamış - bu, ya memnuniyet ya da iletişim tercihi nedeniyle olabilir.</li>
<li><strong>Saha koşulları etkisi:</strong> Dış mekan çalışması, hava koşullarına maruz kalma ve fiziksel işin yarattığı stres olası etkenler.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Park ve Bahçeler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">88,3</td>
<td class="stat-value">91,3</td>
<td class="highlight">-3,0</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">87,4</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+0,8</td>
<td class="highlight-positive">Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>İş Stresi/Yükü (İş Yükü/Stresi)</strong></td>
<td class="stat-value">76,3</td>
<td class="stat-value">69,1</td>
<td class="highlight-warning">+7,2</td>
<td class="highlight-critical">Yüksek (olumsuz)</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">86,7</td>
<td class="stat-value">86,8</td>
<td>-0,1</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">84,8</td>
<td class="stat-value">86,9</td>
<td class="highlight">-2,1</td>
<td class="highlight">Ortalamanın altında</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">79,4</td>
<td class="stat-value">79,8</td>
<td>-0,4</td>
<td>Ortalama düzeyde</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">80,0</td>
<td class="stat-value">72,2</td>
<td class="highlight-positive">+7,8</td>
<td class="highlight-positive">Güçlü</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">87,2</td>
<td class="stat-value">92,8</td>
<td class="highlight-warning">-5,6</td>
<td class="highlight-critical">Düşük</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">80,6</td>
<td class="stat-value">77,2</td>
<td class="highlight-positive">+3,4</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">79,4</td>
<td class="stat-value">75,8</td>
<td class="highlight-positive">+3,6</td>
<td class="highlight-positive">Ortalamanın üzerinde</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Park ve Bahçeler Müdürlüğü, 10 temadan 5'inde (görev-rol netliği, çalışma koşulları, yetkinlik & performans, eğitim & gelişim, kurum içi iletişim) belediye ortalamasının üzerinde veya eşit performans göstermektedir. İş stresi (+7,2) ve kamu hizmeti motivasyonu (-5,6) dikkat gerektiren alanlardır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En İyi Performans Gösteren Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Park ve Bahçeler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S30: Yemekhane/yemek hizmeti kalitesinden memnunum</strong></td>
<td class="stat-value">70,3</td>
<td>57,2</td>
<td class="highlight-positive">+13,1</td>
</tr>
<tr>
<td><strong>S29: Ortak alanlar yeterlidir</strong></td>
<td class="stat-value">82,4</td>
<td>70,4</td>
<td class="highlight-positive">+12,0</td>
</tr>
<tr>
<td><strong>S34: Ücretler piyasa koşullarına göre makul</strong></td>
<td class="stat-value">79,7</td>
<td>69,0</td>
<td class="highlight-positive">+10,7</td>
</tr>
<tr>
<td><strong>S27: Isıtma/soğutma sistemleri yeterlidir</strong></td>
<td class="stat-value">82,8</td>
<td>74,1</td>
<td class="highlight-positive">+8,7</td>
</tr>
<tr>
<td><strong>S32: Servis hizmeti kalitesi yeterlidir</strong></td>
<td class="stat-value">74,0</td>
<td>67,7</td>
<td class="highlight-positive">+6,3</td>
</tr>
</tbody>
</table>

<h3>2.2. Geliştirilmesi Gereken Alanlar</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Park ve Bahçeler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S36: Kamu kurumlarında çalışmayı tavsiye ederim</strong></td>
<td class="stat-value">84,9</td>
<td>90,7</td>
<td class="highlight">-5,8</td>
</tr>
<tr>
<td><strong>S35: Topluma hizmet etmekten gurur duyuyorum</strong></td>
<td class="stat-value">88,0</td>
<td>94,5</td>
<td class="highlight">-6,5</td>
</tr>
<tr>
<td><strong>S8: Duygusal olarak zorlayıcı durumlarla karşılaşırım</strong></td>
<td class="stat-value">77,7</td>
<td>70,8</td>
<td class="highlight-critical">+6,9</td>
</tr>
<tr>
<td><strong>S11: Zaman sıkışıklığı yaşarım</strong></td>
<td class="stat-value">72,9</td>
<td>64,7</td>
<td class="highlight-critical">+8,2</td>
</tr>
<tr>
<td><strong>S9: Görev yükü fazladır</strong></td>
<td class="stat-value">79,3</td>
<td>70,4</td>
<td class="highlight-critical">+8,9</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Park ve Bahçeler Müdürlüğü, fiziksel koşullar ve kurumsal hizmetlerde belediyenin en yüksek skorlarına sahiptir: yemekhane (S30: %70,3, +13,1), ortak alanlar (S29: %82,4, +12,0), ücret (S34: %79,7, +10,7) ve ısıtma/soğutma (S27: %82,8, +8,7). Bu durum, saha çalışması yapan personelin lojistik ihtiyaçlarının karşılandığına işaret etmektedir. Ancak iş stresi/yükü yüksektir - görev yükü (S9: %79,3, +8,9), zaman sıkışıklığı (S11: %72,9, +8,2) ve duygusal zorlayıcılık (S8: %77,7, +6,9) belediye ortalamasının üzerindedir. Dikkat çekici bir bulgu, kamu hizmeti motivasyonunun düşük olmasıdır: "topluma hizmet gururu" (S35: %88,0, -6,5) ve "kamu kurumlarını tavsiye" (S36: %84,9, -5,8). Personel fiziksel koşullardan memnun ancak işin toplumsal değerini yeterince hissetmiyor olabilir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Park ve Bahçeler Müdürlüğü'nden <strong>hiç açık uçlu yorum alınmamıştır</strong> (56 katılımcıdan %0).</p>

<p><strong>Yorum Analizi:</strong> Büyük bir birim (56 katılımcı) olmasına rağmen hiç açık uçlu yorum gelmemesi dikkat çekicidir. Bu durum, ya personelin mevcut koşullardan memnun olduğunu ya da yazılı geri bildirim verme alışkanlığının düşük olduğunu gösterebilir. Saha çalışanlarının anket doldurma koşulları da bir etken olabilir.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>
<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Park ve Bahçeler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ruh Sağlığı Riski (Genel)</strong></td>
<td class="stat-value">58,1</td>
<td>52,2</td>
<td class="highlight-critical">+5,9</td>
<td class="highlight-critical">Yüksek (olumsuz)</td>
</tr>
<tr>
<td><strong>S46: Keyif Alamama</strong></td>
<td class="stat-value">58,3</td>
<td>56,1</td>
<td>+2,2</td>
<td>Ortalamanın hafif üzerinde</td>
</tr>
<tr>
<td><strong>S47: Üzgün/Çökkün Hissetme</strong></td>
<td class="stat-value">62,0</td>
<td>50,9</td>
<td class="highlight-critical">+11,1</td>
<td class="highlight-critical">Yüksek (olumsuz)</td>
</tr>
<tr>
<td><strong>S48: Gergin/Kaygılı Hissetme</strong></td>
<td class="stat-value">59,8</td>
<td>50,8</td>
<td class="highlight-critical">+9,0</td>
<td class="highlight-critical">Yüksek (olumsuz)</td>
</tr>
<tr>
<td><strong>S49: Endişe Kontrolünde Zorluk</strong></td>
<td class="stat-value">52,6</td>
<td>50,9</td>
<td>+1,7</td>
<td>Ortalamanın hafif üzerinde</td>
</tr>
<tr>
<td><strong>Sigara Kullanımı</strong></td>
<td class="stat-value">39,6</td>
<td>44,9</td>
<td class="highlight-positive">-5,3</td>
<td class="highlight-positive">Ortalamanın altında (olumlu)</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Park ve Bahçeler Müdürlüğü personelinin ruh sağlığı risk göstergeleri belediye ortalamasının üzerindedir (olumsuz). Özellikle <strong>üzgün/çökkün hissetme (+11,1)</strong> ve <strong>gergin/kaygılı hissetme (+9,0)</strong> skorları dikkat çekici düzeyde yüksektir. Yüksek iş stresi/yükü (%76,3) ile bu bulgular tutarlıdır. Sigara kullanımı (%39,6) ortalamaya yakın düzeydedir.</p>

<h2>5. Sosyal Medya Takip Oranları</h2>
<table>
<thead>
<tr>
<th>Platform</th>
<th>Park ve Bahçeler (%)</th>
<th>Belediye Ort. (%)</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">83,3</td>
<td>81,0</td>
<td class="highlight-positive">+2,3</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">79,2</td>
<td>76,9</td>
<td class="highlight-positive">+2,3</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">31,3</td>
<td>31,1</td>
<td class="highlight-positive">+0,2</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">33,3</td>
<td>29,3</td>
<td class="highlight-positive">+4,0</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">43,8</td>
<td>42,8</td>
<td class="highlight-positive">+1,0</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">39,6</td>
<td>39,6</td>
<td>0,0</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">8,3</td>
<td>17,8</td>
<td class="highlight">-9,5</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">6,3</td>
<td>17,6</td>
<td class="highlight-critical">-11,3</td>
</tr>
</tbody>
</table>

<p><strong>Sosyal Medya Değerlendirmesi:</strong> Park ve Bahçeler Müdürlüğü, Instagram, Twitter/X ve Facebook platformlarında belediye ortalamasının üzerinde veya eşit takip oranlarına sahipken, NextSosyal'de belirgin düşüklük (-9,5 ve -11,3) görülmektedir.</p>

<!-- ==================== #122 - PLAN VE PROJE MÜDÜRLÜĞÜ ==================== -->

<div style="page-break-before: always;"></div>`
        },
        "ruhsat_denetim": {
            name: "Ruhsat ve Denetim Müdürlüğü",
            html: `<h1>Ruhsat ve Denetim Müdürlüğü - Detaylı Analiz Raporu</h1>

<h2>Temel Göstergeler</h2>

<p style="margin-bottom: 1.5em; line-height: 1.6; color: #4A4A4A; background: linear-gradient(135deg, #FBF7EF 0%, #F5EFE4 100%); padding: 1em 1.2em; border-left: 4px solid #C86A3C; border-radius: 0 8px 8px 0;"><span style="font-weight: 700; color: #C86A3C; font-size: 1.1em;">Sonuç:</span> Ruhsat ve Denetim Müdürlüğü, düşük iş stresi/yükü ve güçlü kurum desteği dengesine sahip, işlevsel bir yapıda faaliyet göstermektedir. Ruhsat ve Denetim Müdürlüğüne göre eğitim faaliyetlerinin artırılması izlenmesi gereken alan olarak öne çıkmaktadır.</p>

<table class="indicators-table">
    <thead>
        <tr>
            <th style="width:45%;">Gösterge</th>
            <th style="width:18%;">Müdürlük</th>
            <th style="width:18%;">Belediye Ort.</th>
            <th style="width:19%;">Fark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="label"><strong>Toplam Personel / Katılım</strong></td>
            <td class="value">12/12 kişi (%100)</td>
            <td class="avg">%70,4</td>
            <td class="diff highlight-positive">+29,6</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Genel Memnuniyet</strong>
                <span class="label-desc">("Bu kurumda çalışmaktan genel olarak memnunum" sorusuna verilen yanıtların skoru)</span>
            </td>
            <td class="value" style="font-size:12pt;">%90,9</td>
            <td class="avg">%90,8</td>
            <td class="diff highlight-positive">+0,1</td>
        </tr>
        <tr>
            <td class="label">
                <strong>İş Stresi/Yükü</strong>
                <span class="label-desc">(iş yoğunluğu/yükü, görevin zorlayıcılığı, zaman sıkışıklığı, duygusal yorucu durumlar)</span>
            </td>
            <td class="value">%59,1</td>
            <td class="avg">%69,1</td>
            <td class="diff highlight-positive">-10,0 ↓ (Düşük)</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Kurum Desteği</strong>
                <span class="label-desc">(yönetici ilişkileri, çalışma arkadaşları desteği, çalışma koşulları vb.)</span>
            </td>
            <td class="value">%85,0</td>
            <td class="avg">%82,3</td>
            <td class="diff highlight-positive">+2,7</td>
        </tr>
        <tr class="highlight-row">
            <td class="label">
                <strong style="font-size:10.5pt;">Denge (Kurum Desteği - İş Stresi/Yükü)</strong>
                <span class="label-desc">(kurum desteği - iş stresi/yükü; pozitif değer çalışanların iş stresi/yüküni karşılayacak düzeyde destek aldığını gösterir)</span>
            </td>
            <td class="value" style="font-size:12pt;">+25,9</td>
            <td class="avg">+13,2</td>
            <td class="diff highlight">+12,7 (Çok sağlıklı)</td>
        </tr>
        <tr>
            <td class="label">
                <strong>Ruh Sağlığı Riski</strong>
                <span class="label-desc">(Ruh sağlığı taraması testi: keyif alamama, üzgün/çökkün hissetme, gerginlik/kaygı, endişeleri kontrol edememe)</span>
            </td>
            <td class="value">%38,4</td>
            <td class="avg">%52,2</td>
            <td class="diff highlight-positive">-13,8 (BELEDİYE REKORU!) ✓</td>
        </tr>
        <tr>
            <td class="label"><strong>Sigara Kullanımı</strong></td>
            <td class="value">%36,4</td>
            <td class="avg">%44,9</td>
            <td class="diff highlight-positive">-8,5 ↓</td>
        </tr>
        <tr>
            <td class="label"><strong>Açık Uçlu Yorum Yapan</strong></td>
            <td class="value">0 kişi (%0)</td>
            <td class="avg">-</td>
            <td class="diff">-</td>
        </tr>
    </tbody>
</table>

<div class="summary-box">
<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #2E7D32; color:#2E7D32; font-size:1.05em; font-weight:600;">✓ Güçlü Yönler</h4>
<ul style="margin-top:0.3em;">
<li><strong>Görev netliği (%96,0):</strong> Belediyenin 2. en yüksek skoru (+9,4 puan). Küçük ve uzmanlaşmış bir birimin avantajı.</li>
<li><strong>Yönetici ilişkileri (%95,5):</strong> Tüm yönetici sorularında (ulaşılabilirlik, geri bildirim, destek, eşit yaklaşım, saygı) %95+ skorlar.</li>
<li><strong>Çalışma arkadaşları uyumu (%93,2):</strong> Ekip dayanışması ve bilgi paylaşımı güçlü.</li>
<li><strong>İş-kişi uyumu (%93,9):</strong> Personel yaptığı işi anlamlı buluyor ve yetenek-görev uyumu yüksek.</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #E65100; color:#E65100; font-size:1.05em; font-weight:600;">⚠ Geliştirilmesi Gereken Alanlar</h4>
<ul style="margin-top:0.3em;">
<li><strong>Eğitim & Gelişim (%68,2):</strong> Belediye ortalamasının 7,6 puan altında. Özellikle eğitim faaliyetleri yeterliliği (%61,4) düşük.</li>
<li><strong>Performans değerlendirme adalet algısı (%72,7):</strong> Belediye ortalamasının 4,4 puan altında.</li>
<li><strong>Kamu Hizmeti Motivasyonu (%87,1):</strong> Belediye ortalamasının 5,7 puan altında (29. sıra).</li>
</ul>

<h4 style="margin:1.5em 0 0.5em; padding:0.35em 0.75em; border-left:4px solid #1565C0; color:#1565C0; font-size:1.05em; font-weight:600;">◆ Dikkat Çeken Bulgular</h4>
<ul style="margin-top:0.3em;">
<li><strong>Düşük stres - Yüksek memnuniyet ilişkisi:</strong> En düşük iş stresi/yüküne (%59,1) sahip birimlerden biri, aynı zamanda yüksek memnuniyet (%90,9) ve düşük ruh sağlığı riski (%38,4) sergiliyor. JD-R (İş Talepleri-Kaynakları) modeli ile uyumlu.</li>
<li><strong>Küçük ekip - Net görev tanımı:</strong> 12 kişilik birimde sorumluluk alanları net tanımlanmış (%96,0). Küçük ekiplerde görev dağılımının daha kolay yapılabildiği görülüyor.</li>
<li><strong>Açık uçlu yorum yokluğu:</strong> Hiçbir çalışan açık uçlu yorum bölümünü doldurmamış. Bu durum, belirgin şikayet veya öneri bulunmadığına işaret edebilir.</li>
<li><strong>Eğitim-memnuniyet ayrışması:</strong> Eğitim & Gelişim düşük (%68,2) olmasına rağmen genel memnuniyet yüksek (%90,9). Personel eğitim eksikliğinden ziyade iş ilişkilerine daha fazla önem veriyor olabilir.</li>
</ul>

</div>

<h2>1. Tema Bazlı Performans Analizi</h2>
<table>
<thead>
<tr>
<th>Tema</th>
<th>Skor (%)</th>
<th>Belediye Ort.</th>
<th>Fark</th>
<th>Sıralama</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Görev-Rol Netliği</strong></td>
<td class="stat-value">96,0</td>
<td class="stat-value">86,6</td>
<td class="highlight-positive">+9,4</td>
<td class="highlight-positive">2/30</td>
<td class="highlight-positive">Çok güçlü netlik</td>
</tr>
<tr>
<td><strong>Yöneticilerle İlişkiler</strong></td>
<td class="stat-value">95,5</td>
<td class="stat-value">86,8</td>
<td class="highlight-positive">+8,7</td>
<td class="highlight-positive">3/30</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>İş-Kişi Uyumu</strong></td>
<td class="stat-value">93,9</td>
<td class="stat-value">91,3</td>
<td class="highlight-positive">+2,6</td>
<td class="highlight-positive">7/30</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Çalışma Arkadaşları</strong></td>
<td class="stat-value">93,2</td>
<td class="stat-value">86,9</td>
<td class="highlight-positive">+6,3</td>
<td class="highlight-positive">5/30</td>
<td class="highlight-positive">Çok güçlü</td>
</tr>
<tr>
<td><strong>Kamu Hizmeti Motivasyonu</strong></td>
<td class="stat-value">87,1</td>
<td class="stat-value">92,8</td>
<td class="highlight-warning">-5,7</td>
<td class="highlight-positive">29/30</td>
<td>Güçlü</td>
</tr>
<tr>
<td><strong>Kurum İçi İletişim</strong></td>
<td class="stat-value">79,5</td>
<td class="stat-value">79,8</td>
<td>-0,3</td>
<td class="highlight-positive">17/30</td>
<td>Orta-güçlü</td>
</tr>
<tr>
<td><strong>Yetkinlik & Performans</strong></td>
<td class="stat-value">75,6</td>
<td class="stat-value">77,2</td>
<td>-1,6</td>
<td class="highlight-positive">18/30</td>
<td>Orta</td>
</tr>
<tr>
<td><strong>Çalışma Koşulları</strong></td>
<td class="stat-value">73,7</td>
<td class="stat-value">72,2</td>
<td class="highlight-positive">+1,5</td>
<td class="highlight-positive">13/30</td>
<td>Orta</td>
</tr>
<tr>
<td><strong>Eğitim & Gelişim</strong></td>
<td class="stat-value">68,2</td>
<td class="stat-value">75,8</td>
<td class="highlight-warning">-7,6</td>
<td class="highlight-positive">25/30</td>
<td class="highlight-critical">Zayıf - İyileştirme gerekli</td>
</tr>
<tr>
<td><strong>İş Yükü/Stresi (İş Yükü)</strong></td>
<td class="stat-value">59,1</td>
<td class="stat-value">69,1</td>
<td class="highlight-critical">-10,0</td>
<td class="highlight-positive">24/30</td>
<td class="highlight-positive">DÜŞÜK - Rahat tempo</td>
</tr>
</tbody>
</table>

<p><strong>Tema Değerlendirmesi:</strong> Ruhsat ve Denetim Müdürlüğü, görev-rol netliği (2/30), yönetici ilişkileri (3/30), ekip uyumu (5/30) ve iş-kişi uyumu (7/30) temalarında belediyenin en üst sıralarında yer almaktadır. Düşük iş stresi/yükü (%59,1) ile yüksek kurum desteği (%85,0) kombinasyonu +25,9 puanlık güçlü bir denge oluşturmakta ve bu denge, belediyenin en düşük ruh sağlığı riski (%38,4) ile doğrudan ilişkilidir - JD-R modeli açısından ideal bir profil. Küçük ekip yapısı (12 kişi) görev dağılımını netleştirmiş, yönetici erişilebilirliğini artırmış görünmektedir. Tek zayıf alan eğitim & gelişim (%68,2, -7,6) olup, bu eksiklik kamu hizmeti motivasyonunun (%87,1, 29/30) görece düşük kalmasıyla ilişkili olabilir - personel mevcut işinden memnun ancak mesleki gelişim fırsatları sınırlı algılanmaktadır.</p>

<h2>2. Soru Bazlı Detaylı Bulgular</h2>

<h3>2.1. En Yüksek Skorlar (%95+)</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Skor</th>
<th>Belediye Ort.</th>
<th>Fark</th>
<th>Yorum</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S12:</strong> Amirime kolaylıkla ulaşabilirim</td>
<td class="stat-value">%97,7</td>
<td>%92,2</td>
<td class="highlight-positive">+5,5</td>
<td>ÇOK YÜKSEK erişilebilirlik</td>
</tr>
<tr>
<td><strong>S13:</strong> Amirimin geri bildirimleri gelişimime yardımcı</td>
<td class="stat-value">%97,7</td>
<td>%86,5</td>
<td class="highlight-positive">+11,2</td>
<td>Etkili liderlik</td>
</tr>
<tr>
<td><strong>S14:</strong> Sorun yaşadığımda amirim destek olur</td>
<td class="stat-value">%97,7</td>
<td>%86,7</td>
<td class="highlight-positive">+11,0</td>
<td>Destekleyici yönetim</td>
</tr>
<tr>
<td><strong>S5:</strong> Hangi işlerin kimin sorumluluğunda olduğu net</td>
<td class="stat-value">%97,7</td>
<td>%86,6</td>
<td class="highlight-positive">+11,1</td>
<td>ÇOK YÜKSEK rol netliği</td>
</tr>
<tr>
<td><strong>S6:</strong> Yetki ve karar sınırları konusunda belirsizlik yaşamam</td>
<td class="stat-value">%97,7</td>
<td>%87,0</td>
<td class="highlight-positive">+10,7</td>
<td>Net yetki sınırları</td>
</tr>
<tr>
<td><strong>S4:</strong> Görev tanımım açıkça belirlenmiştir</td>
<td class="stat-value">%95,5</td>
<td>%88,4</td>
<td class="highlight-positive">+7,1</td>
<td>Çok net görev tanımı</td>
</tr>
<tr>
<td><strong>S2:</strong> Bu işi seçtiğim için mutluyum</td>
<td class="stat-value">%95,5</td>
<td>%90,7</td>
<td class="highlight-positive">+4,8</td>
<td>Yüksek iş tatmini</td>
</tr>
<tr>
<td><strong>S3:</strong> Yaptığım işi anlamlı buluyorum</td>
<td class="stat-value">%95,5</td>
<td>%92,4</td>
<td class="highlight-positive">+3,1</td>
<td>Güçlü anlam duygusu</td>
</tr>
<tr>
<td><strong>S21:</strong> İş arkadaşlarımın desteği işimi kolaylaştırır</td>
<td class="stat-value">%95,5</td>
<td>%85,6</td>
<td class="highlight-positive">+9,9</td>
<td>Güçlü ekip desteği</td>
</tr>
</tbody>
</table>

<p>Ruhsat ve Denetim Müdürlüğü, yönetici-çalışan ilişkileri ve rol netliğinde <strong>5 soruda %97,7 skor</strong> almıştır. Özellikle yönetici erişilebilirliği, geri bildirim kalitesi ve destek mekanizmaları yüksek düzeydedir.</p>

<h3>2.2. İyileştirme Alanları</h3>
<table>
<thead>
<tr>
<th>Soru</th>
<th>Skor</th>
<th>Belediye Ort.</th>
<th>Fark</th>
<th>Yorum</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S43:</strong> Eğitimlerin katkısı olduğunu düşünüyorum</td>
<td class="stat-value">%75,0</td>
<td>%76,8</td>
<td class="">-1,8</td>
<td>Eğitim etkinliği algısı</td>
</tr>
<tr>
<td><strong>S41:</strong> Değerlendirme sonrası yapıcı geri bildirim alırım</td>
<td class="stat-value">%72,7</td>
<td>%74,2</td>
<td class="">-1,5</td>
<td>Performans geri bildirimi</td>
</tr>
<tr>
<td><strong>S39:</strong> Performans değerlendirme kriterleri adil</td>
<td class="stat-value">%72,7</td>
<td>%77,2</td>
<td class="highlight">-4,5</td>
<td>Değerlendirme adalet algısı</td>
</tr>
<tr>
<td><strong>S30:</strong> Yemekhane kalitesinden memnunum</td>
<td class="stat-value">%62,5</td>
<td>%57,2</td>
<td class="highlight-positive">+5,3</td>
<td>Ortalamadan iyi</td>
</tr>
<tr>
<td><strong>S42:</strong> Eğitim faaliyetlerini yeterli buluyorum</td>
<td class="stat-value">%61,4</td>
<td>%74,8</td>
<td class="highlight-critical">-13,4</td>
<td>Eğitim yeterliliği</td>
</tr>
</tbody>
</table>

<p><strong>Soru Bazlı Değerlendirme:</strong> Yönetici ilişkileri sorularının 5'inde %97,7 tam skor alınması (S12 erişilebilirlik, S13 geri bildirim, S14 destek, S17 saygı, S5/S6 rol netliği), küçük ekiplerde lider-çalışan yakınlığının somut göstergesidir. Düşük iş stresi/yükü göstergeleri - duygusal zorlayıcılık (S8: %54,5, -16,3), görev yükü (S9: %61,4, -9,0), vatandaş yoğunluğu (S10: %63,6, -7,0), zaman sıkışıklığı (S11: %56,8, -7,9) - belediye ortalamasının belirgin altında olup, ruh sağlığı göstergelerindeki olumlu tabloya (%38,4 risk) doğrudan katkı sağlamaktadır. Servis hizmeti (S32: %45,5, -22,2) belediyenin en düşük skorlarından biri olup, eğitim yeterliliği (S42: %61,4, -13,4) ile birlikte kritik iyileştirme alanlarını oluşturmaktadır. Kamu hizmeti motivasyonu göstergeleri (S36, S37) görece düşük kalması, eğitim eksikliği ile ilişkili olabilir.</p>

<h2>3. Açık Uçlu Yorumların Analizi</h2>

<p>Ruhsat ve Denetim Müdürlüğü'nden <strong>hiçbir çalışan açık uçlu yorum yazmamıştır</strong>. Bu durum, iki şekilde yorumlanabilir:</p>

<ul>
<li><strong>Yüksek memnuniyet göstergesi:</strong> Ekip, mevcut çalışma koşullarından memnun olduğu için şikayet veya öneri ihtiyacı duymamaktadır.</li>
<li><strong>Sessiz kalan çalışanlar:</strong> Alternatif olarak, küçük bir ekip olduğu için anonim kalma endişesi nedeniyle yorum yapmaktan çekinmiş olabilirler.</li>
</ul>

<p>Ancak, %90,9 memnuniyet, %38,4 gibi belediyenin en düşük ruh sağlığı riski ve %100 katılım oranı, ilk yorumun daha muhtemel olduğunu işaret etmektedir. Ekip, anketi ciddiye almış ancak şikayet edecek önemli bir konu bulmamıştır.</p>

<h2>4. Ruh Sağlığı Göstergeleri</h2>

<table>
<thead>
<tr>
<th>Gösterge</th>
<th>Skor (%)</th>
<th>Belediye Ort.</th>
<th>Fark</th>
<th>Değerlendirme</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>S46:</strong> Keyif Alamama</td>
<td class="stat-value">43,2</td>
<td>56,1</td>
<td class="highlight-positive">-12,9</td>
<td class="highlight-positive">En düşük oran</td>
</tr>
<tr>
<td><strong>S47:</strong> Üzgün/Çökkün Hissetme</td>
<td class="stat-value">34,1</td>
<td>50,9</td>
<td class="highlight-positive">-16,8</td>
<td class="highlight-positive">En düşük oran</td>
</tr>
<tr>
<td><strong>S48:</strong> Gergin/Kaygılı Hissetme</td>
<td class="stat-value">35,0</td>
<td>50,8</td>
<td class="highlight-positive">-15,8</td>
<td class="highlight-positive">En düşük oran</td>
</tr>
<tr>
<td><strong>S49:</strong> Endişe Kontrolünde Zorluk</td>
<td class="stat-value">40,9</td>
<td>50,9</td>
<td class="highlight-positive">-10,0</td>
<td class="highlight-positive">En düşük oran</td>
</tr>
</tbody>
</table>

<p><strong>Ruh Sağlığı Değerlendirmesi:</strong> Tüm psikolojik sıkıntı göstergeleri belediye ortalamasının belirgin altındadır. Düşük iş stresi/yükü (%59,1), güçlü yönetici desteği (%95,5) ve net rol tanımları (%96,0) kombinasyonu, bu olumlu tablonun temel açıklayıcılarıdır - JD-R modeli ile tutarlı bir profil.</p>

<h2>5. Sosyal Medya İletişim Göstergeleri</h2>

<table>
<thead>
<tr>
<th>Platform</th>
<th>Skor (%)</th>
<th>Belediye Ort.</th>
<th>Fark</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Instagram Belediye</strong></td>
<td class="stat-value">72,7</td>
<td>81,0</td>
<td class="highlight">-8,3</td>
</tr>
<tr>
<td><strong>Instagram Başkan</strong></td>
<td class="stat-value">72,7</td>
<td>76,9</td>
<td class="">-4,2</td>
</tr>
<tr>
<td><strong>Twitter/X Belediye</strong></td>
<td class="stat-value">36,4</td>
<td>31,1</td>
<td class="highlight-positive">+5,3</td>
</tr>
<tr>
<td><strong>Twitter/X Başkan</strong></td>
<td class="stat-value">36,4</td>
<td>29,3</td>
<td class="highlight-positive">+7,1</td>
</tr>
<tr>
<td><strong>Facebook Belediye</strong></td>
<td class="stat-value">9,1</td>
<td>42,8</td>
<td class="highlight-critical">-33,7</td>
</tr>
<tr>
<td><strong>Facebook Başkan</strong></td>
<td class="stat-value">9,1</td>
<td>39,6</td>
<td class="highlight-critical">-30,5</td>
</tr>
<tr>
<td><strong>NextSosyal Belediye</strong></td>
<td class="stat-value">9,1</td>
<td>17,8</td>
<td class="highlight">-8,7</td>
</tr>
<tr>
<td><strong>NextSosyal Başkan</strong></td>
<td class="stat-value">9,1</td>
<td>17,6</td>
<td class="highlight">-8,5</td>
</tr>
</tbody>
</table>

<p>Sosyal medya takip oranları belediye ortalamasının altındadır. Instagram kullanımı makul düzeyde (%72,7) ancak Facebook ve NextSosyal kullanımı düşüktür. Bu, ekibin sosyal medyaya yoğun bağımlılığı olmadığını gösterebilir - ancak kurumsal iletişim açısından bir iyileştirme alanıdır.</p>`
        },
    }
};
