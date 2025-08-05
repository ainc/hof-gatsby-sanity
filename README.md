# hof-gatsby-sanity

## Overview

This project uses a **Yarn monorepo** with two primary workspaces:
- **webs**: A Gatsby site (front-end).
- **studio**: A Sanity Content Studio (schema and content management).

Because **pushing directly to `main` is impossible**, changes must be managed through **issues**, **feature branches**, and **pull requests (PRs)**. This workflow ensures clarity, collaboration, and minimal downtime when integrating changes.

---

## 1. Initial Setup

1. **Clone the repo**  
   ```
   git clone <your-repo-url>  
   ```

2. **Install dependencies (in the root folder)**  
   ``` 
   cd hof-gatsby-sanity 
   cd webs 
   yarn install  
   ```
   ``` 
   cd hof-gatsby-sanity 
   cd studio
   yarn install  
   ```

3. **Verify Yarn is installed**  
   ``` 
   yarn --version  
   ```

---

## 2. Issue-Driven Development

**Before making any changes**, create a GitHub issue describing the task or feature:

1. **Create an issue**:
   - Provide a clear title and description of the task, including any affected areas (`webs`, `studio`, or both).
   
2. **Create a branch off the issue**:
   ```
   git checkout -b feat/<issue-number>-<short-description>  
   ```
   - Example: `feat/42-add-new-schema-field`

---

## 3. Local Development

### 3.1 Gatsby Site (`webs`)

