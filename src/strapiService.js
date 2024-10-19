const STRAPI_URL = 'http://localhost:1337/api';

export async function getAllPages() {
  try {
    const response = await fetch(`${STRAPI_URL}/pages?populate=*`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching all pages:', error);
    return [];
  }
}

export async function getPage(slug) {
  try {
    const response = await fetch(
      `${STRAPI_URL}/pages?filters[urlslug]=${slug}&populate=*`
    );
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error);
    return null;
  }
}
