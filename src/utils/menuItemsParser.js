export default (articles) => {
  let menuItems = [];
  for (let item of articles.items) {
    const category = item.fields.category;
    const topic = item.fields.topic;
    if (!menuItems.find((el) => el.category === category)) {
      menuItems.push({ category, topics: [] });
      const idx = menuItems.findIndex((el) => el.category === category);
      menuItems[idx].panel = `panel${idx + 1}`;
      menuItems[idx].key = idx + 1;
    }

    if (!!menuItems.find((el) => el.category === category)) {
      // menuItems[menuItems.findIndex((el) => el.category === category)][category].push(item.fields.topic);
      const idx = menuItems.findIndex((el) => el.category === category);

      menuItems[idx].topics.push(topic);
    }
  }
  return menuItems.reverse();
};
