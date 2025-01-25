Highcharts.ganttChart('container', {
    title: {
        text: 'Capstone Project Timeline'
    },
    xAxis: {
        currentDateIndicator: true,
        min: Date.UTC(2024, 8, 1), // Start of the timeline
        max: Date.UTC(2025, 2, 28) // End of the timeline
    },
    series: [{
        name: 'Capstone Tasks',
        data: [
            // Parent: Planning & Documentation
            {
                id: 'planning',
                name: 'Planning & Documentation'
            },
            {
                name: 'Team Formation',
                start: Date.UTC(2024, 8, 5),
                end: Date.UTC(2024, 8, 18),
                parent: 'planning'
            },
            {
                name: 'Project Scope and Objectives',
                start: Date.UTC(2024, 8, 19),
                end: Date.UTC(2024, 8, 24),
                parent: 'planning'
            },
            {
                name: 'Title Proposal Writing',
                start: Date.UTC(2024, 8, 27),
                end: Date.UTC(2024, 9, 5),
                parent: 'planning'
            },

            // Parent: System Design & Development
            {
                id: 'system_design',
                name: 'System Design & Development'
            },
            {
                name: 'Initial System Design',
                start: Date.UTC(2024, 9, 19),
                end: Date.UTC(2024, 10, 20),
                parent: 'system_design'
            },
            {
                name: 'Frontend Architecture',
                start: Date.UTC(2024, 10, 20),
                end: Date.UTC(2024, 11, 8),
                parent: 'system_design'
            },
             {
                name: 'Backed Architecture',
                start: Date.UTC(2024, 11, 8),
                end: Date.UTC(2025, 0, 1),
                parent: 'system_design'
            },

            // Parent: Geo-Tagging & Inventory Management
            {
                id: 'geo_inventory',
                name: 'Technologies'
            },
                {
                name: 'Face ID',
                start: Date.UTC(2025, 0, 2),
                end: Date.UTC(2025, 0, 14),
                parent: 'geo_inventory'
            },
             {
                name: 'Forum',
                start: Date.UTC(2025, 0, 14),
                end: Date.UTC(2025, 0, 18),
                parent: 'geo_inventory'
            },
            {
                name: 'Inventory Management Module',
                start: Date.UTC(2025, 0, 14),
                end: Date.UTC(2025, 0, 21),
                parent: 'geo_inventory'
            },
            {
                name: 'Geo-Tagging Module',
                start: Date.UTC(2025, 0, 21),
                end: Date.UTC(2025, 1, 7),
                parent: 'geo_inventory'
            },
      

            // Parent: Optimization & Testing
            {
                id: 'advanced_features',
                name: 'Optimizations & Testing'
            },
            {
                name: 'Optimization',
                start: Date.UTC(2025, 1, 1),
                end: Date.UTC(2025, 1, 7),
                parent: 'advanced_features'
            },
            {
                name: 'Testing of Modules',
                start: Date.UTC(2025, 1, 14),
                end: Date.UTC(2025, 1, 18),
                parent: 'advanced_features'
            },
            
              {
                id: 'survey',
                name: 'Survey Distribution'
            },
            {
                name: 'Pre-Survey Distribution',
                start: Date.UTC(2025, 0, 27),
                end: Date.UTC(2025, 1, 1),
                parent: 'survey'
            },
            {
                name: 'Post-Survey Distribution',
                start: Date.UTC(2025, 1, 14),
                end: Date.UTC(2025, 1, 21),
                parent: 'survey'
            }
            
        ]
    }]
});
