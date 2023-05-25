import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getHeading = async () => {
  try {
    const heading = await client.getEntry('cuneIdeGSYoxwlaCmpBua');
    return heading;
  } catch (error) {
    console.error(error);
  }
};

export const getProjects = async () => {
  try {
    const projects = await client.getEntries({ content_type: 'thingsIveMade'});
    // console.log(projects)
    return projects;
  } catch (error) {
    console.error(error);
  }
};
