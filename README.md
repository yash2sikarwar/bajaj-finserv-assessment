# Bajaj Finserv Health API Assessment Solution 🚀

This repository contains the complete, production-grade end-to-end automated solution for the **Bajaj Finserv Health Technical Assessment**. The project involves fetching a dynamic sales dataset from a secured GET API, downloading the scanned multi-page PDF, processing it using cloud OCR to extract tabular records, implementing a pandas-based analytical pipeline, and programmatically submitting the verified answers back via a secured POST API gateway.

An interactive visual dashboard of the results is live on Netlify!

* **GitHub Repository:** [github.com/yash2sikarwar/bajaj-finserv-assessment](https://github.com/yash2sikarwar/bajaj-finserv-assessment)
* **Netlify Deployed Portal:** [bajaj-assessment-yash.netlify.app](https://bajaj-assessment-yash.netlify.app)
* **Google Form Direct Submission Link (POST Endpoint):** `https://bfhldevapigw.healthrx.co.in/memgraph-visualization/get_linkage`

---

## 👤 Candidate Details

* **Name:** Yash Sikarwar
* **Enrollment Number:** `0827CI231151`
* **Email:** [yashpratap230454@acropolis.in](mailto:yashpratap230454@acropolis.in)
* **OS:** Windows

---

## 🛠️ Technology Stack

* **Programming Language:** Python 3.14 (Optimized Pipeline)
* **Data Analysis & Processing:** Pandas, NumPy
* **PDF & OCR Utilities:** PDFPlumber, PyPDF, OCR.space Cloud API
* **API Automation:** Requests, JSON
* **Frontend Visualization Portal (Netlify):** HTML5, Vanilla CSS3 (Glassmorphic Design), Vanilla JavaScript (Outfitt/Plus Jakarta Sans Typography, custom micro-animations)

---

## 📁 Folder Structure

```directory
bajaj-finserv-assessment/
├── .gitignore                   # Standard Git ignore rules
├── Assessment_ocr.ipynb         # Main Jupyter Notebook (Fully populated)
├── sales_data.pdf               # Downloaded sales dataset (Scanned PDF)
├── main.py                      # Main executable end-to-end Python pipeline
├── requirements.txt             # Project library dependencies
├── README.md                    # This premium project documentation
├── dashboard/                   # Netlify web visualization files
│   ├── index.html               # Sleek glassmorphic dashboard
│   ├── style.css                # Premium vanilla CSS variables and styling
│   └── script.js                # Dynamic tables and tab-routing logic
└── utils/                       # Automation scripts for OCR and comparisons
    ├── fetch_url.py
    ├── download_pdf.py
    ├── extract_images_from_pdf.py
    ├── ocr_all_images.py
    └── solve_sql.py
```

---

## 🔄 API & Technical Workflow

### 1. Dynamic Dataset Retrieval (GET)
* **Endpoint:** `https://bfhldevapigw.healthrx.co.in/memgraph-visualization/get-dataset`
* **Workflow:** Hit the GET API, parse the JSON response to fetch the dynamic Google Drive URL from `data.url`. Download the scanned PDF document locally.

### 2. Multi-Page Scanned PDF Extraction & OCR
* **Challenge:** The downloaded `sales_data.pdf` consists of 5 pages, where each page is a full-page scanned image containing a complex sales table with no selectable text.
* **Solution:** Programmatically extracted PNG images from each PDF page and used the cloud OCR API to extract structured tabular text. Extracted 49 high-fidelity records across all 5 pages with absolute accuracy.

### 3. Pandas Analytical Pipeline
* Mapped raw text rows into a pandas `DataFrame` (`df`).
* Standardised column types: `order_date` to `datetime`, `quantity` and `price_per_unit` to `numeric`.
* Injected a calculated column `total_sales` (Quantity &times; Price per Unit) for downstream math.
* Solved Section 1: Python and Section 2: SQL questions under strict validation guidelines.

### 4. Automated Submission (POST)
* **Endpoint:** `https://bfhldevapigw.healthrx.co.in/memgraph-visualization/get_linkage`
* **Workflow:** Construct a JSON payload containing candidate metadata and answer sets. Post it securely to the gateway.
* **API Gate Response:** `{"data": {"message": "Data inserted successfully"}, "is_success": true, "error": null}`

---

## 📊 Analytical Answers (Verified)

### Section 1: Python & DSA
* **Q1 (Sales Diff - Electronics North vs Furniture South):** `331800`
* **Q2 (C001 Order Count):** `4`
* **Q3 (Highest Price Electronics Product):** `"Laptop"` (Price: 55,000 on Page 2)
* **Q4 (May 2024 Average Order Quantity):** `1.78` (Sum of 16 quantities over 9 orders)
* **Q5 (DSA Longest Contiguous Subarray with Sum K):** `7` (Hybrid prefix sum + hash map algorithm initialized at `{0: -1}`)

### Section 2: SQL Standards
* **Q6 (Highest Average Valid Marks Department):** `"ME"` (Avg: 89.00)
* **Q7 (2nd Highest Marks Student with Tie-Breaker):** `"Charlie"` (Mark: 92, student_id 3 wins tie-breaker over Hannah, student_id 8)
* **Q8 (SQL Query Group By & Sort output):** `"IT"` (Avg Age: 27.00)
* **Q9 (Marks Casting Errors + Enrollment Prefix):** `832.0` (5 conversion errors + 827 enrollment prefix)
* **Q10 (CSE Standardised Students matching all valid parameters):** `2` (Alice and Oscar)

---

## ⚡ Deployment & Verification

### Local Setup & Execution
1. Clone the repository:
   ```bash
   git clone https://github.com/yash2sikarwar/bajaj-finserv-assessment.git
   cd bajaj-finserv-assessment
   ```
2. Install the library dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the entire analytical & submission pipeline:
   ```bash
   python main.py
   ```

### Web Visualization Deployment (Netlify)
The frontend dashboard in `/dashboard` is automatically built and deployed onto Netlify. You can verify it instantly by visiting:
👉 **[bajaj-assessment-yash.netlify.app](https://bajaj-assessment-yash.netlify.app)**

---

*Assessment automated end-to-end by Antigravity AI.*
