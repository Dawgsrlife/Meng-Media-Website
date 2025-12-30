# Unused Components

The following components have been removed from the main site flow but are preserved in the codebase for potential future use or reference.

## 1. Sliding Showcase Gallery
- **Component**: `components/ScrollingGallery.tsx`
- **Description**: Horizontal scrolling gallery displaying "Showcase 1" through "Showcase 5" with large images.
- **Location**: Was previously in `app/page.tsx` under the `#about` section.

## 2. Past Clients List
- **Component**: `components/Clients.tsx`
- **Description**: Auto-scrolling list of hotel/brand names (Hilton, Marriott, etc.).
- **Note**: The spacing `spaceBetween` was adjusted to `40` (reduced from `80`) just before archiving, per user request.
- **Location**: Was previously in `app/page.tsx` under the `#about` section.

## 3. Community Love (Proof)
- **Component**: `components/Proof.tsx`
- **Description**: Grid of images/testimonials with a "Become our first testimonial" SVG placeholder.
- **Location**: Was previously in `app/page.tsx`.

To restore these components, uncomment their imports and usage in `app/page.tsx`.
