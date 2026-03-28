export const ENDPOINTS = {
  // Tour Packages
  tourPackagesList: (page: number = 1) => `/tour-packages/package/summary/?page=${page}`,
  tourPackageBySlugClient: (slug: string) => `/tour-packages/${slug}`,

  // Destinations
  destinationsList: (page: number = 1) => `/destinations/summary/list?page=${page}`,
  destinationBySlugClient: (slug: string) => `/destinations/published/${slug}`,

  // Blogs
  blogs: '/blogs',
  blogList: (page: number = 1) => `/blogs/published/list?page=${page}`,
  blogBySlugClient: (slug: string) => `/blogs/published/${slug}`,

  // Things To Do
  thingsToDo: '/things-to-do',
  thingsToDoList: (page: number = 1) => `/things-to-do/summary/list?page=${page}`,
  thingToDoBySlugClient: (slug: string) => `/things-to-do/published/${slug}`,

  // Gallery
  galleryList: (page: number = 1) => `/gallery/?page=${page}`,

  // Reviews
  reviewsList: (page: number = 1) => `/reviews?page=${page}`,

  // Contact & Subscriptions
  contactMessage: '/contact/message',
  contactSubscribe: '/contact/subscribe',
  
  // Booking
  createBooking: '/bookings/create',
};
