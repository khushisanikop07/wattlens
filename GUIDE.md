# WattLens — Green Pulse Energy & Carbon Intelligence

> **Brand:** Green Pulse  
> **Tagline & Positioning:** *"Not a sensor replacement: a guide to what to fix and where to measure next."*  
> **Status:** Demo Prototype with Synthetic Benchmarking vs. Known Usage Ground Truth

---

## 1. Quick Start Guide (3 Steps)

1. **Ingest Utility Bills:** Upload commercial electric bills (PDF, CSV, or invoice images) or enter monthly kWh, charges, and peak demand kW. This defines the whole-building energy envelope.
2. **Catalog Equipment:** Input equipment nameplates (Watts), quantity, days/week, and configure the interactive 24-hour operational schedule to capture operational baselines.
3. **Fix Leaks & Target Sub-Meters:** Check the **Hidden Waste** flag to catch overnight leaks, review ranked ROI recommendations in the **Action Plan**, and look at **Measure Next** to deploy hardware only where it reduces uncertainty the most.

---

## 2. Page-by-Page Walkthrough

### 2.1 Executive Dashboard
- **KPI Summary Cards:** Monthly kWh, total utility cost, Scope 2 CO2e footprint, Hidden Waste %, and identified annual savings potential.
- **Bill-Closing Reconciliation Gauge:** Visual multi-segment bar displaying exact closure: $\sum \text{Reconciled Loads} + \text{Possible Leak} = 100\%$ of the utility bill.
- **Hotspots:** Top 3 energy consumers and top 3 carbon contributors with mini-gauges and confidence badges.
- **Next Best Action:** Highlighted immediate ROI fix with 1-click navigation to the full plan.
- **Interactive Scenario Sandbox:** Adjust daily operating hours or model variable-speed efficiency upgrades with real-time feedback.

*(Screenshot Placeholder: `docs/screenshots/dashboard.png`)*

### 2.2 Utility Bills
- **Upload Dropzone:** Client-side CSV parser and simulated statement scanner for PDF / photo invoices.
- **12-Month Trajectory Chart:** Dual-axis chart correlating consumption (kWh) with utility cost (₹).
- **Inline Editable Table:** Modify any billing period directly, add new statements, or examine blended electricity rates (₹/kWh) and peak demand (kW).

*(Screenshot Placeholder: `docs/screenshots/bills.png`)*

### 2.3 Equipment Inventory
- **Asset Catalog:** Preloaded with commercial cafe benchmark (3 refrigeration units, rooftop heat pump HVAC, dual-boiler espresso machine, convection bakery deck oven, pass-through dishwasher, LED lighting, and IT networks).
- **24-Hour Visual Schedule Editor:** 24 clickable hourly blocks (00:00 to 23:00) with quick presets (*24/7 Continuous*, *Business Hours*, *Morning Bake*, *Night Shift*).
- **Duty Cycle & Ground Truth:** Compressor runtime factors and optional known benchmark fields for synthetic accuracy validation.

*(Screenshot Placeholder: `docs/screenshots/equipment.png`)*

### 2.4 Disaggregated Estimates
- **Non-Negative Least Squares (NNLS) Reconciliation:** Constrained regularized allocation ensuring zero negative values while respecting operational bounds.
- **90% Confidence Envelopes:** Low, Mid, and High ranges indicating model spread.
- **Ground Truth Benchmarking:** Evaluates software estimates against true sub-metered benchmarks, reporting Weighted Absolute Percentage Error (WAPE ~8.8% vs synthetic ground truth, improving upon 30.6% prior error with range coverage of 10 of 11 devices).
- **12-Month Stacked Bar Chart:** Illustrates seasonal shift in refrigeration and heating/cooling loads.

*(Screenshot Placeholder: `docs/screenshots/estimates.png`)*

### 2.5 Hidden Waste Diagnostics
- **Automated Anomaly Detection:** Flags residual bill energy that exceeds normal equipment duty cycles as *"Possible leak / idle load"*.
- **Root Cause Diagnostics:** Identifies common small business leaks:
  1. HVAC setback failure (empty space conditioned overnight).
  2. Walk-in cooler and display door gasket leaks.
  3. Kitchen warmers or espresso boilers left on 24/7.
  4. Parasitic standby IT loads and untimed outdoor lighting.

*(Screenshot Placeholder: `docs/screenshots/hidden_waste.png`)*

