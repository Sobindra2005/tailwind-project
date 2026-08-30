import { useEffect, useRef, useState } from 'react';
import { productsSearch } from '../data';

export function ProductSearch() {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsSearch);
  const inputRef = useRef(null);

  useEffect(() => {
    const searchTerm = query.trim().toLowerCase();

    setFilteredProducts(
      productsSearch.filter((product) =>
        `${product.name} ${product.category}`.toLowerCase().includes(searchTerm)
      )
    );
  }, [query]);

  function clearSearch() {
    setQuery('');
    inputRef.current?.focus();
  }

  return (
    <main className="min-h-screen bg-stone-100 px-4 py-12 text-stone-900 sm:px-6">
      <section className="mx-auto w-full max-w-xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
            Catalog
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">Find a product</h1>
        </div>

        <div className="relative mb-6">
          <label className="sr-only" htmlFor="product-search">
            Search products
          </label>
          <input
            ref={inputRef}
            id="product-search"
            className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 pr-12 text-sm outline-none transition placeholder:text-stone-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
            type="text"
            placeholder="Search by name or category"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-lg text-stone-500 transition hover:bg-stone-100 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              type="button"
              aria-label="Clear search"
              onClick={clearSearch}
            >
              &times;
            </button>
          )}
        </div>

        <div className="overflow-hidden rounded-lg border border-stone-200 bg-white">
          {filteredProducts.length > 0 ? (
            <ul>
              {filteredProducts.map((product) => (
                <li
                  className="flex items-center justify-between border-b border-stone-100 px-4 py-4 last:border-b-0"
                  key={product.id}
                >
                  <div>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                    <p className="mt-1 text-xs text-stone-500">{product.category}</p>
                  </div>
                  <span className="text-sm font-medium text-stone-700">
                    ${product.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-8 text-center text-sm text-stone-500">
              No products found.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}