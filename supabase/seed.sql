-- supabase/seed.sql
-- Initial data for Nails by Natalia application

-- Insert services
insert into services (name, description, price, duration, image_url) values
('Manicura Clásica', 'Cuidado y esmaltado tradicional para uñas naturales', 15000, 45, 'https://images.unsplash.com/photo-1586201375761-83865001e31c'),
('Manicura de Gel', 'Uñas de gel duraderas con acabado brillante profesional', 25000, 60, 'https://images.unsplash.com/photo-1596456412080-883bb04eb5b1'),
('Extensions de Uñas', 'Alargamiento y refuerzo con acrílico o gel', 30000, 75, 'https://images.unsplash.com/photo-1606052546585-047b494cc0ac'),
('Nail Art', 'Diseños artísticos personalizados', 20000, 60, 'https://images.unsplash.com/photo-1617784302421-96c034132a4a'),
('Reparación de Uñas', 'Tratamiento y reconstrucción de uñas dañadas', 18000, 40, 'https://images.unsplash.com/photo-1605952819287-4ebe47b38e3e'),
('Pedicura Spa', 'Tratamiento completo para pies', 22000, 50, 'https://images.unsplash.com/photo-1616474072358-8bab7bd7ec90');

-- Insert sample portfolio items
insert into portfolio (title, description, image_url, category) values
('Diseño de uñas gel ombre', 'Uñas de gel con efecto ombre y detalles brillantes', 'https://images.unsplash.com/photo-1586201375761-83865001e31c', 'gel'),
('Nail art floral delicado', 'Diseño floral delicado en tonos pastel', 'https://images.unsplash.com/photo-1617784302421-96c034132a4a', 'nail-art'),
('Extensions almendradas naturales', 'Extensions con forma almendrada y acabado natural', 'https://images.unsplash.com/photo-1606052546585-047b494cc0ac', 'acrylic'),
('Manicura francesa moderna', 'Clásica manicura francesa con toque moderno', 'https://images.unsplash.com/photo-1616474072358-8bab7bd7ec90', 'special-occasion'),
('Diseño geométrico dorado', 'Diseño geométrico en tonos dorados y nude', 'https://images.unsplash.com/photo-1620249523088-b0e5541cf435', 'nail-art'),
('Pedicura spa relajante', 'Tratamiento completo para pies con masaje', 'https://images.unsplash.com/photo-1616474072358-8bab7bd7ec90', 'pedicura');

-- Insert sample admin user (password: admin123 - in real app, use proper hashing)
insert into admin_users (email, password_hash, full_name, role) values
('admin@nailsbynatalia.cl', '$2a$10$N9qo8uLickgZe2VwK1t3EuV7oGqJdG7v4iN5t6u7v8w9x0y1z2A3B', 'Administrador', 'admin');