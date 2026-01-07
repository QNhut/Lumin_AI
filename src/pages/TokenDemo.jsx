import React from 'react';
import styles from './TokenDemo.module.scss';

const TokenDemo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Lumin AI Design Tokens Demo</h1>
        <p className={styles.subtitle}>Showcase of all design tokens and SCSS variables</p>
      </div>

      {/* Colors Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Colors</h2>
        
        <div className={styles.colorGrid}>
          <div className={styles.colorGroup}>
            <h3>Core Colors</h3>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.primary}`}></div>
              <span>Primary</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.secondary}`}></div>
              <span>Secondary</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.tertiary}`}></div>
              <span>Tertiary</span>
            </div>
          </div>

          <div className={styles.colorGroup}>
            <h3>Semantic Colors</h3>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.error}`}></div>
              <span>Error</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.warning}`}></div>
              <span>Warning</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.success}`}></div>
              <span>Success</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.info}`}></div>
              <span>Info</span>
            </div>
          </div>

          <div className={styles.colorGroup}>
            <h3>Brand Colors</h3>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.luminBrand}`}></div>
              <span>Lumin Brand</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.signBrand}`}></div>
              <span>Sign Brand</span>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Typography</h2>
        
        <div className={styles.typographyGrid}>
          <div className={styles.typeExample}>
            <div className={styles.displayLg}>Display Large</div>
            <code>@include kiwi-typography-display-lg</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.displayMd}>Display Medium</div>
            <code>@include kiwi-typography-display-md</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.headlineXl}>Headline XL</div>
            <code>@include kiwi-typography-headline-xl</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.headlineLg}>Headline Large</div>
            <code>@include kiwi-typography-headline-lg</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.titleLg}>Title Large</div>
            <code>@include kiwi-typography-title-lg</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.bodyLg}>Body Large - This is regular body text that demonstrates the body large typography style.</div>
            <code>@include kiwi-typography-body-lg</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.bodyMd}>Body Medium - This is regular body text that demonstrates the body medium typography style.</div>
            <code>@include kiwi-typography-body-md</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.labelLg}>Label Large</div>
            <code>@include kiwi-typography-label-lg</code>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Spacing</h2>
        
        <div className={styles.spacingGrid}>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{'--spacing': '8px'}}>8px</div>
            <code>$kiwi-spacing-1</code>
          </div>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{'--spacing': '16px'}}>16px</div>
            <code>$kiwi-spacing-2</code>
          </div>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{'--spacing': '24px'}}>24px</div>
            <code>$kiwi-spacing-3</code>
          </div>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{'--spacing': '32px'}}>32px</div>
            <code>$kiwi-spacing-4</code>
          </div>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{'--spacing': '48px'}}>48px</div>
            <code>$kiwi-spacing-6</code>
          </div>
        </div>
      </section>

      {/* Border Radius Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Border Radius</h2>
        
        <div className={styles.radiusGrid}>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{'--radius': '2px'}}>XS - 2px</div>
            <code>$kiwi-border-radius-xs</code>
          </div>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{'--radius': '4px'}}>SM - 4px</div>
            <code>$kiwi-border-radius-sm</code>
          </div>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{'--radius': '8px'}}>MD - 8px</div>
            <code>$kiwi-border-radius-md</code>
          </div>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{'--radius': '16px'}}>LG - 16px</div>
            <code>$kiwi-border-radius-lg</code>
          </div>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{'--radius': '24px'}}>XL - 24px</div>
            <code>$kiwi-border-radius-xl</code>
          </div>
        </div>
      </section>

      {/* Component Examples */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Component Examples</h2>
        
        <div className={styles.componentGrid}>
          <button className={styles.primaryButton}>Primary Button</button>
          <button className={styles.secondaryButton}>Secondary Button</button>
          <button className={styles.tertiaryButton}>Tertiary Button</button>
          
          <div className={styles.card}>
            <h3>Card Component</h3>
            <p>This is an example card using design tokens for spacing, colors, and typography.</p>
          </div>
          
          <div className={styles.alert}>
            <strong>Alert:</strong> This is an example alert component using semantic colors.
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenDemo;
