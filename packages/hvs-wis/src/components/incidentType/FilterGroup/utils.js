export const flattenOptions = (filters) =>
  filters.reduce((options, category) => {
    const { name, data = [] } = category;

    data.forEach((val) => {
      const optionName = val.cat_name || val.sub_cat_name;
      options.push({ category: name, name: optionName, ...val });
    });

    return [...options];
  }, []);

export const getActiveCategory = (filters, selectedCategory) =>
  filters
    .map((category) => {
      const isSelected = selectedCategory
        ? category.name === selectedCategory.name
        : category.selected;

      return {
        name: category.name,
        selected: isSelected,
      };
    })
    .find((category) => category.selected);

export const getActiveOptions = (options, activeCategory) =>
  options.filter((option) => option.category === activeCategory.name);

export const updateOptions = (options, selection, activeCategory) =>
  options.map((option) => {
    const isChecked =
      option.category === activeCategory.name
        ? selection.some((val) => option.name === val)
        : option.checked;

    return { ...option, checked: isChecked };
  });

export const clearOptions = (options) =>
  options.map((option) => {
    return { ...option, checked: false };
  });

export const getValues = (options) =>
  options.reduce((values, option) => {
    if (option.checked) values.push(option.name);
    return values;
  }, []);
