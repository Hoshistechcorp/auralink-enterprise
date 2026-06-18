## QA Test Checklist — Excel Version

Regenerate the same QA checklist content as a clean, easy-to-use `.xlsx` workbook for the internal QA team.

### Workbook structure

1. **`Cover`** sheet
   - Title "AuraLink — QA Test Checklist"
   - Subtitle, Date / Build / Tester / Environment fields (blank)
   - Brief how-to-use note
   - Legend (Status values, Severity values, Test ID format)
   - Summary formulas counting Pass / Fail / Blocked / N/A across all section sheets

2. **One sheet per section** (21 sheets), each with identical columns:
   `Test ID · Test Case · Steps · Expected Result · Status · Severity · Notes`
   - Sheets: Auth & Onboarding, Landing Pages, Dashboard Shell, Admin Panel, Card Studio, Analytics, Wallet, QR & Links, Marketing, Locations, Branch Managers, Staff, Subscription, Settings, Microsite, Microsite Cards, Tip Flow, Gift Cards, Concierge, Reservations, Cross-cutting
   - Same test cases used in the DOCX version

3. **`Bug Summary`** sheet
   - Columns: Bug ID · Test ID · Severity · Description · Status · Owner · Date Logged
   - 30 blank rows ready for entries

### Formatting

- Arial 11, frozen header row, bold header with light blue fill (`D5E8F0`), thin gray borders
- Column widths sized for readability (wider for Steps & Expected Result)
- Wrap text on all cells
- **Data validation dropdowns**:
   - Status column: Pass, Fail, Blocked, N/A
   - Severity column: Critical, High, Medium, Low
- **Conditional formatting** on Status column: Pass = green fill, Fail = red fill, Blocked = amber fill, N/A = gray fill
- AutoFilter enabled on every section sheet
- Cover sheet uses `COUNTIF` formulas across sheets to tally results live

### Technical details

- Build with `openpyxl` in a single Python script at `/tmp/build_qa_xlsx.py`
- Output: `/mnt/documents/AuraLink_QA_Test_Checklist.xlsx`
- Run `recalculate_formulas.py` after writing to populate Cover sheet counts
- Emit `<presentation-artifact path="AuraLink_QA_Test_Checklist.xlsx" mime_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"></presentation-artifact>`
