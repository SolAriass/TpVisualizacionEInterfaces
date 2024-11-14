/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,js}", "./src/pages/carrito.html"],

    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                monoSans: ["Mono Sans", "sans-serif"],
            },
            backgroundImage: {
                imagenBanner:
                    "url('https://st2.depositphotos.com/1145675/49523/i/450/depositphotos_495235196-stock-photo-teenager-studying-desk-books.jpg')",
                imagenForo:
                    "url('https://media.istockphoto.com/id/1446806057/es/foto/joven-estudiante-feliz-usando-computadora-port%C3%A1til-viendo-webinar-escribiendo-en-casa.jpg?s=612x612&w=0&k=20&c=eAEreJw-5Uerr2vDkFTQLgPGacbdZZDq7xpqrSTJ71A=')",
            },
            // colors: {
            // 	primary: {
            // 	  light: '#0056D2',
            // 	  dark: '#699FFF',
            // 	},
            // 	secondary: {
            // 	  light: '#1C7C54',
            // 	  dark: '#66C29C',
            // 	},
            // 	accent: {
            // 	  light: '#9B51E0',
            // 	  dark: '#B67AEF',
            // 	},
            // 	warning: {
            // 	  light: '#F2994A',
            // 	  dark: '#FFA65A',
            // 	},
            // 	error: {
            // 	  light: '#EB5757',
            // 	  dark: '#FF6B6B',
            // 	},
            // 	background: {
            // 	  light: '#FAFAFA',
            // 	  dark: '#181818',
            // 	},
            // 	text: {
            // 	  light: '#333333',
            // 	  dark: '#E5E5E5',
            // 	},
            // 	divider: {
            // 	  light: '#E0E0E0',
            // 	  dark: '#3E3E3E',
            // 	},
            //   },

            // colors: {
            //     light: {
            //         primary: "#005BBB",
            //         secondary: "#FFAA33",
            //         background: "#F5F5F5",
            //         surface: "#FFFFFF",
            //         textPrimary: "#333333",
            //         textSecondary: "#555555",
            //         highlight: "#FFD700",
            //         accent: "#00A5A5",
            //     },
            //     dark: {
            //         primary: "#3399FF",
            //         secondary: "#FFAA33",
            //         background: "#1A1A1A",
            //         surface: "#333333",
            //         textPrimary: "#E5E5E5",
            //         textSecondary: "#B3B3B3",
            //         highlight: "#FFD700",
            //         accent: "#4CD4B0",
            //     },
            // },

            colors: {
                primary: {
                    light: "#1E3A8A", // Azul para modo claro (Header, Footer)
                    dark: "#1D4ED8", // Azul para modo oscuro (Header, Footer)
                },
                background: {
                    light: "#F7FAFC", // Fondo claro
                    dark: "#1A202C", // Fondo oscuro
                },
                textPrimary: {
                    light: "#1A202C", // Gris oscuro para texto principal en claro
                    dark: "#E2E8F0", // Gris claro para texto principal en oscuro
                },
                textSecondary: {
                    light: "#4A5568", // Gris medio para subtítulos en claro
                    dark: "#A0AEC0", // Gris claro para subtítulos en oscuro
                },
                accent: {
                    light: "#3B82F6", // Azul brillante para botones de acción en claro
                    dark: "#60A5FA", // Azul brillante para botones de acción en oscuro
                },
                secondary: {
                    light: "#F59E0B", // Naranja para botones secundarios en claro
                    dark: "#FBD38D", // Naranja más suave para botones secundarios en oscuro
                },
            },
        },
    },
    plugins: [],
};
