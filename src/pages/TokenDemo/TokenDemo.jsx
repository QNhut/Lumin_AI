import React from 'react';
import styles from './TokenDemo.module.scss';

const TokenDemo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Lumin AI Design Tokens Demo</h1>
        <p className={styles.subtitle}>Showcase of all Kauri design tokens and SCSS variables</p>
      </div>

      {/* Colors Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Colors</h2>

        <div className={styles.colorGrid}>
          <div className={styles.colorGroup}>
            <h3>Core Colors</h3>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.primary}`}></div>
              <span>$kiwi-colors-core-primary</span>
              <span className={styles.colorValue}>#035970</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.secondary}`}></div>
              <span>$kiwi-colors-core-secondary</span>
              <span className={styles.colorValue}>#1c333d</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.tertiary}`}></div>
              <span>$kiwi-colors-core-tertiary</span>
              <span className={styles.colorValue}>#2c2d4f</span>
            </div>
          </div>

          <div className={styles.colorGroup}>
            <h3>Semantic Colors</h3>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.error}`}></div>
              <span>$kiwi-colors-semantic-error</span>
              <span className={styles.colorValue}>#bf0b00</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.warning}`}></div>
              <span>$kiwi-colors-semantic-warning</span>
              <span className={styles.colorValue}>#f7be00</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.success}`}></div>
              <span>$kiwi-colors-semantic-success</span>
              <span className={styles.colorValue}>#34863f</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.info}`}></div>
              <span>$kiwi-colors-semantic-information</span>
              <span className={styles.colorValue}>#1f5abd</span>
            </div>
          </div>

          <div className={styles.colorGroup}>
            <h3>Brand Colors</h3>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.luminBrand}`}></div>
              <span>$kiwi-colors-custom-brand-lumin-lumin</span>
              <span className={styles.colorValue}>#f2385a</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.signBrand}`}></div>
              <span>$kiwi-colors-custom-brand-sign-sign</span>
              <span className={styles.colorValue}>#786eff</span>
            </div>
          </div>

          <div className={styles.colorGroup}>
            <h3>Surface Colors</h3>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.surface}`}></div>
              <span>$kiwi-colors-surface-surface</span>
              <span className={styles.colorValue}>#f8f9fb</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.surfaceVariant}`}></div>
              <span>$kiwi-colors-surface-surface-variant</span>
              <span className={styles.colorValue}>#dee3e6</span>
            </div>
            <div className={styles.colorSwatch}>
              <div className={`${styles.colorBox} ${styles.outline}`}></div>
              <span>$kiwi-colors-surface-outline</span>
              <span className={styles.colorValue}>#a6abae</span>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Kauri Typography Mixins</h2>

        <div className={styles.typographyGrid}>
          <div className={styles.typeExample}>
            <div className={styles.displayLg}>Display Large</div>
            <code>@include kauri-typography-display-lg</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.displayMd}>Display Medium</div>
            <code>@include kauri-typography-display-md</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.displaySm}>Display Small</div>
            <code>@include kauri-typography-display-sm</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.headlineXl}>Headline XL</div>
            <code>@include kauri-typography-headline-xl</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.headlineLg}>Headline Large</div>
            <code>@include kauri-typography-headline-lg</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.headlineMd}>Headline Medium</div>
            <code>@include kauri-typography-headline-md</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.headlineSm}>Headline Small</div>
            <code>@include kauri-typography-headline-sm</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.titleXl}>Title XL</div>
            <code>@include kauri-typography-title-xl</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.titleLg}>Title Large</div>
            <code>@include kauri-typography-title-lg</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.titleMd}>Title Medium</div>
            <code>@include kauri-typography-title-md</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.titleSm}>Title Small</div>
            <code>@include kauri-typography-title-sm</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.bodyRegularLg}>
              Body Regular Large - This is regular body text that demonstrates the body large typography style.
            </div>
            <code>@include kauri-typography-body-regular-lg</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.bodyRegularMd}>
              Body Regular Medium - This is regular body text that demonstrates the body medium typography style.
            </div>
            <code>@include kauri-typography-body-regular-md</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.bodyRegularSm}>
              Body Regular Small - This is regular body text that demonstrates the body small typography style.
            </div>
            <code>@include kauri-typography-body-regular-sm</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.bodySemiboldLg}>
              Body Semibold Large - This is semibold body text that demonstrates the body large typography style.
            </div>
            <code>@include kauri-typography-body-semibold-lg</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.bodySemiboldMd}>
              Body Semibold Medium - This is semibold body text that demonstrates the body medium typography style.
            </div>
            <code>@include kauri-typography-body-semibold-md</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.bodySemiboldSm}>
              Body Semibold Small - This is semibold body text that demonstrates the body small typography style.
            </div>
            <code>@include kauri-typography-body-semibold-sm</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.labelXl}>Label XL</div>
            <code>@include kauri-typography-label-xl</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.labelLg}>Label Large</div>
            <code>@include kauri-typography-label-lg</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.labelMd}>Label Medium</div>
            <code>@include kauri-typography-label-md</code>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.labelSm}>Label Small</div>
            <code>@include kauri-typography-label-sm</code>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Spacing Tokens</h2>

        <div className={styles.spacingGrid}>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{ '--spacing': '0px' }}>
              0px
            </div>
            <code>$kiwi-spacing-0</code>
          </div>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{ '--spacing': '8px' }}>
              8px
            </div>
            <code>$kiwi-spacing-1</code>
          </div>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{ '--spacing': '16px' }}>
              16px
            </div>
            <code>$kiwi-spacing-2</code>
          </div>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{ '--spacing': '24px' }}>
              24px
            </div>
            <code>$kiwi-spacing-3</code>
          </div>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{ '--spacing': '32px' }}>
              32px
            </div>
            <code>$kiwi-spacing-4</code>
          </div>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{ '--spacing': '40px' }}>
              40px
            </div>
            <code>$kiwi-spacing-5</code>
          </div>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{ '--spacing': '48px' }}>
              48px
            </div>
            <code>$kiwi-spacing-6</code>
          </div>
          <div className={styles.spacingExample}>
            <div className={styles.spacingBox} style={{ '--spacing': '64px' }}>
              64px
            </div>
            <code>$kiwi-spacing-8</code>
          </div>
        </div>
      </section>

      {/* Border Radius Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Border Radius Tokens</h2>

        <div className={styles.radiusGrid}>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{ '--radius': '0px' }}>
              None - 0px
            </div>
            <code>$kiwi-border-radius-none</code>
          </div>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{ '--radius': '2px' }}>
              XS - 2px
            </div>
            <code>$kiwi-border-radius-xs</code>
          </div>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{ '--radius': '4px' }}>
              SM - 4px
            </div>
            <code>$kiwi-border-radius-sm</code>
          </div>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{ '--radius': '8px' }}>
              MD - 8px
            </div>
            <code>$kiwi-border-radius-md</code>
          </div>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{ '--radius': '16px' }}>
              LG - 16px
            </div>
            <code>$kiwi-border-radius-lg</code>
          </div>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{ '--radius': '24px' }}>
              XL - 24px
            </div>
            <code>$kiwi-border-radius-xl</code>
          </div>
          <div className={styles.radiusExample}>
            <div className={styles.radiusBox} style={{ '--radius': '800px' }}>
              Rounded - 800px
            </div>
            <code>$kiwi-border-radius-rounded</code>
          </div>
        </div>
      </section>

      {/* Box Shadows Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Box Shadow Tokens</h2>

        <div className={styles.shadowGrid}>
          <div className={styles.shadowExample}>
            <div className={`${styles.shadowBox} ${styles.shadow1}`}>Shadow 1</div>
            <code>$kiwi-shadow-1</code>
          </div>
          <div className={styles.shadowExample}>
            <div className={`${styles.shadowBox} ${styles.shadow2}`}>Shadow 2</div>
            <code>$kiwi-shadow-2</code>
          </div>
          <div className={styles.shadowExample}>
            <div className={`${styles.shadowBox} ${styles.shadow3}`}>Shadow 3</div>
            <code>$kiwi-shadow-3</code>
          </div>
          <div className={styles.shadowExample}>
            <div className={`${styles.shadowBox} ${styles.shadow4}`}>Shadow 4</div>
            <code>$kiwi-shadow-4</code>
          </div>
          <div className={styles.shadowExample}>
            <div className={`${styles.shadowBox} ${styles.shadow5}`}>Shadow 5</div>
            <code>$kiwi-shadow-5</code>
          </div>
        </div>
      </section>

      {/* Media Query Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Media Query Breakpoints</h2>

        <div className={styles.mediaQueryGrid}>
          <div className={styles.mediaQueryExample}>
            <div className={styles.breakpointName}>XS - Extra Small</div>
            <div className={styles.breakpointValue}>360px</div>
            <div className={styles.responsiveDemo}>
              This box changes color based on screen size. Try resizing your browser!
            </div>
          </div>
          <div className={styles.mediaQueryExample}>
            <div className={styles.breakpointName}>SM - Small</div>
            <div className={styles.breakpointValue}>430px</div>
          </div>
          <div className={styles.mediaQueryExample}>
            <div className={styles.breakpointName}>MD - Medium</div>
            <div className={styles.breakpointValue}>768px</div>
          </div>
          <div className={styles.mediaQueryExample}>
            <div className={styles.breakpointName}>LG - Large</div>
            <div className={styles.breakpointValue}>880px</div>
          </div>
          <div className={styles.mediaQueryExample}>
            <div className={styles.breakpointName}>XL - Extra Large</div>
            <div className={styles.breakpointValue}>1280px</div>
          </div>
          <div className={styles.mediaQueryExample}>
            <div className={styles.breakpointName}>XXL - Extra Extra Large</div>
            <div className={styles.breakpointValue}>1366px</div>
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
            <p>This is an example card using design tokens for spacing, colors, typography, and shadows.</p>
          </div>

          <div className={styles.alert}>
            <strong>Alert:</strong> This is an example alert component using semantic colors and typography tokens.
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenDemo;
