//to get the day of the week
let dayNumber;
//function to find day of the week
const findDayOfWeek=(dateString)=> {
    // Split the input date string into an array [day, month, year]
    const dateParts = dateString.split('-');
    
    // Parse the day, month, and year from the dateParts array
    const year = parseInt(dateParts[0], 10); // Converts the day part to an integer
    const month = parseInt(dateParts[1], 10) - 1; // Converts the month part to an integer and subtracts 1 because months are zero-based
    const day = parseInt(dateParts[2], 10); // Converts the year part to an integer
    dayNumber = day;
    // Create a new Date object with the parsed day, month, and year
    const date = new Date(day, month,year );
  
    // Array to map the day of the week number to the day name
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FR', 'SAT'];
   // getDay() returns a number from 0 to 6, where 0 is Sunday and 6 is Saturday
    return daysOfWeek[date.getDay()]; 
  }
const createEntryCard = ( id, title, content, date ) => {
  const dayOfWeek = findDayOfWeek(date);
  return `
        <div class="container-entry border" >
          <div class="entry-date-container">
              <h1>${dayNumber}</h1>
              <h2>${dayOfWeek}</h2>
              <p>${date}</p>
          </div>
          <div class="content-entry card-view-modal" id="${id}">
          
            <div class="container-title">
              <h3 class="entry-title">
                ${title}
              </h3>
              <p class="entry-date">
              ${date}
              </p>
            </div>
            <div class="entry-content" >
                ${content}
            </div>
          </div>
          <div class="container-btn-entry">
            <button class="edit-btn" onclick="window.updateEntry(${id})">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3084 0.741797L15.2584 2.6918C15.5834 3.0168 15.5834 3.5418 15.2584 3.8668L13.7334 5.3918L10.6084 2.2668L12.1334 0.741797C12.4584 0.416797 12.9834 0.416797 13.3084 0.741797ZM0.5 15.4999V12.3749L9.71667 3.1582L12.8417 6.2832L3.625 15.4999H0.5Z" />
                </svg>                
            </button>
            <button class="delete-btn" onClick="setDeleteId(${id})" >
              <svg data-card-id="100" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.49984 13.8333C1.49984 14.75 2.24984 15.5 3.1665 15.5H9.83317C10.7498 15.5 11.4998 14.75 11.4998 13.8333V3.83333H1.49984V13.8333ZM3.54984 7.9L4.72484 6.725L6.49984 8.49167L8.2665 6.725L9.4415 7.9L7.67484 9.66667L9.4415 11.4333L8.2665 12.6083L6.49984 10.8417L4.73317 12.6083L3.55817 11.4333L5.32484 9.66667L3.54984 7.9ZM9.4165 1.33333L8.58317 0.5H4.4165L3.58317 1.33333H0.666504V3H12.3332V1.33333H9.4165Z" />
              </svg>                
            </button>
          </div>
        </div>
    `;
};

export { createEntryCard };
