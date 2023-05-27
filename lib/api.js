import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getEntry = async (entry_id) => {
  try {
    const heading = await client.getEntry(entry_id);
    return heading;
  } catch (error) {
    console.error(error);
  }
};

export const getContentType = async (content_type) => {
  try {
    const contentType = await client.getContentType(content_type);
    return contentType;
  } catch (error) {
    console.error(error);
  }
};

export const getEntries = async (content_type) => {
  try {
    const projects = await client.getEntries({content_type});
    // console.log(projects)
    return projects;
  } catch (error) {
    console.error(error);
  }
};
