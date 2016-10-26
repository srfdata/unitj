# editors-lab-drdj 
### (codename "ddrj": drive-driven journalism) 

Making Google Sheets Journalism-compatible.

In other words: turn them into something like a super-simple database with one table with consistent structure.

   * Merge source sheets into one master sheet
   * Enforce column types & semantic consistency
   * Maintain uniqueness & traceability (IDs, timestamps, authors)
   * (Automagic offsite backup routine)
   * save a lot of headaches & nervous breakdowns later on
  
All of this will be deployed as Google "Web App", an addon to Google Sheets. 

### Typical workflow

Alpha-Journalist wants to investigate payments of pharma companies to doctors (cf. "Dollars for Docs"). Alpha-Journalist defines a data model for these payments. Pharma companies actually release data that (theoretically) fulfill this data model, but in very different structures (different order of doctors' names, different column names, different address specification, etc. etc.) Alpha-Journalist thinks it's a good idea to store everything in Google Sheets. He asks B-Journalist and C-Journalist to collect the source spreadsheets from pharma companies. These companies publish correct data, but in totally weird and different structures - sometimes column names differ, sometimes adresses are in different formats, you name it. 

With our tool, Alpha-, B- and C-Journalist will be able to import their respective source sheets into one consistent master sheet that forces them to clean their sheets before or while importing them, saving a lot of headaches in the (automated) preprocessing phase later on. 

### Why Google Drive?

Because we all love Google? No. But we think that currently, there's no better alternative for collaborative spreadsheet editing.

For further explanation: see the [project pitch](https://docs.google.com/presentation/d/19EwH3JsTlw_bI91qs7AwSwCKOGAKykbNEpXrxitAwcQ/pub?start=false&loop=false&delayms=3000)

(test) master sheet: https://docs.google.com/spreadsheets/d/1rCezxcknkgLo6-19elDzhVRHMNvoR_iE4SlkgV6BVPI/edit?usp=sharing

## license

[MIT](https://opensource.org/licenses/MIT)
