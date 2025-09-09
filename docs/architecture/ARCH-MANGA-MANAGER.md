# AI Manga Manager - Technical Architect
## Database Schema

## Tables
1. Users
   ```sql
   users (
     id UUID PRIMARY KEY,
     email VARCHAR NOT NULL UNIQUE,
     name VARCHAR NOT NULL,
     preferences JSONB,
     avatar_url VARCHAR,
     role VARCHAR NOT NULL DEFAULT 'user',
     last_login TIMESTAMP,
     created_at TIMESTAMP NOT NULL DEFAULT NOW(),
     updated_at TIMESTAMP NOT NULL DEFAULT NOW()
   )
   ```stem Components

### Frontend
- Next.js application with TypeScript
- TailwindCSS for styling
- React Query for data fetching
- Framer Motion for animations
- PWA support for offline functionality
- WebAssembly for performance-critical operations
- Indexed DB for local data storage
- Client-side image processing with Sharp.js

### AI/ML Components
- TensorFlow.js for client-side AI processing
- Image recognition model for manga covers
- OCR model for text extraction
- Classification model for content tagging

### Backend
- Node.js API server
- PostgreSQL database for metadata
- Redis for caching
- Cloud storage for user uploads

### Authentication
- NextAuth.js for authentication
- Role-based access control
- OAuth integration (Google, GitHub)

## Data Flow
1. User uploads manga image/file
2. AI processing pipeline:
   - Image recognition
   - Text extraction
   - Content analysis
3. Metadata storage
4. User library update

## Database Schema

### Tables
1. Users
   ```sql
   users (
     id UUID PRIMARY KEY,
     email VARCHAR,
     name VARCHAR,
     created_at TIMESTAMP
   )
   ```

2. MangaSeries
   ```sql
   manga_series (
     id UUID PRIMARY KEY,
     title VARCHAR NOT NULL,
     original_title VARCHAR,
     romanized_title VARCHAR,
     author VARCHAR NOT NULL,
     artist VARCHAR,
     description TEXT,
     cover_url VARCHAR,
     status VARCHAR NOT NULL DEFAULT 'ongoing',
     demographics VARCHAR[],
     genres VARCHAR[],
     themes VARCHAR[],
     publication_year INTEGER,
     publication_status VARCHAR NOT NULL DEFAULT 'ongoing',
     created_at TIMESTAMP NOT NULL DEFAULT NOW(),
     updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
     last_checked TIMESTAMP,
     CONSTRAINT valid_status CHECK (status IN ('planned', 'ongoing', 'completed', 'dropped')),
     CONSTRAINT valid_pub_status CHECK (publication_status IN ('ongoing', 'completed', 'hiatus', 'cancelled'))
   )
   ```

3. Volumes
   ```sql
   volumes (
     id UUID PRIMARY KEY,
     series_id UUID NOT NULL REFERENCES manga_series ON DELETE CASCADE,
     volume_number INTEGER NOT NULL,
     chapter_start INTEGER,
     chapter_end INTEGER,
     isbn VARCHAR,
     title VARCHAR,
     release_date DATE,
     page_count INTEGER,
     cover_url VARCHAR,
     digital_source VARCHAR,
     physical_condition VARCHAR,
     location VARCHAR,
     notes TEXT,
     created_at TIMESTAMP NOT NULL DEFAULT NOW(),
     updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
     CONSTRAINT valid_volume_number CHECK (volume_number > 0),
     CONSTRAINT valid_chapter_range CHECK (chapter_start IS NULL OR chapter_end IS NULL OR chapter_end >= chapter_start),
     UNIQUE(series_id, volume_number)
   )
   ```

4. Chapters
   ```sql
   chapters (
     id UUID PRIMARY KEY,
     series_id UUID NOT NULL REFERENCES manga_series ON DELETE CASCADE,
     volume_id UUID REFERENCES volumes ON DELETE SET NULL,
     chapter_number DECIMAL NOT NULL,
     title VARCHAR,
     release_date DATE,
     page_count INTEGER,
     read_status VARCHAR NOT NULL DEFAULT 'unread',
     language VARCHAR NOT NULL DEFAULT 'en',
     translation_group VARCHAR,
     source_url VARCHAR,
     downloaded BOOLEAN NOT NULL DEFAULT false,
     local_path VARCHAR,
     created_at TIMESTAMP NOT NULL DEFAULT NOW(),
     updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
     CONSTRAINT valid_chapter_number CHECK (chapter_number > 0),
     CONSTRAINT valid_read_status CHECK (read_status IN ('unread', 'reading', 'completed')),
     UNIQUE(series_id, chapter_number, language)
   )
   ```

