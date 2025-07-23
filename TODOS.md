# 01: Home

    - [❌]  [✅]

    - [✅] Navigation - Implement responsive navbar with active route highlighting
    - [✅] Navigation - Add all routes
    - [✅] Navigation - Add sidebar

# 02: Payload integration

    - [✅] Payload installed and integrated into the project
    - [✅] Collection - Create a new one
    - [✅] Collection - generate types after creation (manually) -- add "type: module"

# 04: Filtering

# Notes

## Payload integration

    - If the admin credentials has been lost => payload migrate:fresh => all thedb would be dropped => yet the schemas are attached to the files so once created a nex account => an empty tables would be created

    - The payload generate:types create the types based on collections => you can Import such types to use

# Filter

## Calculate Visible: Determines how many categories can fit in the available horizontal space of the container.

    - Calculates the total width of the container (containerWidth).
    Subtracts the width of the "View all" button (viewAllWidth) to get the available space for categories.

    - Loops through each category element to measure its width.
    Stops when adding the next category would exceed the available width.

    - Updates visibleCount with the number of categories that fit.
    Responsiveness:

    - Uses a ResizeObserver to recalculate whenever the container size changes.

## 2. Sidebar Navigation Logic (in categories-sidebar.tsx)

    Purpose: Handles navigation and display of categories in a sidebar, including subcategories.

## the onClick Selection:

    - If a category has subcategories, it sets them as the current categories to display.

    - If a category has no subcategories it navigates to the appropriate route

    - Subcategory: Navigates to /${parentCategory.slug}/${category.slug}.
    - Main Category: Navigates to /${category.slug} (or / if the slug is "all").

## Back Navigation:

    Resets the displayed categories to the root level when the "Back" button is clicked.

    Sidebar State:
    Closes the sidebar after navigation (handleOpenChange(false)).
