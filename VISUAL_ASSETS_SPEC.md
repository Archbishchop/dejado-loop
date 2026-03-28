# DejaDo Loop — Visual Assets Specification

**App:** DejaDo Loop  
**Category:** Habit tracker with AI affirmations and streak tracking  
**Brand Colors:** Electric Teal `#00B4A6` · Deep Navy `#0D1B2A` · Warm Gold `#F5C518`  
**Typography:** Nunito (headings) · Inter (body)  
**Target Feel:** Modern, clean, motivating — premium wellness tier (Headspace × Streaks)  

---

## TABLE OF CONTENTS

1. [App Icon Specification](#1-app-icon-specification)
2. [Screenshot Storyboard — Apple App Store](#2-screenshot-storyboard--apple-app-store)
3. [Screenshot Storyboard — Google Play](#3-screenshot-storyboard--google-play)
4. [Feature Graphic — Google Play](#4-feature-graphic--google-play)
5. [Splash Screen](#5-splash-screen)
6. [Tools Recommendation](#6-tools-recommendation)
7. [Brand Token Quick Reference](#7-brand-token-quick-reference)

---

## 1. APP ICON SPECIFICATION

### 1.1 Technical Requirements

| Platform | Size | Shape |
|---|---|---|
| iOS (App Store) | 1024×1024px | Square with no rounding (OS applies squircle mask) |
| Android (Google Play) | 512×512px | Adaptive icon: 108×108dp canvas, safe zone 72dp circle |
| Android Adaptive — Foreground | 108×108dp | Centered logo on transparent layer |
| Android Adaptive — Background | 108×108dp | Solid or gradient fill, bleeds to edge |

---

### 1.2 Shape and Background

The icon uses a **deep teal-to-navy radial gradient** background — Electric Teal `#00B4A6` at the center, bleeding outward into Deep Navy `#0D1B2A` at the corners. This gives the icon a sense of depth, as if glowing from within. The gradient angle is roughly radial from the center-upper-left, creating a soft luminous focal point.

No hard borders. No drop shadows on the background layer itself. The icon is bold and borderless — confident, not ornate.

---

### 1.3 Icon Element (Symbol / Graphic)

**Primary symbol:** A stylized **looping arrow formed from two overlapping curved arcs**, rendered as a single continuous stroke, evoking the concepts of repetition, momentum, and return — the core metaphor of "loop" in the app name. The loop shape subtly resembles the infinity symbol (∞) rotated 90°, but with a clear directional flow (clockwise), suggesting progress rather than stasis.

Nested within the loop's center (the visual "hole" of the figure-eight): a **small five-pointed star or spark** rendered in Warm Gold `#F5C518`, approximately 15–18% of the total icon width. This gold element:
- Anchors the eye to the center
- Represents the AI affirmation "spark" — the moment of motivation
- Differentiates the icon from generic loop/cycle icons

**Stroke treatment:** The loop arcs are thick, rounded-cap strokes — not filled shapes — rendered in white `#FFFFFF` at 100% opacity. Stroke width approximately 9–11% of icon width. This keeps the icon readable at small sizes (20px notification badges, home screen on crowded grids).

**Proportions:**
- Loop graphic occupies roughly 62% of the icon's bounding box
- Centered with a very slight upward offset (4% of height) to feel optically centered
- Gold spark sits exactly at the geometric center

---

### 1.4 Colors and Gradients

| Element | Color | Notes |
|---|---|---|
| Background gradient start | `#00B4A6` (Electric Teal) | Radial center |
| Background gradient end | `#0D1B2A` (Deep Navy) | Corners |
| Loop arcs | `#FFFFFF` (Pure White) | 100% opacity, rounded caps |
| Inner spark/star | `#F5C518` (Warm Gold) | 100% opacity |
| Optional glow behind spark | `#F5C518` at 25% opacity, blur 8px | Adds dimensionality without clutter |

**No additional colors.** The icon palette is deliberately minimal: three tones only. This creates instant visual identity at any size.

---

### 1.5 Typography

**No letterforms on the icon itself.** At 20×20px (notification badge), text becomes illegible noise. The symbol must be self-explanatory. The loop + spark communicates "repeat with reward" without words.

The app name "DejaDo Loop" appears only in the home screen label beneath the icon — rendered by the OS in the system font (San Francisco on iOS, Google Sans on Android). Do not attempt to control this label's appearance.

---

### 1.6 Emotional Intent

The icon should feel:
- **Confident** — bold strokes, no fussiness, immediate readability
- **Energetic but not aggressive** — the teal glow is warm, not electric-blue cold
- **Premium** — the restrained palette and centered composition signal quality
- **Inviting** — the looping motion implies a cycle the user wants to return to

It should not feel: gamified, childish, clinical, or over-designed.

---

### 1.7 Reference App Icons with Similar Style

| App | What to reference |
|---|---|
| **Headspace** | Centered, simple geometric symbol; bold background fill; zero clutter |
| **Streaks** | Minimal iconography that works perfectly at small sizes; strong use of color |
| **Calm** | Radial gradient backgrounds creating depth without photography |
| **Notion** | Confident single-element icon that reads instantly as a logo |
| **Things 3** | Soft but premium feel; single-color symbol on bold background |
| **Day One** | Warmth conveyed through color temperature, not imagery |

Key insight: all best-in-class wellness/productivity icons use **one symbol + one or two colors**. Complexity is the enemy of memorability.

---

### 1.8 AI Image Generation Prompts

Use these with Midjourney v6, DALL-E 3, or Adobe Firefly. For Midjourney, append `--ar 1:1 --style raw --v 6` to each prompt.

---

**Variation A — Clean & Geometric (Recommended starting point)**

> App icon design, minimal vector style, looping infinity arrow symbol made of two thick white rounded-stroke arcs, small gold five-pointed star at center, radial gradient background from electric teal #00B4A6 at center to deep navy #0D1B2A at corners, no text, no border, flat design, centered composition, premium wellness app aesthetic, clean and modern, isolated on white background for preview, 1024x1024 pixels

---

**Variation B — Glowing / Luminous feel**

> iOS app icon, 1024x1024, loop symbol composed of two curved white strokes forming a continuous flowing figure-eight path, warm gold spark glowing at the intersection of the arcs, dark navy-to-teal radial gradient background with subtle inner light bloom, premium productivity app, Headspace-inspired minimalism, no text, high contrast, depth achieved through gradient not shadows, vector-style render

---

**Variation C — Energetic / Motion-forward**

> Mobile app icon design, bold circular loop arrow motif in pure white thick rounded strokes with slight motion blur effect suggesting movement, small bright gold accent dot at loop center, background deep navy blue-teal gradient #0D1B2A to #00B4A6, clean edges, premium app store ready, motivational streak tracker, energetic yet refined, single-element composition, no gradients on the symbol itself, crisp white on dark

---

**Refinement tips:**
- If the AI adds text or excessive ornamentation: add `"no text, no decorative elements, no flourishes"` to the negative prompt
- If the result feels too busy: reduce the symbol to a single ring/arc first, then add complexity in iteration
- For Midjourney: `--no text, border, shadow, multiple elements` in the negative prompt
- Export at 1024×1024 minimum; scale down to test legibility at 60×60px before committing

---

## 2. SCREENSHOT STORYBOARD — APPLE APP STORE

**Spec:** 1290×2796px (iPhone 6.7" display), portrait orientation  
**Format:** PNG, sRGB color space  
**Count:** 5 screenshots  
**Layout principle:** Bold headline at top (~18% of height), phone mockup centered, supporting text near bottom. Each screenshot is a self-contained poster that also flows as a narrative sequence.

---

### Screenshot 1 — THE HOOK

**Headline:** `"You started strong.\nWhere did it go?"`  
**Subtitle:** `"Most habits fail in week two. DejaDo Loop is built for the long game."`

**Background:** Deep Navy `#0D1B2A` — full bleed, no gradient. Pure dark.

**Phone mockup screen content:**  
An empty habit dashboard — sparse, with three incomplete habit rings shown as greyed-out circles. A "streak broken" notification is visible in the status bar area. The date shown is a Monday (implying the weekend gap killed the streak). A small sad-face emoji system notification reads "Your 14-day streak ended." Mood: relatable disappointment.

**Overlay elements:**
- Headline text: Nunito ExtraBold, 68px, white `#FFFFFF`, centered, 2 lines, top 14% of screen
- A subtle horizontal red line (Electric Teal's complement, approximately `#FF6B6B`) crosses the streak counter — the "broken" visual metaphor. Line weight 2px, 60% opacity.
- Subtitle: Inter Regular, 32px, muted white `#FFFFFF` at 65% opacity, centered, below headline
- Small caption bottom: `"Sound familiar?"` in Warm Gold `#F5C518`, Inter Medium, 28px — a micro-moment of empathy

**Emotion:** Recognition. The user sees themselves.

---

### Screenshot 2 — THE SOLUTION

**Headline:** `"Loop back in.\nEvery single day."`  
**Subtitle:** `"DejaDo Loop makes returning to your habits effortless — with streaks, reminders, and AI that actually gets it."`

**Background:** Radial gradient — Electric Teal `#00B4A6` at top-center bleeding into Deep Navy `#0D1B2A` at the bottom. The gradient should feel like dawn breaking.

**Phone mockup screen content:**  
The main dashboard in active state: 4 habit rings with one fully completed (glowing teal), one at 75%, two at 50%. A prominent streak counter shows "Day 3 — You're back!" in Warm Gold. The UI is clean, spacious, rounded cards on a near-black surface. Smooth, premium.

**Overlay elements:**
- Headline: Nunito ExtraBold, 68px, white — centered, 2 lines
- A looping arrow icon (the app icon symbol) in Warm Gold `#F5C518`, 80×80px, centered above the headline as a visual anchor
- Subtitle: Inter Regular, 30px, white at 70% opacity
- Three micro-badges arranged horizontally near the bottom, each a rounded pill:
  - `✓ Daily Streaks` — teal fill
  - `✓ AI Affirmations` — gold fill
  - `✓ Smart Reminders` — navy fill with white border
- Badge font: Inter SemiBold, 24px, white

**Emotion:** Relief and possibility. The return feels easy.

---

### Screenshot 3 — FEATURE HIGHLIGHT: STREAKS & HEATMAP

**Headline:** `"Your consistency,\nvisualized."`  
**Subtitle:** `"Watch your streaks grow. The heatmap never lies — and neither does your momentum."`

**Background:** Deep Navy `#0D1B2A` full bleed. The phone mockup's teal glow provides all the color.

**Phone mockup screen content:**  
The Statistics / Heatmap view. A GitHub-style contribution heatmap fills most of the screen — a 7×10 grid of small squares colored from dark navy (0 completions) through mid-teal (partial) to full Electric Teal (100%). The past 4 weeks show a strong pattern with one visible gap 18 days ago. Beneath the heatmap: three stat cards —
  - `🔥 Current Streak: 21 days`
  - `⚡ Best Streak: 34 days`
  - `📅 Completion Rate: 87%`
  
Numbers are large, Nunito Bold, Warm Gold `#F5C518`. Labels in Inter Regular, muted white.

**Overlay elements:**
- Headline: Nunito ExtraBold, 68px, white, centered, top of frame
- A callout bubble (rounded rectangle, white fill, navy text) points to the longest streak block in the heatmap with a curved line: `"Your best run →"` — Inter Medium, 26px, navy
- Subtitle: Inter Regular, 30px, white 65% opacity
- Bottom-left corner: small annotation `"70 days tracked"` — Inter Regular, 24px, gold

**Emotion:** Pride. Ownership. The data is yours and it looks impressive.

---

### Screenshot 4 — FEATURE HIGHLIGHT: AI AFFIRMATIONS

**Headline:** `"Words that actually\nfit your day."`  
**Subtitle:** `"DejaDo's AI learns what motivates you — not generic quotes, but messages tuned to your habits and history."`

**Background:** Soft gradient — Deep Navy `#0D1B2A` to a very slightly lightened `#0F2235`. Subtle enough to not compete with the content.

**Phone mockup screen content:**  
The AI Affirmation modal/card, displayed in a clean bottom-sheet overlay over the dashboard. The card design:
  - Background: white-on-navy glassmorphism card (white at 8% opacity, blur 20px, 1px white border at 15% opacity)
  - A small AI sparkle icon (gold, 32px) in the top-left corner
  - Large quote text in Nunito SemiBold, white, 22px: `"You showed up 6 days straight last week. That's not luck — that's character. Today is just the next chapter."`
  - Attribution line: `"— DejaDo AI, personalized for you"` in Inter Italic, muted white, 16px
  - Two action buttons: `"Save"` (gold fill) and `"Next"` (outline, white border)

**Overlay elements:**
- Headline: Nunito ExtraBold, 68px, white, centered
- A decorative large quotation mark `"` in Electric Teal `#00B4A6` at 20% opacity, 200px tall, positioned behind the headline — adds depth without clutter
- Subtitle: Inter Regular, 30px, white 65%
- Small badge at bottom: `"Powered by AI · Personalized daily"` — pill shape, teal fill, white Inter SemiBold 22px
- An annotation arrow points to the quote card: `"Changes every morning"` in gold, Inter Medium 24px

**Emotion:** Delight and personal connection. The AI feels like it knows you.

---

### Screenshot 5 — PRO CTA / SOCIAL PROOF

**Headline:** `"Join 50,000+\nhabit builders."`  
**Subtitle:** `"Upgrade to DejaDo Pro for unlimited habits, advanced insights, and priority AI coaching."`

**Background:** Teal-to-gold diagonal gradient — Electric Teal `#00B4A6` at top-left corner, transitioning through `#1F9E94` mid-diagonal, landing near a darkened gold `#C9A010` at bottom-right. This is the only screenshot with a warm gradient — it signals the premium/CTA moment distinctly.

**Phone mockup screen content:**  
The Pro upgrade screen: a clean paywall card showing two plans — "Free" (greyed out, basic features listed) and "Pro" (highlighted in teal border, glowing, features listed in gold checkmarks). Annual price shown prominently: `"$29.99/year"` in Nunito ExtraBold, 36px, Warm Gold. Below the plan toggle: a row of three user avatar circles (overlapping) with a star rating — `"4.9 ★ · App Store"`.

**Overlay elements:**
- Headline: Nunito ExtraBold, 68px, white — the largest text on any screenshot
- Three social proof "trust chips" arranged vertically or in a row:
  - `"★★★★★ 4.9 App Store rating"` — white pill, navy text
  - `"#1 in Health & Fitness"` — gold pill, navy text
  - `"50K+ active users"` — teal pill, white text
- CTA annotation near the upgrade button: `"Try free for 7 days →"` — Inter Bold, 28px, white
- Subtitle: Inter Regular, 30px, white 80%
- Bottom-right: small `"Cancel anytime"` in Inter Regular, 22px, white 50% — reduces purchase anxiety

**Emotion:** FOMO, aspiration, and confidence in the purchase.

---

## 3. SCREENSHOT STORYBOARD — GOOGLE PLAY

**Spec:** 1080×1920px (9:16 portrait, standard Google Play format)  
**Format:** PNG or JPEG (PNG preferred)  
**Count:** 5 screenshots (same narrative sequence as above)

The story, headlines, and screen content are **identical** to the App Store storyboard. The only differences are:

| Element | Apple App Store | Google Play |
|---|---|---|
| Canvas size | 1290×2796px | 1080×1920px |
| Phone mockup | iPhone 15 Pro frame (Dynamic Island) | Pixel 8 or generic Android frame |
| System UI | iOS status bar, Home Indicator | Android status bar, nav bar |
| Rating badge (SS5) | `"4.9 ★ · App Store"` | `"4.9 ★ · Google Play"` |
| Font size scale | 68px headlines (at 1290px wide) | ~57px headlines (at 1080px wide, same visual weight) |

**Scaling formula:** Multiply all pixel measurements by `0.837` (ratio of 1080÷1290) when adapting from App Store dimensions to Play dimensions.

**Google Play specific notes:**
- Google Play renders screenshots in a filmstrip view — thumbnails are wider and shorter relative to the full canvas. Ensure headlines are readable when the image is cropped to approximately a 16:9 thumbnail in the Play Store browse grid.
- Consider adding a Google Play badge or Android-specific UI cues on Screenshot 5 to signal platform familiarity.

---

## 4. FEATURE GRAPHIC — GOOGLE PLAY

**Spec:** 1024×500px, landscape  
**Format:** PNG or JPEG  
**Usage:** Appears at the top of the Google Play store listing when the app is featured. Also used in Google Play promotional slots and "Editors' Choice" banners.

---

### 4.1 Layout

The 1024×500px canvas divides into two zones:

**Left zone (0–560px wide, 55% of width):**  
Text content, left-aligned with 48px left margin.

**Right zone (560–1024px wide, 45% of width):**  
Visual content — a phone mockup or hero graphic.

**Safe zone:** Keep all critical text and brand elements within a 40px inset from all edges (critical safe zone per Google's specs for cropped contexts).

---

### 4.2 Background

Full-bleed diagonal gradient: Electric Teal `#00B4A6` at top-left → Deep Navy `#0D1B2A` at bottom-right. Gradient angle: 135°. The gradient is smooth and deep — it reads as premium dark, not flat teal.

A very subtle texture can be added: a diagonal grid of micro-dots (white, 3% opacity, 24px spacing) covering the entire canvas, adding depth without distracting.

---

### 4.3 Left Zone — Text Content

Stacked vertically, vertically centered in the zone:

1. **App name lockup:**  
   `"DejaDo Loop"` — Nunito ExtraBold, 64px, white `#FFFFFF`  
   Below it, the app icon symbol (the loop+spark mark) at 48×48px in Warm Gold, inline with or just above the wordmark.

2. **Tagline (1 line):**  
   `"Your habits. Your streaks. Your story."` — Inter SemiBold, 28px, white at 85% opacity

3. **Three micro-feature pills** (arranged horizontally):
   - `🔥 Streak Tracking` — rounded pill, white fill at 12% opacity + 1px white border at 30%, white text, Inter Medium 20px
   - `✨ AI Affirmations` — same style
   - `📊 Smart Insights` — same style

4. **Download prompt (bottom of left zone):**  
   `"Download free →"` — Inter Bold, 24px, Warm Gold `#F5C518`

All text left-aligned. Vertical spacing: generous (use ~16px gaps between elements, 32px gap before the tagline).

---

### 4.4 Right Zone — Visual Content

A single **iPhone 15 Pro mockup**, slightly tilted 5–8° clockwise, positioned so the top of the phone extends slightly above the canvas top edge (clipping intentionally — creates a dynamic crop that implies content continues). The phone occupies approximately 340×640px of visual space before clipping.

The phone screen shows: the main habit dashboard in full color — teal rings, gold streak counter (showing "Day 21 🔥"), the loop-back animation frame. The screen is bright and inviting against the dark feature graphic background.

A soft drop shadow beneath the phone: `rgba(0,0,0,0.4)`, blur 40px, 12px down-offset.

No additional elements in the right zone — the phone mockup should breathe.

---

### 4.5 Bottom-right corner

A small **star rating badge**: `"★ 4.9 · 50K+ downloads"` — Inter Regular, 18px, white 60% opacity. Positioned 20px from the right and bottom edges. Subtle, not dominant.

---

## 5. SPLASH SCREEN

**Background:** Deep Navy `#0D1B2A` — full bleed, no gradient. The darkness is intentional: it makes the brand mark pop and gives the app a sense of premium calm at launch.

---

### 5.1 Center Element

The **DejaDo Loop brand mark** — the loop+spark icon — rendered at 120×120px (or 3× for Retina: 360×360px), positioned at the exact geometric center of the screen.

The mark animates on load (if animation is enabled):
1. **0–200ms:** Opacity fade in from 0 → 100%
2. **200–600ms:** The loop arc "draws itself" using a stroke-dashoffset animation — the white line traces the loop path from start to finish in a single continuous motion (clockwise)
3. **600–800ms:** The gold spark scales in from 0 → 100% using a spring ease, with a subtle scale overshoot (1.0 → 1.2 → 1.0)
4. **800ms–1000ms:** App name fades in below the mark

**Static fallback** (for no-animation contexts): full mark at 100% opacity from frame 0.

---

### 5.2 App Name Typography

`"DejaDo Loop"` — Nunito ExtraBold, white `#FFFFFF`  
Font size: 32px (2× at 64px for Retina)  
Letter-spacing: +0.5px (slight tracking for polish)  
Position: centered horizontally, 24px below the bottom of the brand mark  

No tagline on the splash screen. No subtitle. The name and mark only.

---

### 5.3 Loading Indicator (Optional)

If the app requires a loading period (e.g., fetching personalized affirmation on cold start), display a minimal loading state:

- A thin progress line, 120px wide, 2px tall, Electric Teal `#00B4A6`
- Positioned 48px below the app name
- Animates as a left-to-right fill (not a spinner — a bar reads faster and feels more intentional)
- Do **not** use a system spinner (platform-default grey spinners feel unbranded)

---

### 5.4 Safe Zones and Sizing

| Platform | Canvas | Brand mark position |
|---|---|---|
| iOS (all sizes) | Full screen | Exact center (use SafeAreaView padding for name) |
| Android | Full screen | Exact center |
| Tablet (iPad/Android tablet) | Full screen | Exact center; scale mark to 160×160px |

The splash screen should display for no longer than 2 seconds on a typical device. If the app loads in under 1 second, use a minimum display time of 0.8 seconds so the animation has time to complete.

---

## 6. TOOLS RECOMMENDATION

Recommendations for a solo developer with no design team, prioritizing free and low-cost options with AI assistance.

---

### 6.1 App Icon Creation

| Tool | Cost | Best for | Notes |
|---|---|---|---|
| **Figma** (free tier) | Free | Vector icon design, export in all sizes | Use Auto Layout for icon variants; export at 1024px then resize down |
| **Recraft.ai** | Free tier available | AI vector icon generation | Outputs SVG/vector — superior to raster AI tools for icons; describe the loop+spark concept precisely |
| **Adobe Firefly** | Free (CC account) | AI concept generation | Good for exploring gradient backgrounds; not ideal for precise vector output |
| **IconKitchen** (Google) | Free | Android adaptive icon assembly | Point-and-click tool that handles all Android icon densities automatically |
| **MakeAppIcon.com** | Free | iOS icon resizing | Upload your 1024px master; downloads all required sizes in the correct folder structure |

**Recommended workflow:**
1. Use Recraft.ai or Midjourney to generate 4–6 concept directions from the prompts in Section 1.8
2. Pick the strongest concept and recreate it precisely as a vector in Figma (trace the AI output, do not use it directly)
3. Export master at 1024×1024px from Figma
4. Run through MakeAppIcon.com (iOS) and IconKitchen (Android) for platform-specific size sets

---

### 6.2 Screenshot Creation

| Tool | Cost | Best for | Notes |
|---|---|---|---|
| **Figma** (free tier) | Free | Full screenshot design workflow | Community phone mockup files available free (search "iPhone 15 Pro mockup" in Community); build all 5 screenshots as frames |
| **DaVinci** by Rottenwood | Free | Generating screenshot backgrounds | AI-generated screenshot backgrounds in the correct dimensions |
| **Previewed.app** | Free tier | Phone mockup renders | Drag your screen designs in; exports App Store-ready images with device frames |
| **AppLaunchpad** | Free tier | Batch screenshot generation | Template-based; good for creating consistent multi-screenshot sets quickly |
| **Shots.so** | ~$9/mo | Premium mockup quality | Best-looking device frames on the market; worth the cost if screenshots are a priority |

**Recommended workflow:**
1. Design the app screens in your actual codebase / React Native / Expo — take real device screenshots or use the Simulator
2. Import those screen images into Figma's phone mockup frames
3. Add the headline text, background gradients, and overlay elements as described in Section 2
4. Export at the required dimensions using Figma's Export feature (set to 1× since you're designing at native resolution)

---

### 6.3 Feature Graphic (Google Play)

| Tool | Cost | Best for |
|---|---|---|
| **Figma** (free tier) | Free | Primary design tool — set canvas to 1024×500px |
| **Canva** (free tier) | Free | Faster alternative if Figma feels heavyweight |
| **Midjourney / DALL-E 3** | Midjourney ~$10/mo | Generating background textures or hero art to use as layers |

The feature graphic is simpler than screenshots — it's a single landscape banner. Figma is more than sufficient. Spend 60–90 minutes here, not 4 hours.

---

### 6.4 Asset Management and Export

| Tool | Cost | Use |
|---|---|---|
| **Figma** | Free | Single source of truth for all visual assets |
| **Zeplin** (free tier) | Free | If you handoff to a contractor later |
| **ImageOptim** | Free (Mac) | Compress PNGs before uploading to App Store Connect / Play Console |
| **TinyPNG** | Free online | Same — PNG/JPEG compression, web-based |

---

### 6.5 AI Prompt Tools for Ongoing Asset Generation

| Tool | Cost | Use |
|---|---|---|
| **Midjourney v6** | $10/mo | Highest quality concept generation; great for icon exploration |
| **DALL-E 3** (via ChatGPT Plus) | $20/mo | Easier to iterate with natural language feedback |
| **Recraft.ai** | Free tier | Best free option specifically for icons and UI elements |
| **Adobe Firefly** | Free (CC account) | Good for marketing imagery, not icons |

**Time budget estimate for a solo dev (first-time asset creation):**
- App icon: 3–5 hours (AI exploration + Figma refinement)
- 5 screenshots × 2 platforms = 10 images: 4–6 hours (design in Figma once, adapt for each platform)
- Feature graphic: 1–2 hours
- Splash screen: 30–60 minutes (mostly implementation, not design)
- **Total: 8–13 hours** of design work to ship all assets professionally

---

## 7. BRAND TOKEN QUICK REFERENCE

Use these values consistently across every asset. Any deviation should be intentional and documented.

### Color Tokens

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `color-primary` | `#00B4A6` | 0, 180, 166 | CTAs, active states, teal fills, streak rings |
| `color-dark-bg` | `#0D1B2A` | 13, 27, 42 | All dark backgrounds, splash screen |
| `color-accent-gold` | `#F5C518` | 245, 197, 24 | Streak counters, AI spark, CTA highlights |
| `color-white` | `#FFFFFF` | 255, 255, 255 | Primary text on dark, icon strokes |
| `color-white-muted` | `#FFFFFF` at 65% opacity | — | Subtitles, supporting text on dark BG |
| `color-surface-card` | `#FFFFFF` at 8% opacity | — | Glassmorphism card backgrounds |

### Typography Tokens

| Token | Font | Weight | Usage |
|---|---|---|---|
| `type-heading-xl` | Nunito | ExtraBold (800) | Screenshot headlines, splash name |
| `type-heading-md` | Nunito | Bold (700) | Section headers, card titles |
| `type-body` | Inter | Regular (400) | Body text, subtitles, descriptions |
| `type-body-emphasis` | Inter | SemiBold (600) | Labels, badges, button text |
| `type-caption` | Inter | Regular (400) | Small annotations, legal text |

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `space-xs` | 8px | Tight gaps between related elements |
| `space-sm` | 16px | Standard inter-element spacing |
| `space-md` | 24px | Section separation within a screen |
| `space-lg` | 48px | Major section breaks, screenshot margins |
| `space-xl` | 64px | Screenshot safe zones from canvas edge |

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 8px | Badges, tags, micro-chips |
| `radius-md` | 16px | Cards, notification pills |
| `radius-lg` | 24px | Bottom sheets, modal overlays |
| `radius-full` | 9999px | Full pill badges, avatar circles |

---

*Document version 1.0 · Created March 28, 2026*  
*DejaDo Loop Visual Assets Specification*