5. UserLibrary
   ```sql
   user_library (
     user_id UUID NOT NULL REFERENCES users ON DELETE CASCADE,
     series_id UUID NOT NULL REFERENCES manga_series ON DELETE CASCADE,
     reading_status VARCHAR NOT NULL DEFAULT 'plan_to_read',
     score INTEGER,
     is_favorite BOOLEAN NOT NULL DEFAULT false,
     start_date DATE,
     finish_date DATE,
     times_reread INTEGER NOT NULL DEFAULT 0,
     notes TEXT,
     private BOOLEAN NOT NULL DEFAULT false,
     last_read_chapter DECIMAL,
     last_read_volume INTEGER,
     last_read_page INTEGER,
     last_read_date TIMESTAMP,
     created_at TIMESTAMP NOT NULL DEFAULT NOW(),
     updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
     CONSTRAINT valid_score CHECK (score IS NULL OR (score >= 1 AND score <= 10)),
     CONSTRAINT valid_reading_status CHECK (reading_status IN ('plan_to_read', 'reading', 'completed', 'on_hold', 'dropped')),
     CONSTRAINT valid_dates CHECK (start_date IS NULL OR finish_date IS NULL OR finish_date >= start_date),
     PRIMARY KEY (user_id, series_id)
   )
   ```

6. Tags
   ```sql
   tags (
     id UUID PRIMARY KEY,
     name VARCHAR NOT NULL,
     category VARCHAR NOT NULL,
     description TEXT,
     created_at TIMESTAMP NOT NULL DEFAULT NOW(),
     UNIQUE(name, category)
   )
   ```

7. SeriesTags
   ```sql
   series_tags (
     series_id UUID NOT NULL REFERENCES manga_series ON DELETE CASCADE,
     tag_id UUID NOT NULL REFERENCES tags ON DELETE CASCADE,
     confidence FLOAT,
     user_verified BOOLEAN NOT NULL DEFAULT false,
     created_at TIMESTAMP NOT NULL DEFAULT NOW(),
     PRIMARY KEY (series_id, tag_id)
   )
   ```

8. ReadingHistory
   ```sql
   reading_history (
     id UUID PRIMARY KEY,
     user_id UUID NOT NULL REFERENCES users ON DELETE CASCADE,
     series_id UUID NOT NULL REFERENCES manga_series ON DELETE CASCADE,
     chapter_id UUID REFERENCES chapters ON DELETE SET NULL,
     page_number INTEGER,
     read_duration INTEGER, -- in seconds
     created_at TIMESTAMP NOT NULL DEFAULT NOW()
   )
   ```

## API Endpoints

### Authentication
- POST /api/auth/login
- POST /api/auth/register
- POST /api/auth/logout
- GET /api/auth/me
- PUT /api/auth/preferences

### Manga Series
- POST /api/manga/series
- GET /api/manga/series
- GET /api/manga/series/:id
- PUT /api/manga/series/:id
- DELETE /api/manga/series/:id
- GET /api/manga/series/:id/volumes
- GET /api/manga/series/:id/chapters
- GET /api/manga/series/:id/similar

### Volumes
- POST /api/manga/volumes
- GET /api/manga/volumes/:id
- PUT /api/manga/volumes/:id
- DELETE /api/manga/volumes/:id
- PATCH /api/manga/volumes/:id/condition
- POST /api/manga/volumes/:id/location

### Chapters
- POST /api/manga/chapters
- GET /api/manga/chapters/:id
- PUT /api/manga/chapters/:id
- DELETE /api/manga/chapters/:id
- POST /api/manga/chapters/:id/download
- DELETE /api/manga/chapters/:id/download

### User Library
- GET /api/library
- POST /api/library/:seriesId
- PUT /api/library/:seriesId
- DELETE /api/library/:seriesId
- POST /api/library/:seriesId/favorite
- DELETE /api/library/:seriesId/favorite
- PUT /api/library/:seriesId/progress
- GET /api/library/stats

### Reading History
- GET /api/history
- POST /api/history/record
- GET /api/history/stats
- DELETE /api/history/:id

### AI Processing
- POST /api/ai/detect-series
- POST /api/ai/extract-text
- POST /api/ai/translate
- POST /api/ai/analyze-content
- POST /api/ai/enhance-image
- POST /api/ai/detect-duplicates

### Tags
- GET /api/tags
- POST /api/tags
- PUT /api/tags/:id
- DELETE /api/tags/:id
- POST /api/manga/:seriesId/tags
- DELETE /api/manga/:seriesId/tags/:tagId

### Search & Discovery
- GET /api/search
- GET /api/recommendations
- GET /api/trending
- GET /api/seasonal
- GET /api/new-releases

## Security Considerations
- Rate limiting
- Input validation
- Image upload restrictions
- API authentication
- CORS configuration
