const fs = require('fs');
const path = require('path');

// Files that need import fixes
const filesToFix = [
  'components/form-components.tsx',
  'context/search-hits-context.tsx',
  'components/page-view.tsx',
  'components/navigation-menu.tsx',
  'common/search/index.tsx',
  'app/blog/_components/blogpost-card.tsx',
  'common/dark-light-image.tsx',
  'common/avatar.tsx',
  'app/[...slug]/page.tsx',
  'app/_sections/accordion-faq/index.tsx',
  'app/_sections/accordion-faq/accordion.tsx',
  'app/_sections/callout-2/index.tsx',
  'app/changelog/[slug]/page.tsx',
  'app/changelog/_components/changelog-fragment.ts',
  'app/_sections/callout-1/index.tsx',
  'app/_sections/hero/index.tsx',
  'app/_sections/pricing/index.tsx',
  'app/_sections/form/index.tsx',
  'app/_sections/features/side-features/index.tsx',
  'app/_sections/features/features-grid/index.tsx',
  'app/_sections/faq/index.tsx',
  'app/_sections/pricing-comparation/fragments.ts',
  'app/_sections/features/features-list/index.tsx',
  'app/_sections/features/features-hero/index.tsx',
  'components/tracked-button.tsx',
  'app/_sections/testimonials-grid/index.tsx',
  'app/_sections/testimonials/index.tsx',
  'app/_sections/testimonials-grid/testimonials-list.tsx'
];

filesToFix.forEach(filePath => {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace imports from lib/basehub/fragments
      content = content.replace(
        /from ["'].*lib\/basehub\/fragments["']/g,
        'from "../../lib/types/static-types"'
      );
      
      // Fix relative paths for different directory depths
      const depth = filePath.split('/').length - 1;
      let relativePath = '../'.repeat(depth) + 'lib/types/static-types';
      
      content = content.replace(
        /from ["'].*lib\/types\/static-types["']/g,
        `from "${relativePath}"`
      );
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Import fixes completed!');