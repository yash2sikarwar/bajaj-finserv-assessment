document.addEventListener('DOMContentLoaded', () => {
    // 1. Tab Switching Functionality
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active classes
            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active classes
            item.classList.add('active');
            const tabId = item.getAttribute('data-tab') + '-tab';
            const activeTab = document.getElementById(tabId);
            if (activeTab) {
                activeTab.classList.add('active');
            }
        });
    });

    // 2. Extracted Sales Data
    const salesData = [
        [1001, "C001", "1/5/2024", "Laptop", "Electronics", 2, 50000, "North", "Delivered"],
        [1002, "C002", "1/7/2024", "Smartphone", "Electronics", 1, 30000, "South", "Delivered"],
        [1003, "C001", "1/10/2024", "Tablet", "Electronics", 3, 20000, "East", "Pending"],
        [1004, "C003", "2/2/2024", "Desk", "Furniture", 1, 15000, "West", "Delivered"],
        [1005, "C004", "2/5/2024", "Chair", "Furniture", 4, 5000, "North", "Delivered"],
        [1006, "C002", "2/7/2024", "Monitor", "Electronics", 2, 12000, "South", "Cancelled"],
        [1007, "C005", "3/1/2024", "Laptop", "Electronics", 1, 52000, "East", "Delivered"],
        [1008, "C004", "3/5/2024", "Sofa", "Furniture", 1, 35000, "West", "Delivered"],
        [1009, "C003", "3/10/2024", "Tablet", "Electronics", 2, 22000, "North", "Pending"],
        [1010, "C005", "3/15/2024", "Smartphone", "Electronics", 3, 31000, "South", "Delivered"],
        [1011, "C006", "4/1/2024", "Headphones", "Electronics", 5, 4000, "North", "Delivered"],
        [1012, "C007", "4/2/2024", "Chair", "Furniture", 6, 6000, "East", "Cancelled"],
        [1013, "C008", "4/5/2024", "Smartwatch", "Electronics", 2, 15000, "South", "Delivered"],
        [1014, "C009", "4/7/2024", "Laptop", "Electronics", 1, 55000, "West", "Delivered"],
        [1015, "C010", "4/9/2024", "Desk", "Furniture", 3, 14000, "North", "Delivered"],
        [1016, "C011", "4/11/2024", "Tablet", "Electronics", 4, 21000, "East", "Pending"],
        [1017, "C012", "5/1/2024", "Smartphone", "Electronics", 2, 32000, "North", "Delivered"],
        [1018, "C013", "5/3/2024", "Sofa", "Furniture", 1, 36000, "South", "Delivered"],
        [1019, "C014", "5/5/2024", "Monitor", "Electronics", 3, 12500, "West", "Cancelled"],
        [1020, "C015", "5/7/2024", "Laptop", "Electronics", 1, 53000, "East", "Delivered"],
        [1021, "C001", "5/9/2024", "Chair", "Furniture", 2, 5500, "North", "Delivered"],
        [1022, "C002", "5/12/2024", "Smartwatch", "Electronics", 1, 16000, "South", "Delivered"],
        [1023, "C003", "5/15/2024", "Desk", "Furniture", 2, 14500, "East", "Delivered"],
        [1024, "C004", "5/17/2024", "Tablet", "Electronics", 1, 23000, "West", "Pending"],
        [1025, "C005", "5/20/2024", "Headphones", "Electronics", 3, 4200, "North", "Delivered"],
        [1026, "C006", "6/1/2024", "Smartphone", "Electronics", 1, 31000, "South", "Delivered"],
        [1027, "C007", "6/3/2024", "Sofa", "Furniture", 2, 37000, "West", "Delivered"],
        [1028, "C008", "6/5/2024", "Laptop", "Electronics", 2, 54000, "East", "Cancelled"],
        [1029, "C009", "6/7/2024", "Monitor", "Electronics", 4, 11800, "North", "Delivered"],
        [1030, "C010", "6/9/2024", "Tablet", "Electronics", 2, 22500, "South", "Delivered"],
        [1031, "C011", "6/11/2024", "Chair", "Furniture", 5, 5800, "East", "Delivered"],
        [1032, "C012", "6/13/2024", "Smartwatch", "Electronics", 3, 15500, "West", "Delivered"],
        [1033, "C013", "6/15/2024", "Desk", "Furniture", 1, 15000, "North", "Pending"],
        [1034, "C014", "6/17/2024", "Headphones", "Electronics", 6, 3900, "South", "Delivered"],
        [1035, "C015", "6/19/2024", "Laptop", "Electronics", 1, 51000, "East", "Delivered"],
        [1036, "C001", "7/1/2024", "Tablet", "Electronics", 3, 21500, "North", "Delivered"],
        [1037, "C002", "7/3/2024", "Sofa", "Furniture", 1, 34000, "West", "Delivered"],
        [1038, "C003", "7/5/2024", "Smartphone", "Electronics", 2, 30500, "South", "Cancelled"],
        [1039, "C004", "7/7/2024", "Desk", "Furniture", 2, 15200, "East", "Delivered"],
        [1040, "C005", "7/9/2024", "Monitor", "Electronics", 3, 13000, "North", "Delivered"],
        [1041, "C006", "7/11/2024", "Laptop", "Electronics", 2, 52500, "South", "Delivered"],
        [1042, "C007", "7/13/2024", "Chair", "Furniture", 4, 5900, "West", "Delivered"],
        [1043, "C008", "7/15/2024", "Tablet", "Electronics", 2, 24000, "East", "Pending"],
        [1044, "C009", "7/17/2024", "Headphones", "Electronics", 5, 4100, "North", "Delivered"],
        [1045, "C010", "7/19/2024", "Smartwatch", "Electronics", 1, 16200, "South", "Delivered"],
        [1046, "C011", "7/21/2024", "Sofa", "Furniture", 2, 35500, "West", "Delivered"],
        [1047, "C012", "7/23/2024", "Laptop", "Electronics", 1, 50500, "East", "Delivered"],
        [1048, "C013", "7/25/2024", "Tablet", "Electronics", 3, 21000, "North", "Cancelled"],
        [1049, "C014", "7/27/2024", "Monitor", "Electronics", 2, 12500, "South", "Delivered"]
    ];

    const tableBody = document.querySelector('#sales-table tbody');
    if (tableBody) {
        salesData.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach((cell, idx) => {
                const td = document.createElement('td');
                if (idx === 5 || idx === 6) {
                    // Numeric columns right-align or format
                    td.textContent = cell.toLocaleString();
                } else {
                    td.textContent = cell;
                }
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    }
});
