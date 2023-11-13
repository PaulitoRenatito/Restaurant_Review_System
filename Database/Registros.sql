INSERT INTO public."user" (first_name, last_name, profile_picture, email, password)
('João', 'Sfredo', 'joao.jpg', 'joao@email.com', 'hashed_password_1'),
('Lara', 'Rossetti', 'lara.jpg', 'lara@email.com', 'hashed_password_2'),
('Gabriel', 'Talim', 'gabriel.jpg', 'gabriel@email.com', 'hashed_password_3'),
('Paulo', 'Renato', 'paulo.jpg', 'paulo@email.com', 'hashed_password_4'),
('Matheus', 'Dias', 'matheus.jpg', 'matheus@email.com', 'hashed_password_5');

INSERT INTO public.restaurant (name, type_of_kitchen, phone, email, opening_hours, address, image, min_price, max_price, description)
('Restaurante Brasileiro', 'Brasileira', '123456789', 'restauranteBrasileiro@email.com', '08:00 - 22:00', 'Rua A, 123', 
'https://imgs.search.brave.com/ym_RnP-a62QM6D3UoLUt9_8O_jqs15oRLqm_Vlk-Ji4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUx/N2U5MzM1ZTRiMDg0/NzgyMzUwMDg0NS8x/Mzc5NDIyMDQwMjc3/LVU4VFRQUkdIRUZH/MVhMRDlGOVRBL2Nv/bWlkYS1icmFzaWxl/aXJhLmpwZw', 
20.00, 50.00, 'Experimente a autêntica culinária brasileira no nosso restaurante, onde cada prato é uma viagem pelos sabores exuberantes do Brasil. De feijoadas a churrascos suculentos, oferecemos uma variedade de pratos que destacam a diversidade da gastronomia brasileira.'),

('Restaurante Italiano', 'Italiana', '987654321', 'restauranteItaliano@email.com', '09:00 - 23:00', 'Avenida B, 456',
'https://imgs.search.brave.com/qbhgeK2cXenXBlSt1wHR64_bMOYEilZXPhfLGETSKpU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmR1b2dvdXJtZXQu/Y29tLmJyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA3LzM4/LUR1by1Hb3VybWV0/LW1hY2FycmFvLTY3/NXg2NzUuanBn', 
15.00, 40.00, 'Bem-vindo ao nosso pedaço da Itália! Descubra a verdadeira paixão pela comida italiana, onde cada prato é preparado com ingredientes frescos e sazonais. De massas artesanais a pizzas deliciosas, oferecemos uma autêntica experiência culinária italiana.'),

('Restaurante Japones', 'Japonesa', '456123789', 'restauranteJapones@email.com', '11:00 - 20:00', 'Praça C, 789', 
'https://imgs.search.brave.com/DrlcK-i499QSs-dP8zRO9Gtfd270w9MPm6Wfa81Aks4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saDUu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3Av/QUYxUWlwTWZLWXA4/U0QwM3ItUGx4OGJP/ZXk1VnZKbURKZk10/T1c5b3pFUzE', 
25.00, 60.00, 'Desfrute da elegância e da sofisticação da culinária japonesa em nosso restaurante. De sushis frescos a pratos tradicionais como ramen e tempura, nossa cozinha oferece uma experiência única que combina técnica requintada e ingredientes de alta qualidade.'),

('Restaurante Mexicano', 'Mexicana', '789321456', 'restauranteMexicano@email.com', '10:00 - 21:00', 'Travessa D, 101', 
'https://imgs.search.brave.com/Eui5OdF7COo4CDDEr7KwVEw6r6xR7WQYX19AKaTczO4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZG9ub21l/LmNvbS5ici93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxMy8wNi9D/T01JREEtMjUyNTIw/TUVYSUNBTkEuanBn/P2ZpdD01MTIsMzQx/JnNzbD0x', 
18.00, 45.00, 'Bem-vindo ao nosso vibrante restaurante mexicano, onde cada prato é uma explosão de sabores e cores. Da guacamole fresca aos tacos picantes, nossa cozinha mexicana autêntica oferece uma experiência culinária emocionante. Descubra a paixão e o calor do México em cada mordida.'),

('Restaurante Indiano', 'Indiana', '321456987', 'restauranteIndiano@email.com', '12:00 - 22:30', 'Alameda E, 202', 
'https://imgs.search.brave.com/5dKBX6HhQccANgQ1zqjm68d-Xn61kjYd3DDOx3VMgj0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aW1lb3V0LmNv/bS9pbWFnZXMvMTAz/NjI5NzMzLzYzMC80/NzIvaW1hZ2UuanBn', 
30.00, 70.00, 'Explore os aromas e os temperos exóticos da Índia em nosso restaurante indiano. Da rica variedade de curries aos pratos tandoori assados no forno, oferecemos uma jornada gastronômica que desperta os sentidos. Descubra a magia da culinária indiana, onde cada prato conta uma história de tradição e sabor.'),

