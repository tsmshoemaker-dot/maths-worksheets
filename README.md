# Australian Maths Worksheets

Free printable maths worksheets aligned to the Australian Curriculum (Years 7-10).

## Adding Worksheets

1. **Add PDF files** to the appropriate folder in `worksheets/`:
   - `worksheets/year7/number-operations/`
   - `worksheets/year7/fractions-decimals/`
   - etc.

2. **Update the manifest** at `worksheets/manifest.json`:
   ```json
   {
     "year7": {
       "number-operations": [
         {
           "title": "Worksheet Title",
           "description": "Brief description",
           "files": ["worksheet.pdf", "answers.pdf"]
         }
       ]
     }
   }
   ```

   - The first file in `files` array is the worksheet
   - The second file (optional) is the answer key

## Deployment to GitHub Pages

1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings > Pages
4. Select "main" branch as source
5. Your site will be available at `username.github.io/repo-name`

## Site Structure

```
├── index.html              # Home page
├── year7/                 # Year 7 pages
│   ├── index.html
│   └── number-operations/
│       └── index.html
├── year8-10/              # Similar structure
├── css/style.css          # Styles
├── js/worksheets.js       # Worksheet loader
└── worksheets/            # PDF files
    ├── manifest.json
    └── year7/
        └── number-operations/
            └── *.pdf
```
