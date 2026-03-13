# Unified Search Hub

Custom Search Dashboard for Shopping Websites

A lightweight, zero-dependency, single-page dashboard designed to streamline searching across multiple e-commerce and quick-commerce platforms. Built as a personal utility to quickly aggregate and compare items without needing to navigate individual websites first.

## Features

* **Multi-Platform Routing:** Instantly dispatch search queries to Amazon, Flipkart, Blinkit, Zepto, Swiggy Instamart, and BigBasket from a single, unified interface.
* **Device-Aware Execution:** Built-in logic detects the operating environment. 
  * On desktop environments, searches cleanly open in new browser tabs. 
  * On mobile environments, it bypasses browser tabs to seamlessly trigger native application deep-links.
* **Zero Bloat:** Written entirely in pure HTML, CSS, and Vanilla JavaScript. No external libraries, no frameworks, no telemetry, and no server-side processing required.
* **Tailored Filtering:** Includes pre-configured URL parameters to automatically sort by price (Low to High), filter by Prime/Assured delivery, and enforce minimum star ratings.

## Usage & Deployment

This tool requires no build process. 

It can be opened directly in any modern browser as a local HTML file. For the best mobile experience (and to unlock the "Add to Home Screen" PWA functionality on Android/iOS), the `index.html` file can be statically hosted via GitHub Pages, Cloudflare Pages, or any standard web server.
