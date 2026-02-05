# SportOn Frontend

Platform e-commerce untuk penjualan produk olahraga dengan fitur admin dashboard untuk manajemen produk, kategori, transaksi, dan informasi bank.

## 📋 Daftar Isi

- [Tentang Aplikasi](#tentang-aplikasi)
- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi](#instalasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Perintah Build](#perintah-build)
- [Struktur Folder](#struktur-folder)
- [Dependencies](#dependencies)
- [Konfigurasi](#konfigurasi)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Panduan Kontribusi](#panduan-kontribusi)

## 🎯 Tentang Aplikasi

SportOn adalah aplikasi e-commerce modern yang dibangun dengan Next.js 16 dan React 19. Aplikasi ini menyediakan dua interface utama:

- **Landing Page**: Untuk customer yang ingin browsing dan membeli produk
- **Admin Dashboard**: Untuk manajemen produk, kategori, transaksi, dan bank info

## ✨ Fitur Utama

### Landing Page (Public)

- 🏠 Halaman beranda dengan hero section
- 🏷️ Kategori produk
- 🛍️ Katalog produk dengan detail lengkap
- 🛒 Keranjang belanja (shopping cart)
- 💳 Proses checkout
- 💰 Integrasi payment gateway
- 📦 Tracking status pesanan (submitted, confirmed, rejected)

### Admin Dashboard (Protected)

- 🔐 Authentication & Login
- 📦 Manajemen Produk (CRUD)
- 🏷️ Manajemen Kategori (CRUD)
- 🏦 Manajemen Informasi Bank (CRUD)
- 💸 Riwayat Transaksi
- 🖼️ Upload dan preview gambar produk
- 🗑️ Modal konfirmasi penghapusan

### Fitur Umum

- 📱 Responsive Design (Tailwind CSS)
- 🎨 UI Components yang reusable
- 🔔 Toast Notifications
- 📦 State Management dengan Zustand
- 🎯 Type-safe dengan TypeScript

## 🛠️ Teknologi yang Digunakan

### Framework & Library Utama

| Teknologi      | Versi  | Fungsi                        |
| -------------- | ------ | ----------------------------- |
| **Next.js**    | 16.1.1 | Full-stack React framework    |
| **React**      | 19.2.3 | UI library                    |
| **React DOM**  | 19.2.3 | React rendering untuk browser |
| **TypeScript** | ^5     | Type safety                   |

### Styling

| Teknologi        | Versi    | Fungsi                      |
| ---------------- | -------- | --------------------------- |
| **Tailwind CSS** | ^4       | Utility-first CSS framework |
| **PostCSS**      | ^8.5.6   | CSS transformation          |
| **Autoprefixer** | ^10.4.23 | CSS vendor prefixes         |

### UI & Icons

| Teknologi       | Versi  | Fungsi                                |
| --------------- | ------ | ------------------------------------- |
| **React Icons** | ^5.5.0 | Icon library (Material, Feather, etc) |

### State Management & Notifications

| Teknologi          | Versi   | Fungsi                                    |
| ------------------ | ------- | ----------------------------------------- |
| **Zustand**        | ^5.0.10 | Lightweight state management (cart store) |
| **React Toastify** | ^11.0.5 | Toast notifications                       |

### Development Tools

| Teknologi            | Versi | Fungsi                           |
| -------------------- | ----- | -------------------------------- |
| **ESLint**           | ^9    | Code linting & quality           |
| **@types/node**      | ^20   | TypeScript types untuk Node.js   |
| **@types/react**     | ^19   | TypeScript types untuk React     |
| **@types/react-dom** | ^19   | TypeScript types untuk React DOM |

## 📁 Struktur Proyek

```
sporton-fe/
├── app/                           # Next.js App Router
│   ├── globals.css               # Global styles
│   ├── (auth)/                   # Auth layout group
│   │   ├── layout.tsx
│   │   └── admin/login/          # Login page
│   ├── (dashboard)/              # Dashboard layout group
│   │   ├── layout.tsx
│   │   ├── admin/                # Admin pages
│   │   │   ├── bank-info/
│   │   │   ├── categories/
│   │   │   ├── products/
│   │   │   └── transactions/
│   │   └── _components/          # Dashboard components
│   │       ├── bank-info/
│   │       ├── categories/
│   │       ├── products/
│   │       ├── transactions/
│   │       ├── layouts/
│   │       └── ui/
│   ├── (landing)/                # Landing page layout group
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Home page
│   │   ├── checkout/
│   │   ├── payment/
│   │   ├── product/[id]/         # Product detail
│   │   ├── order-status/[id]/
│   │   └── _components/          # Landing components
│   │       ├── checkout/
│   │       ├── home/
│   │       ├── payment/
│   │       ├── product-detail/
│   │       └── ui/
│   ├── hooks/                    # Custom React hooks
│   │   └── use-cart-store.ts    # Zustand cart store
│   ├── lib/                      # Utility libraries
│   │   └── api.ts
│   ├── service/                  # API services
│   │   ├── auth.service.ts
│   │   ├── bank.service.ts
│   │   ├── category.service.ts
│   │   ├── product.service.ts
│   │   └── transaction.service.ts
│   ├── types/                    # TypeScript types
│   │   └── index.ts
│   └── utils/                    # Utility functions
│       └── price-formatter.tsx
├── public/                        # Static files
│   └── images/
│       ├── categories/
│       └── products/
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
└── README.md

```

## 🚀 Instalasi

### Prasyarat

- **Node.js** >= 18.17 atau **pnpm** >= 8.0
- **Git**

### Langkah Instalasi

1. **Clone Repository**

```bash
git clone <repository-url>
cd sporton-fe
```

2. **Install Dependencies**

```bash
# Menggunakan pnpm (recommended)
pnpm install

# Atau menggunakan npm
npm install

# Atau menggunakan yarn
yarn install
```

3. **Setup Environment Variables** (jika diperlukan)

```bash
# Buat file .env.local
cp .env.example .env.local

# Edit .env.local dengan konfigurasi API endpoint
```

## 💻 Menjalankan Aplikasi

### Development Mode

```bash
pnpm dev
# atau
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

### Production Build

```bash
pnpm build
pnpm start
```

### Linting

```bash
pnpm lint
# atau
npm run lint
```

## 🏗️ Perintah Build

```bash
# Development server dengan hot reload
pnpm dev

# Build untuk production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## 📂 Struktur Folder Detailed

### `/app` - Next.js App Router

Menggunakan Next.js App Router dengan route groups untuk mengorganisir layout:

- **(auth)** - Layout untuk halaman autentikasi
- **(dashboard)** - Layout untuk admin dashboard
- **(landing)** - Layout untuk halaman publik customer

### `/app/hooks`

Custom React hooks untuk logic yang dapat digunakan kembali:

- `use-cart-store` - Zustand store untuk manajemen shopping cart

### `/app/lib`

Utility libraries dan helper functions:

- `api.ts` - Konfigurasi dan helper untuk API calls

### `/app/service`

Service layer untuk API communication:

- `auth.service.ts` - Authentication endpoints
- `product.service.ts` - Product CRUD operations
- `category.service.ts` - Category CRUD operations
- `bank.service.ts` - Bank information management
- `transaction.service.ts` - Transaction/Order management

### `/app/types`

TypeScript type definitions untuk seluruh aplikasi

### `/app/utils`

Utility functions:

- `price-formatter.tsx` - Format harga dengan currency

### `/public`

Static files yang diakses langsung:

- Images untuk categories dan products

## 📦 Dependencies

### Production Dependencies

#### Next.js Ecosystem

- **next** (16.1.1) - React framework dengan server-side rendering
- **react** (19.2.3) - UI library
- **react-dom** (19.2.3) - React rendering untuk DOM

#### Styling

- **tailwindcss** (^4) - Utility-first CSS framework
- **postcss** (^8.5.6) - CSS processor
- **autoprefixer** (^10.4.23) - Browser vendor prefixes

#### UI & Icons

- **react-icons** (^5.5.0) - Icon library (Feather, Material Design, dll)
- **react-toastify** (^11.0.5) - Toast notification component

#### State Management

- **zustand** (^5.0.10) - Lightweight state management library

### Development Dependencies

#### Type Safety

- **@types/node** (^20) - Node.js type definitions
- **@types/react** (^19) - React type definitions
- **@types/react-dom** (^19) - React DOM type definitions
- **typescript** (^5) - TypeScript compiler

#### Code Quality

- **eslint** (^9) - JavaScript linter
- **eslint-config-next** (16.1.1) - ESLint config untuk Next.js

## ⚙️ Konfigurasi

### Next.js Config (`next.config.ts`)

Konfigurasi Next.js untuk production build dan optimization.

### TypeScript Config (`tsconfig.json`)

Konfigurasi TypeScript compiler dengan path aliases dan strict mode.

### Tailwind CSS Config

Konfigurasi Tailwind CSS dengan custom colors, fonts, dan breakpoints.

### PostCSS Config (`postcss.config.mjs`)

Konfigurasi PostCSS dengan Tailwind dan Autoprefixer.

### ESLint Config (`eslint.config.mjs`)

Konfigurasi ESLint untuk code quality dan consistency.

## 🔑 API Integration

Aplikasi menggunakan service layer untuk semua API calls:

### Authentication

```typescript
// app/service/auth.service.ts
- Login
- Logout
- Session management
```

### Products

```typescript
// app/service/product.service.ts
- Get all products
- Get product by ID
- Create product
- Update product
- Delete product
```

### Categories

```typescript
// app/service/category.service.ts
- Get all categories
- Create category
- Update category
- Delete category
```

### Bank Information

```typescript
// app/service/bank.service.ts
- Get bank info
- Create bank info
- Update bank info
- Delete bank info
```

### Transactions

```typescript
// app/service/transaction.service.ts
- Get transaction history
- Create transaction
- Update transaction status
```

## 🛒 State Management (Zustand)

Cart state dikelola dengan Zustand:

```typescript
// app/hooks/use-cart-store.ts
- Add item to cart
- Remove item from cart
- Update quantity
- Clear cart
- Get cart items
```

## 🎨 Styling

Aplikasi menggunakan **Tailwind CSS v4** untuk styling:

- Utility-first approach
- Responsive design dengan breakpoints
- Dark mode support (jika dikonfigurasi)
- Custom colors dan typography

## 📱 Responsive Design

Aplikasi fully responsive untuk:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🔐 Security Features

- Type-safe dengan TypeScript
- Protected routes untuk admin dashboard
- Login authentication
- CSRF protection (via Next.js)
- Secure cookie handling

## 📈 Performance Optimizations

- Code splitting dengan Next.js
- Image optimization dengan `next/image`
- Dynamic imports untuk code splitting
- Zustand untuk minimal re-renders

## 🐛 Troubleshooting

### Port sudah terpakai

```bash
# Gunakan port berbeda
pnpm dev -p 3001
```

### Clear cache dan rebuild

```bash
rm -rf .next
pnpm build
```

### Dependencies issue

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 📝 Panduan Kontribusi

1. Create feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request


Untuk pertanyaan atau dukungan, silakan buat issue di repository ini.

---

**Dibuat dengan ❤️ menggunakan Next.js 16 dan React 19**
