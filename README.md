# 🌿 BitterLiebe Expert Team – Shopify Theme Section

Ein professioneller, dynamischer **Shopify 2.0 Section** inspiriert von der Marke **BitterLiebe**.  
Erstellt von **Payam Abdolmohammadi** *(Fullstack Developer – Laravel & Shopify Integration)*.

---

## 🚀 Features

✅ **Dynamische Section „Unser Experten-Team“**  
- Bis zu **12 Expertenkarten** mit Bild, Name, Rolle und Kurzbeschreibung  
- Optionaler **CTA-Button** („Mehr über unser Team erfahren“)  
- **Voll responsive** (4 Spalten auf Desktop, 2 auf Tablet, 1 auf Mobile)  
- **Auto-Center Snap Slider** auf Mobilgeräten mit Swipe-Unterstützung  
- **„Mehr erfahren“-Links** führen zu individuellen Expertenseiten  
- **SEO-optimierte Alt-Texte**, Lazy Loading & semantische Struktur  
- **Modernes Design** – hell, clean, markenkonform zu BitterLiebe  

---

## 🧩 Technische Struktur

| Datei | Beschreibung |
|-------|---------------|
| `/sections/expert-team.liquid` | Haupt-Section mit Grid-Layout & dynamischen Blocks |
| `/assets/section-expert-team.css` | Stylesheet für Layout, Grid und Slider |
| `/assets/expert-team-mobile.js` | Logik für mobile Slider-Navigation (Swipe & Buttons) |
| `/templates/page.expert.liquid` | Vorlage für individuelle Expertenseiten |
| `/assets/images/` | Bilder der Experten |
| `README.md` | Diese Dokumentation |
| `CHANGELOG.md` | Versionierung und Updates |

---

## ⚙️ Shopify Integration

1️⃣ **In Shopify öffnen:**  
   → Admin → Online-Shop → Themes → „Code bearbeiten“  

2️⃣ **Dateien hinzufügen:**  
   - `expert-team.liquid` in `/sections/`  
   - `section-expert-team.css` und `expert-team-mobile.js` in `/assets/`  

3️⃣ **Section aktivieren:**  
   - Im Theme-Editor: „+ Abschnitt hinzufügen“ → „Unser Experten-Team“ auswählen  

4️⃣ **Inhalte pflegen:**  
   - Bilder, Namen, Rollen und Texte direkt im Editor hinzufügen  
   - Optional: Button-Link zum Team oder zu Detailseiten setzen  

---

## 🧑‍💻 Beispiel-Team

| Name | Rolle | Link |
|------|--------|------|
| **Dr. Laura Stein** | Ernährungswissenschaftlerin (M.Sc.) | `/pages/dr-laura-stein` |
| **Markus Feldmann** | Produktentwickler & Qualitätsmanager | `/pages/markus-feldmann` |
| **Anna Keller** | Heilpraktikerin & Ernährungsexpertin | `/pages/anna-keller` |
| **Tobias Müller** | Coach für ganzheitliche Gesundheit | `/pages/tobias-mueller` |

---

## 🧠 Technische Highlights

- **Auto-Center Snap Slider:** Flüssiger horizontaler Scroll auf mobilen Geräten  
- **Smooth Scroll Behavior:** Pfeilnavigation mit `scrollBy()` und dynamischem Button-Disable  
- **Reaktives CSS Grid:** Automatische Anpassung an Bildschirmgrößen  
- **Performant:** Lazy Load, minimale DOM-Manipulation, kein jQuery  
- **Barrierefreiheit (A11Y):** `aria-label` + `role="region"` + Tastaturnavigation  

---

## 🛠 Versionierung

| Version | Änderungen |
|----------|-------------|
| **v1.0.0** | Erste Veröffentlichung: Experten-Team-Section mit Grid + Mobile Slider |
| **v1.1.0** | Auto-Center Snap + Navigation Buttons + Keyboard Support |
| **v1.2.0** | SEO & Accessibility Optimierung, Lazy Loading, Style-Refactor |

---

## 🧑‍🎨 Entwickelt von

**Payam Abdolmohammadi**  
Fullstack Developer (Laravel, PHP, Shopify)  
📍 Stuttgart, Deutschland  
📧 [payamabdolmohammadii@gmail.com](mailto:payamabdolmohammadii@gmail.com)  
🌐 [GitHub](https://github.com/payamabdolmohammadi)

---

## 💚 License

Dieses Projekt basiert auf dem **Shopify Dawn Theme**.  
Lizenz: [MIT License](LICENSE)

---

> _„Code clean, responsive und markengetreu – wie BitterLiebe selbst.“_ 🌱
