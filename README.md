# 🎮 Ta-Te-Ti Moderno

Un juego de Ta-Te-Ti (Tres en Raya) moderno y minimalista con interfaz glassmorphism, múltiples niveles de dificultad y modo multijugador.

![Ta-Te-Ti Moderno](https://img.shields.io/badge/Game-Ta--Te--Ti-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Características

### 🎨 Diseño Moderno
- **Interfaz Minimalista**: Diseño limpio con efectos glassmorphism
- **Gradientes Dinámicos**: Fondo con gradientes modernos y atractivos
- **Animaciones Suaves**: Transiciones fluidas y efectos hover responsivos
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla

### 🤖 Modos de Juego

| Modo | Dificultad | Descripción |
|------|------------|-------------|
| 🟢 **Fácil** | Principiante | IA con movimientos aleatorios |
| 🟡 **Intermedio** | Medio | IA que puede ganar y bloquear jugadas |
| 🔴 **Difícil** | Experto | IA con algoritmo Minimax (prácticamente invencible) |
| 👥 **Dos Jugadores** | - | Modo multijugador local |

### 🎯 Funcionalidades

- ✅ Sistema de puntuación persistente durante la sesión
- ✅ Animaciones de victoria con efectos visuales
- ✅ Resaltado automático de celdas ganadoras
- ✅ Interfaz completamente en español
- ✅ Controles intuitivos para reiniciar y navegar
- ✅ Efectos sonoros visuales (glow effects)


## 📱 Capturas de Pantalla

### Menú Principal
```
🎮 Ta-Te-Ti
┌─────────────────────┐
│  🟢 Fácil           │
│  🟡 Intermedio      │
│  🔴 Difícil         │
│  👥 Dos Jugadores   │
└─────────────────────┘
```

### Tablero de Juego
```
🟡 Modo Intermedio - IA Inteligente
X: 2 | O: 1                Turno: X

¡Haz tu jugada!

┌─────┬─────┬─────┐
│  X  │  O  │     │
├─────┼─────┼─────┤
│     │  X  │  O  │
├─────┼─────┼─────┤
│  O  │     │  X  │
└─────┴─────┴─────┘

🔄 Nueva Partida    🏠 Menú Principal
```

## 🛠️ Instalación y Uso

### Método 1: Descarga Directa
1. Descarga el archivo `TatetiJuego.html`
2. Abre el archivo en tu navegador web
3. ¡Listo para jugar!

### Método 2: Clonar Repositorio
```bash
git clone https://github.com/tu-usuario/tateti-moderno.git
cd tateti-moderno
```

Luego abre `TatetiJuego.html` en tu navegador favorito.

### Método 3: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

## 🎮 Cómo Jugar

### Reglas Básicas
1. **Objetivo**: Ser el primero en formar una línea de tres símbolos iguales
2. **Líneas válidas**: Horizontal, vertical o diagonal
3. **Turnos**: Los jugadores alternan turnos (X siempre empieza)

### Controles
- **Click**: Hacer una jugada en una celda vacía
- **🔄 Nueva Partida**: Reinicia el tablero manteniendo el puntaje
- **🏠 Menú Principal**: Vuelve al menú y resetea el puntaje

### Estrategias por Dificultad

#### 🟢 Fácil
- Perfecto para principiantes
- La IA hace movimientos aleatorios
- Fácil de ganar

#### 🟡 Intermedio
- Nivel equilibrado
- La IA puede ganar si tienes descuidos
- Bloquea tus intentos de victoria

#### 🔴 Difícil
- Máximo desafío
- Implementa algoritmo Minimax
- Prácticamente imposible de ganar (empatar es un logro)

## 🔧 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox/Grid
- **JavaScript (ES6+)**: Lógica del juego y manipulación DOM

### Características Técnicas
- **Programación Orientada a Objetos**: Código modular y mantenible
- **Algoritmo Minimax**: Para la IA de nivel difícil
- **CSS Grid**: Para el layout del tablero
- **CSS Transforms**: Para animaciones suaves
- **Backdrop Filter**: Para efectos glassmorphism

## 📁 Estructura del Proyecto

```
Ta-Te-Ti
├── TatetiJuego.html      # Archivo principal del juego
├── Tateti.html           # Estructura HTML
├── Tateti.css            # Estilos CSS
├── Tateti.js             # Lógica JavaScript
└── README.md             # Documentación
```

## 🎨 Personalización

### Colores
Puedes modificar los colores editando las variables CSS en la sección `<style>`:

```css
/* Gradiente de fondo */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Color del jugador X */
.cell.x { color: #ff6b6b; }

/* Color del jugador O */
.cell.o { color: #4ecdc4; }
```

### Dificultad de la IA
Para ajustar la dificultad intermedia, modifica el método `getMediumMove()` en el JavaScript.

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar el juego:

1. **Fork** el repositorio
2. Crea una **rama** para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Agrega nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un **Pull Request**

### Ideas para Contribuciones
- 🎵 Efectos de sonido
- 🌐 Soporte para más idiomas
- 📱 Mejoras en responsive design
- 🎨 Nuevos temas visuales
- 🤖 Nuevos algoritmos de IA
- 📊 Estadísticas avanzadas

## 🐛 Reportar Bugs

Si encuentras algún problema:
1. Ve a la sección [Issues](https://github.com/Vyldrix/Ta-Te-Ti/issues)
2. Describe el problema detalladamente
3. Incluye pasos para reproducir el bug
4. Menciona tu navegador y sistema operativo

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/Vyldrix)

## 🙏 Agradecimientos

- Inspirado en el clásico juego Ta-Te-Ti
- Diseño moderno inspirado en tendencias web actuales
- Algoritmo Minimax para la IA inteligente

## ⭐ ¿Te gustó el proyecto?

Si este proyecto te resultó útil, ¡dale una estrella! ⭐

---

<div align="center">

**¡Diviértete jugando! 🎮**

</div>