### 2.6 Carbon Emissions Intelligence
- **Scope 2 Greenhouse Gas Accounting:** $\text{CO}_2\text{e} = \text{kWh} \times \text{Regional Grid Factor}$.
- **Selectable & Documented Grid Factors:**
  - US National Average ($0.386\text{ kg CO}_2\text{e/kWh}$ - EPA eGRID 2023)
  - California CAMX ($0.215\text{ kg CO}_2\text{e/kWh}$ - Clean energy grid)
  - Texas ERCOT ($0.398\text{ kg CO}_2\text{e/kWh}$)
  - Midwest MROW ($0.542\text{ kg CO}_2\text{e/kWh}$)
  - Pacific Northwest NWPP ($0.248\text{ kg CO}_2\text{e/kWh}$)
  - UK National Grid ($0.207\text{ kg CO}_2\text{e/kWh}$ - DESNZ 2023)
  - European Union Average ($0.251\text{ kg CO}_2\text{e/kWh}$ - EEA)
  - Australia NEM ($0.650\text{ kg CO}_2\text{e/kWh}$)
  - Custom user override factor
- **Visuals & Equivalencies:** Equipment carbon donut chart, 12-month trajectory, and real-world equivalents (passenger car km, 10-year tree seedlings, and smartphone charges).

*(Screenshot Placeholder: `docs/screenshots/emissions.png`)*

### 2.7 Prioritized Action Plan
- **Ranked Interventions:** Sorted by shortest payback period (months).
- **Financial Metrics:** Annual cost saved (₹/yr), annual kWh saved, upfront capital cost, and avoided carbon.
- **Live Implementation Tracking:** Checkboxes to mark fixes as completed, instantly updating the hero potential savings tracker.
- **Practical Field Guides:** Plain-English tips for busy owners (e.g., dollar-bill gasket seal test, smart 20A commercial plug schedules).

*(Screenshot Placeholder: `docs/screenshots/action_plan.png`)*

### 2.8 Measure Next (Precision Sub-Metering)
- **Positioning:** *"Not a sensor replacement: a guide to what to fix and where to measure next."*
- **Algorithmic Ranking:** Ranks equipment by contribution to facility-wide uncertainty:
  $$\text{Uncertainty Contribution} = \text{kWh} \times \text{Elasticity Spread}$$
- **Recommended Hardware:** Recommends inexpensive smart plug meters (₹1,580) for 120V loads, or split-core clip-on CT clamps (₹3,500–₹3,960) for 208/240V breakers.
- **Interactive Simulation:** Demonstrates the before-and-after uncertainty collapse: post-measurement confidence narrows from $\pm 30\%$ to $\pm 4\%$, automatically stabilizing the rest of the building model.

*(Screenshot Placeholder: `docs/screenshots/measure_next.png`)*

---

## 3. Mathematical Methodology

### 3.1 Duty-Cycle Physical Prior Formula
$$\text{Base kWh}_i = \frac{\text{Watts}_i \times \text{Quantity}_i \times \text{ActiveHours}_i \times \text{DaysPerWeek}_i \times 4.333 \times \text{DutyCycle}_i}{1000}$$

### 3.2 Non-Negative Least Squares (NNLS) Bill Closing
$$\min \sum_{i \notin \text{metered}} w_i \left( \frac{E_i - B_i}{B_i} \right)^2$$
$$\text{subject to: } E_i \ge E_{i,\min}, \quad E_i \le E_{i,\max}, \quad \sum E_i + \text{HiddenWaste} = \text{Bill kWh}$$

### 3.3 Uncertainty & Confidence Bands
$$\text{Low kWh} = E_i \times (1 - \text{Spread}_i), \quad \text{High kWh} = E_i \times (1 + \text{Spread}_i)$$
- Sub-metered: $\text{Spread} = \pm 4\%$ (High Confidence)
- Fixed lighting/signage: $\text{Spread} = \pm 9\%$ (High Confidence)
- Commercial cooking/kitchen: $\text{Spread} = \pm 20\%$ (Medium Confidence)
- Weather-dependent HVAC: $\text{Spread} = \pm 30\%$ (Low Confidence)

---

## 4. Small Business Glossary
- **kWh (Kilowatt-Hour):** 1,000 Watts running for 1 hour. Primary unit of utility electric billing.
- **Peak Demand (kW):** The maximum instantaneous power drawn during any 15-minute window in a month.
- **Duty Cycle:** The fraction of time a compressor, pump, or element runs while switched on.
- **eGRID:** The US EPA's database providing regional carbon intensity factors for electricity generation.
- **WAPE:** Weighted Absolute Percentage Error, providing a robust accuracy benchmark against known ground truth.

---

## 5. Limitations & Ethical Notice
WattLens is an analytical intelligence platform designed to prioritize capital and maintenance decisions. It is not an ANSI C12 certified revenue meter. When high-accuracy financial sub-billing or utility rebate measurement and verification (M&V) is required, use the **Measure Next** recommendations to install dedicated physical sensors.