1. **Navigate to `webs`**  
   ```
   cd webs  
   yarn develop  
   ``` 
   - The Gatsby dev (development) server runs at [http://localhost:8000](http://localhost:8000).

2. **Edit code** in the `webs` folder.  
   - Changes appear automatically (hot reload).

### 3.2 Sanity Studio (`studio`)

1. **Navigate to `studio`**  
   ``` 
   cd studio  
   yarn dev  
   ``` 
   - The Studio runs at [http://localhost:3333](http://localhost:3333).

2. **Schema or content updates**  
   - Edit files in `studio/schemas` and see changes in the local Studio.

---

## 4. Changes That Affect Both Studio and Webs

If schema changes in Sanity require corresponding updates in Gatsby, handle them together in a single feature branch.

### Step-by-Step Process

1. **Create a branch off the issue**:
   ``` 
   git checkout -b feat/<issue-number>-<description>  
   ```
   - Example: `feat/15-update-schema-and-frontend`

2. **Edit the schema** in `studio`:
   - Make the necessary updates and test locally:
     ```
     cd studio  
     yarn dev  
     ```

3. **Update Gatsby** in `webs`:
   - Adjust GraphQL queries/components to match the schema changes.
   - Test by running `yarn develop` in `webs`.

4. **Commit changes (both `studio` and `webs`)**:
   ``` 
   git add .  
   git commit -m "Update schema and front-end for issue <#>"  
   ```

5. **Push and open a PR**:
   ``` 
   git push origin feat/<issue-number>-<description>  
   ```
   - Open a PR linking back to the issue.

6. **Merge and Deploy**:
   - After the PR is approved:
     - Merge into `main`.
     - Redeploy the GraphQL schema:
       ``` 
       cd studio  
       yarn deploy-graphql
       ```
     - Deploy the updated Gatsby site.

---

## 5. Handling Independent Updates

### 5.1 Studio-Only Changes

If changes only affect the Studio:

1. **Create an issue and branch**:
   ```
   git checkout -b feat/<issue-number>-<studio-description>  
   ```

2. **Edit schema** or content structures in `studio`:
   - Run `yarn dev` and test locally.

3. **Commit and push**:
   ``` 
   git add .  
   git commit -m "Studio-only changes for issue <#>"  
   git push origin feat/<issue-number>-<studio-description>  
   ```

4. **Open a PR**, merge, and redeploy the GraphQL schema if necessary:
   ```  
   yarn deploy-graphql
   ```

### 5.2 Gatsby-Only Changes

If changes only affect the Gatsby site:

1. **Create an issue and branch**:
   ```  
   git checkout -b feat/<issue-number>-<webs-description>  
   ```

2. **Edit code** in `webs`:
   - Run `yarn develop` and test locally.

3. **Commit and push**:
   ``` 
   git add .  
   git commit -m "Webs-only changes for issue <#>"  
   git push origin feat/<issue-number>-<webs-description>  
   ```

4. **Open a PR**, merge, and deploy the updated Gatsby site.

---

## 6. Syncing Production to Development

If the **production** environment has updates needed in **development**:

1. **Update production data** in the live Studio.

2. **Clone production into development**:
   ``` 
   cd studio  
   yarn clone  
   ```
   - This exports the production dataset and imports it into the development dataset.

3. **Restart local environments** to ensure all data is up to date.

---

## 7. Best Practices

1. **Use Issues for Every Task**  
   - Before starting any work, create an issue describing the task or change.  
   - Reference the issue in your branch name and commit messages.

2. **Keep PRs Small and Focused**  
   - Avoid combining unrelated changes in one PR.  

3. **Test Locally First**  
   - Ensure schema updates and front-end changes are thoroughly tested locally before creating a PR.

4. **Deploy in Sync**  
   - Merge schema changes first (or simultaneously) before deploying front-end updates that depend on them.

5. **Communicate**  
   - Share changes that could impact other developers, especially schema modifications.

---

## 8. Image Optimization

This project uses **Gatsby's image optimization** with **Sanity CMS** for optimal performance and user experience.

### 8.1 Current Setup

The project includes:
- ✅ `gatsbyImageData` from Sanity for optimized images
- ✅ `GatsbyImage` component for automatic optimization
- ✅ `getImage()` helper function for image processing
- ✅ Proper image plugins in `gatsby-config.js`
- ✅ Reusable `OptimizedImage` component
- ✅ Image optimization utilities

### 8.2 Best Practices

#### GraphQL Query Optimization

Always specify dimensions and formats in your GraphQL queries:

```graphql
profilePhoto {
  asset {
    gatsbyImageData(
      width: 300
      height: 300
      placeholder: BLURRED
      formats: [AUTO, WEBP, AVIF]
    )
  }
}
```

#### Common Image Dimensions

Use these standard dimensions for different contexts:

- **Profile Photos**: 300x300px
- **Card Images**: 400x250px
- **Hero Images**: 1200x600px
- **Video Thumbnails**: 430x275px
- **Thumbnails**: 150x150px

#### Image Formats

Always include multiple formats for better browser support:
- `AUTO` - Original format
- `WEBP` - Modern, efficient format
- `AVIF` - Latest, most efficient format

#### Placeholder Types

- `BLURRED` - Shows a blurred version while loading
- `DOMINANT_COLOR` - Shows the dominant color
- `NONE` - No placeholder

### 8.3 Usage Examples

#### Basic Image Component

```jsx
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MyComponent = ({ data }) => {
  const image = getImage(data.profilePhoto.asset.gatsbyImageData);
  
  return (
    <GatsbyImage 
      image={image} 
      alt="Profile photo"
      loading="lazy"
    />
  );
};
```

#### Using the OptimizedImage Component

```jsx
import OptimizedImage from "../components/OptimizedImage/OptimizedImage";

const MyComponent = ({ data }) => {
  return (
    <OptimizedImage
      image={data.profilePhoto}
      alt="Profile photo"
      className="profile-photo"
      sizes="(max-width: 768px) 100vw, 300px"
    />
  );
};
```

#### Responsive Images

For responsive images, use the `sizes` attribute:

```graphql
asset {
  gatsbyImageData(
    placeholder: BLURRED
    formats: [AUTO, WEBP, AVIF]
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  )
}
```

### 8.4 Performance Tips

1. **Lazy Loading**: Always use `loading="lazy"` for images below the fold
2. **Proper Alt Text**: Include descriptive alt text for accessibility
3. **Sizes Attribute**: Use appropriate sizes for responsive images
4. **Format Selection**: Let the browser choose the best format with `AUTO`
5. **Placeholder**: Use `BLURRED` placeholders for better perceived performance

### 8.5 Sanity Studio Configuration

In your Sanity schema, ensure image fields have proper validation:

```js
{
  name: 'profilePhoto',
  title: 'Profile Photo',
  type: 'image',
  options: {
    hotspot: true, // Enables focal point selection
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility',
      validation: Rule => Rule.required(),
    },
  ],
}
```

### 8.6 Troubleshooting

#### Common Issues

1. **Images not loading**: Check if `gatsbyImageData` is properly queried
2. **Blurry images**: Ensure dimensions are appropriate for the display size
3. **Slow loading**: Use lazy loading and proper placeholder types
4. **Missing alt text**: Always include descriptive alt text

#### Debugging

Use the browser's developer tools to:
- Check network tab for image requests
- Verify image formats being served
- Test responsive behavior
- Validate accessibility

### 8.7 Monitoring

Track image performance using:
- Lighthouse audits
- Core Web Vitals
- Network tab analysis
- User experience metrics

---

## Additional Resources

- **Gatsby Docs**: [https://www.gatsbyjs.com/docs/](https://www.gatsbyjs.com/docs/)  
- **Sanity Docs**: [https://www.sanity.io/docs](https://www.sanity.io/docs)
- **Image Optimization Guide**: See section 8 above for detailed image optimization practices
- **Gatsby Image Plugin**: [https://www.gatsbyjs.com/plugins/gatsby-plugin-image/](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)  

---

## Learn More

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
