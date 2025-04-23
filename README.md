# Backend Tareas - API REST de Gestión de Tareas

API REST construida con NestJS para la gestión de tareas. Proporciona endpoints para crear, leer, actualizar y eliminar tareas.

## 🚀 Características

- ✨ Arquitectura REST moderna
- 📝 Operaciones CRUD completas
- ✅ Validación de datos con class-validator
- 🔄 Manejo de errores robusto
- 🔍 Documentación de API con decoradores
- 🛡️ Implementación de CORS
- 📊 Almacenamiento en memoria (expandible a base de datos)

## 🛠️ Tecnologías Utilizadas

- **NestJS**: Framework backend principal
- **TypeScript**: Lenguaje de programación tipado
- **class-validator**: Validación de DTOs
- **class-transformer**: Transformación de objetos
- **RxJS**: Manejo de operaciones asíncronas

## 📋 Prerrequisitos

- Node.js (v18 o superior)
- npm (v9 o superior)
- NestJS CLI (v10 o superior)

## 🔧 Instalación

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd backend-tareas
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run start:dev
   ```

El servidor estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
src/
├── tasks/
│   ├── controllers/
│   │   └── tasks.controller.ts    # Controlador de tareas
│   ├── services/
│   │   └── tasks.service.ts       # Servicio de tareas
│   ├── dtos/
│   │   ├── create-task.dto.ts     # DTO para crear tareas
│   │   └── update-task.dto.ts     # DTO para actualizar tareas
│   ├── entities/
│   │   └── task.entity.ts         # Entidad de tarea
│   └── tasks.module.ts            # Módulo de tareas
├── app.module.ts                  # Módulo principal
└── main.ts                       # Punto de entrada
```

## 🔌 API Endpoints

### Tareas

- `GET /tasks`
  - Obtiene todas las tareas
  - Respuesta: `Task[]`

- `GET /tasks/:id`
  - Obtiene una tarea por ID
  - Respuesta: `Task`
  - Error: `404` si no se encuentra

- `POST /tasks`
  - Crea una nueva tarea
  - Body: `CreateTaskDto`
  - Respuesta: `Task`
  - Status: `201` created

- `PUT /tasks/:id`
  - Actualiza una tarea existente
  - Body: `UpdateTaskDto`
  - Respuesta: `Task`
  - Error: `404` si no se encuentra

- `DELETE /tasks/:id`
  - Elimina una tarea
  - Status: `204` no content
  - Error: `404` si no se encuentra

## 📊 Modelos de Datos

### Task

```typescript
interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}
```

### CreateTaskDto

```typescript
class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  completed: boolean;
}
```

## 🔒 CORS

El servidor está configurado para aceptar solicitudes del frontend en `http://localhost:4200`

## 🧪 Testing

Para ejecutar las pruebas unitarias:

```bash
npm run test
```

Para ejecutar las pruebas e2e:

```bash
npm run test:e2e
```

Para ver la cobertura de código:

```bash
npm run test:cov
```

## 📚 Documentación

La documentación del código sigue las mejores prácticas de JSDoc y está disponible en los siguientes archivos principales:

- `tasks.controller.ts`: Documentación de endpoints
- `tasks.service.ts`: Documentación de lógica de negocio
- `task.entity.ts`: Documentación del modelo de datos

## 🔄 Estado del Almacenamiento

Actualmente, los datos se almacenan en memoria. Para implementar persistencia, se puede:

1. Integrar TypeORM/Mongoose para bases de datos SQL/NoSQL
2. Implementar un servicio de caché como Redis
3. Utilizar un servicio de almacenamiento en la nube

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## ✍️ Autores

- Fabián Rivera - *Desarrollo Inicial* - [Frakxman](https://github.com/frakxman)

## 🎉 Agradecimientos

- NestJS Team por el excelente framework
- La comunidad de TypeScript
- Todos los contribuidores que ayudaron a mejorar este proyecto
