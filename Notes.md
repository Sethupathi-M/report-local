Got it, let's find alternatives without the word "Label":

### Alternative Component Names

1. **ColumnHeadingContainer**

   - **Description**: Container for the heading or name of the column.

2. **ColumnTitleContainer**
   - **Description**: Container specifically for holding the title of the column.

### Updated Component Tree with Alternative Names

- TabContext\*\*
  - **TabPanelContainer**
    - **ParentBox**
    - **DataGrid**
      - **ColumnHeader**
      - **ColumnHeaderContent**
        - **ColumnLabelContainer**
          - **ColumnLabel**
          - **SortIcon**
        - **ActionButtons** - Done
          - **ReOrderIcon**
          - **ColumnMenu**
          - **SortAsc**
          - **SortDesc**
          - **LockColumn**
          - **ManageColumns**
      - **ColumnFilter** -> renderFilter
      - **DropDownFilter**
      - **CheckBoxDropDownFilter**
      - **NumberRangeFilter**
      - **TextFilter**
      - **DataCell** -> renderCellData
      - **TextCell**
      - **HyperlinkCell**

With these alternatives, `ColumnHeadingContainer` emphasizes its role in holding the heading of the column, while `ColumnTitleContainer` specifically indicates its purpose as a container for the title of the column.

0. Maintain state between two tab switch.
1. Maintain old state and new state for column filter and date filter.
2. Normalize the structure for state in Redux.
3. Check with API with millions of records.
4. Check is it dayjs
5. Next, Action Menu and Sorting
6. Pinned Columns, Reordering,
7. For checkbox scenerios pass custom data, data from the table and data from the api
8. Use why did you render library and also add a log example Datagrid Rendered: Count, count is outside the component.

- Questions for Raja
  - How date should be displayed in the datagrid.
  - How to reset to default state in Date filter
  - How will the date be displayed
  - Will filter will trigger a API call
  - Can we put the search below the popover
  - No datafound should be inside the grid not outside.
  - No results for checkbox dropdown.
  - Label for All the Items selection in Checkbox drop down - suggestion: Select All. Is checkbox needs to be checked all the time.
  - In all the placeholder input box is the expand icon needs to Up and Down based on the state.
  - Is the date has to calcuated based on the users system datetime or the timezone in which the dataroom is running.
  - For later: Accesibility test.
  - Clear near Search By Range:
  - Is text is contains operator
  - What all the custom operator we have ?
  - Are we using OR operator or AND operator in MUI filter ?

Tasks for Ananth:

1. Setting up reports backend with the mock data.
2. Completing the input date filter drawer.

Future Notes:

1. Use a updateId, which will be created on column creation and updated everytime on updation
2. This value will be used in react.memo to compare and render the UI.

---

1. Update only the new column definition instead of all the columns definition everytime.
