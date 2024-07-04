const createRecentEntry = (id,title,content,date) => {
    return `
              <div class="entry-card border card-view-modal" id="${id}">
                <div class="entry-card-content">
                  <h3 class="entry-card-title">${title}</h3>
                  <p class="entry-card-date">${date}</p>
                  <p class="entry-card-text">${content}</p>
                </div>
              </div>
    `
}

export { createRecentEntry }