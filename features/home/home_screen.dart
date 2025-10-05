import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  HomeScreen({Key? key}) : super(key: key);

  // Placeholder data for banner images
  final List<String> bannerImages = [
    'https://via.placeholder.com/600x200?text=Promotion+1',
    'https://via.placeholder.com/600x200?text=Promotion+2',
    'https://via.placeholder.com/600x200?text=Promotion+3',
  ];

  // Placeholder data for product categories
  final List<Map<String, dynamic>> categories = [
    {'icon': Icons.spa, 'label': 'Skincare'},
    {'icon': Icons.face, 'label': 'Makeup'},
    {'icon': Icons.local_florist, 'label': 'Haircare'},
    {'icon': Icons.bubble_chart, 'label': 'Fragrance'},
    {'icon': Icons.favorite, 'label': 'Wellness'},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // App bar with logo and search icon
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        title: Row(
          children: [
            // Logo placeholder
            Image.network(
              'https://via.placeholder.com/40x40?text=Logo',
              width: 40,
              height: 40,
            ),
            const SizedBox(width: 8),
            const Text(
              'K-Beauty',
              style: TextStyle(
                color: Colors.black87,
                fontWeight: FontWeight.bold,
                fontSize: 20,
                fontFamily: 'NotoSansKR', // Korean style font if available
              ),
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.search, color: Colors.black54),
            onPressed: () {
              // TODO: Implement search action
            },
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Search bar section with soft rounded edges and minimal Korean style
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(
                color: Colors.grey[200],
                borderRadius: BorderRadius.circular(24),
              ),
              child: const TextField(
                decoration: InputDecoration(
                  icon: Icon(Icons.search, color: Colors.grey),
                  hintText: 'Search products',
                  border: InputBorder.none,
                ),
              ),
            ),
            const SizedBox(height: 16),

            // Banner carousel for promotions using PageView
            SizedBox(
              height: 180,
              child: PageView.builder(
                itemCount: bannerImages.length,
                controller: PageController(viewportFraction: 0.9),
                itemBuilder: (context, index) {
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(16),
                      child: Image.network(
                        bannerImages[index],
                        fit: BoxFit.cover,
                      ),
                    ),
                  );
                },
              ),
            ),
            const SizedBox(height: 24),

            // Horizontal scrollable list of product categories (icons + labels)
            SizedBox(
              height: 100,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                itemCount: categories.length,
                separatorBuilder: (context, index) => const SizedBox(width: 16),
                itemBuilder: (context, index) {
                  final category = categories[index];
                  return Column(
                    children: [
                      Container(
                        decoration: BoxDecoration(
                          color: Colors.pink[50],
                          borderRadius: BorderRadius.circular(16),
                        ),
                        padding: const EdgeInsets.all(16),
                        child: Icon(
                          category['icon'],
                          size: 32,
                          color: Colors.pink[300],
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        category['label'],
                        style: const TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                          color: Colors.black87,
                        ),
                      ),
                    ],
                  );
                },
              ),
            ),

            // Use Flexible and Expanded to fill remaining space if needed
            const Spacer(),
          ],
        ),
      ),
      backgroundColor: Colors.white,
    );
  }
}