('Restaurante Chines', 'Chinesa', '654789321', 'restauranteChines@email.com', '07:00 - 20:00', 'Rua F, 303', 
'https://imgs.search.brave.com/gLtMagnujrZ7RrOt_QYUXSLzFWk8nmb0NVwqUVMczf4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92ZWph/c3AuYWJyaWwuY29t/LmJyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzEyL1dvbnRv/bi1mcml0by1kZS1m/cmFuZ28tZS1wb3Jj/by1hby1tb2xoby1k/ZS10YW1hcmluZG9f/My5qcGcuanBnP3F1/YWxpdHk9NzAmc3Ry/aXA9aW5mbyZ3PTY4/MCZoPTQ1MyZjcm9w/PTE', 
12.00, 35.00, 'Explore os sabores vibrantes da China em nosso restaurante. De pratos cantoneses a especialidades picantes de Sichuan, nossa cozinha oferece uma ampla gama de opções para satisfazer seu paladar. Experimente a diversidade e a riqueza da culinária chinesa conosco.'),

('Restaurante Frances', 'Francesa', '987456321', 'restauranteFrances@email.com', '10:30 - 23:00', 'Avenida G, 404', 
'https://imgs.search.brave.com/6BdSTFJfZGY8M2lREmWWsRol-a9JeHGJEv8jamNRiNk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92aWFn/ZW1lZ2FzdHJvbm9t/aWEuY25uYnJhc2ls/LmNvbS5ici93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDE3LzA0L2NvbmZp/dC1kZS1jYW5hcmRf/ZnJlZGR5LmpwZw', 
28.00, 55.00, 'Bem-vindo a um pedaço da França em nosso restaurante. Descubra a sofisticação e a elegância da cozinha francesa, onde cada prato é uma obra-prima artesanal. De clássicos como coq au vin a sobremesas irresistíveis, oferecemos uma experiência gastronômica refinada.'),

('Restaurante Mediterrâneo', 'Mediterrânea', '456987321', 'restauranteMediterrâneo@email.com', '09:00 - 21:30', 'Praça H, 505', 
'https://imgs.search.brave.com/UGKwyyD7VG8WujSa3Hs2fP_Bd4L2VCxVQ7K5ALiZ0Gc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vdGYtbGFiL2lt/YWdlL3VwbG9hZC93/XzEyMDAsaF82NzQs/Y19maWxsLHFfYXV0/byxmX2F1dG8vcmVz/dGF1cmFudC82ZmQ2/OGQxYi01ZWM0LTQ4/OWUtYTdlYS0yNjZl/YjQ0M2I4ZmEvOTFl/NmNhMTgtMjIxYi00/NDNiLWFmMjktMjA0/NDc2MzE1MmFmLmpw/Zw', 
17.00, 42.00, 'Transporte seus sentidos para as margens do Mediterrâneo em nosso restaurante. Descubra a simplicidade e os sabores frescos da culinária mediterrânea, com pratos que celebram ingredientes locais, azeites de oliva aromáticos e ervas frescas.'),

('Restaurante Vegetariano', 'Vegetariana', '123789456', 'restauranteVegetariano@email.com', '08:30 - 20:30', 'Travessa I, 606', 
'https://imgs.search.brave.com/EnDXeoOrKZ0fPlk5zQYMYM5N_RikEYsAW9OfLckudGY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmR1b2dvdXJtZXQu/Y29tLmJyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA3LzEx/LUR1by1Hb3VybWV0/LUN1bGluYXJpYS0x/MjAweDY3NS5qcGc', 
22.00, 58.00, 'Sabor e saúde se encontram em nosso restaurante vegetariano, onde cada prato é uma celebração de ingredientes frescos e naturais. De saladas coloridas a pratos quentes e reconfortantes, oferecemos opções deliciosas para todos os amantes da culinária vegetariana.'),

('Restaurante Sushi', 'Sushi', '789456123', 'restauranteSushi@email.com', '11:30 - 22:00', 'Alameda J, 707', 
'https://imgs.search.brave.com/Nq1wEaotuzSva90ya1AwHwEwbXqMWCMDWLF44N7rdVw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmdldGluYXBwLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMS8xODIx/MDgzZC1hOWMyLTRj/YjYtODhjOS01N2Nl/MTBmMjBhYWMud2Vi/cA', 
32.00, 75.00, 'Entre em um mundo de frescura e criatividade em nosso restaurante de sushi. Nossos chefs habilidosos combinam técnicas tradicionais com inovação, oferecendo uma variedade de sushis, sashimis e rolls que satisfazem tanto os paladares clássicos quanto os mais aventureiros.');