# WattLens — Green Pulse Energy & Carbon Intelligence

> **Brand:** Green Pulse  
> **Tagline:** *"Not a sensor replacement: a guide to what to fix and where to measure next."*  
> **Demo Label:** *"Demo: synthetic data vs known usage"*

WattLens is a complete, locally runnable energy and carbon disaggregation web application built for small businesses. It estimates equipment-level electricity consumption (kWh) and greenhouse gas emissions ($\text{CO}_2\text{e}$) directly from monthly utility bills and equipment inventory—with zero physical hardware required.

---

## Quick Start (Run Locally)

WattLens is 100% client-side with zero external API dependencies or backend servers.

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Running Unit Tests

To verify the Non-Negative Least Squares (NNLS) reconciliation engine, duty-cycle priors, and ground truth error metrics:

```bash
npm test
```

### Building for Production

```bash
npm run build
npm run preview
```

---

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite 6
- **Styling:** Tailwind CSS + Custom CSS Glassmorphism
- **Visual Design:** Full-screen vector sunrise sky gradient with blurred organic foliage and solar-roof building silhouette
- **State Management:** Zustand
- **Data Visualizations:** Recharts (Composed charts, stacked bars, donuts, area trends)
- **Icons:** Lucide React
- **Unit Testing:** Vitest

---

## Key Features

1. **Utility Bills (Input):**
   - Upload dropzone accepting PDF statements, bill images (with mock AI extractor), and CSV parsing.
   - 12-month billing trend chart and inline editable table with peak demand kW and blended rates.
2. **Equipment Inventory (Input):**
   - Preloaded with an artisan commercial cafe benchmark (3 refrigerators, rooftop heat pump HVAC, dual-boiler espresso machine, bakery deck oven, pass-through dishwasher, lighting, IT, and signage).
   - 24-hour visual schedule editor with quick operational presets (*24/7*, *Business Hours*, *Morning Bake*, *Night Shift*).
   - Ground truth known usage fields for synthetic accuracy validation.
3. **Disaggregated Estimates:**
   - Non-Negative Least Squares (NNLS) regularized bill-closing split.
   - 90% confidence uncertainty ranges (Low / Mid / High) and confidence badges per device.
   - 12-month stacked bar chart.
4. **Hidden Waste Anomaly Detection:**
   - Automatically isolates unexplainable excess energy as a *"Possible leak / idle load"* slice.
   - Diagnostic root causes: after-hours HVAC setback failures, refrigerator door gasket degradation, and parasitic night loads.
5. **Carbon Emissions (Scope 2):**
   - Official EPA eGRID 2023, UK DESNZ, EU EEA, and Australian regional grid intensity factors with tooltips and custom overrides.
   - Equipment carbon donut, 12-month emissions trajectory, and tangible equivalents (car km, trees, smartphones).
6. **Prioritized Action Plan:**
   - Ranked retrofits sorted by fastest payback period with annual dollar savings, annual kWh saved, and avoided carbon.
   - Interactive checkboxes that dynamically update the total potential savings counter.
7. **Measure Next (Precision Sub-Metering):**
   - Algorithmic uncertainty ranking that points to the single best unmetered load.
   - Sensor recommendation ($18 smart plug vs $45 split-core CT clamp).
   - Interactive before-and-after simulation showing the uncertainty envelope collapse from $\pm 30\%$ to $\pm 4\%$.
8. **Executive Dashboard:**
   - Real-time animated KPI counters, top 3 energy & carbon hotspots, next best action card, bill-closing gauge, and what-if scenario sliders.
9. **One-Click Export & Reporting:**
   - Printable executive PDF report (`window.print()`) formatted with clean print styles.
   - Downloadable disaggregated CSV dataset.
10. **Automated Guided Demo Mode:**
    - Full 14-step scripted tour with spotlight highlights, glass narration cards, step dots, play/pause, and speed toggles (1x, 1.5x, 2x).

---

## Documentation

For an in-depth mathematical explanation of the duty-cycle priors, NNLS reconciliation equations, uncertainty envelopes, and small business energy glossary, see [GUIDE.md](./GUIDE.md) or navigate to the in-app **App Guide** page.
