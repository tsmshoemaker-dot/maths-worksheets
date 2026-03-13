const pathParts = window.location.pathname.split('/').filter(p => p);
const year = pathParts[0];
const topic = pathParts[1];

async function loadWorksheets() {
    const container = document.querySelector('.worksheet-list');
    if (!container || !year || !topic) return;

    try {
        const response = await fetch('../../worksheets/manifest.json');
        const manifest = await response.json();
        
        const worksheets = manifest[year]?.[topic] || [];
        
        if (worksheets.length === 0) {
            container.innerHTML = `
                <div class="empty-message">
                    <p>No worksheets available yet.</p>
                    <p>Add your PDF files to the <code>worksheets/${year}/${topic}/</code> folder and update the manifest.json to display them.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = worksheets.map(ws => `
            <div class="worksheet-item">
                <div class="worksheet-info">
                    <h3>${ws.title}</h3>
                    <p>${ws.description}</p>
                </div>
                <div class="download-group">
                    <a href="../../worksheets/${year}/${topic}/${ws.files[0]}" class="download-btn" download>
                        Download Worksheet
                    </a>
                    ${ws.files[1] ? `
                    <a href="../../worksheets/${year}/${topic}/${ws.files[1]}" class="download-btn answer-key" download>
                        Answer Key
                    </a>
                    ` : ''}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading worksheets:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadWorksheets);
