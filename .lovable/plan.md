

## Nâng cấp giao diện toàn bộ trang web — thêm màu sắc và đẹp mắt hơn

### Vấn đề hiện tại
Giao diện hiện tại khá đơn điệu: nền trắng/xám, các card trắng, thiếu màu sắc nổi bật. Nhiều trang (Rules, News, Nomination, PlaceDetail) chỉ có nền trắng đơn giản, không có hero banner hoặc decorative elements.

### Kế hoạch nâng cấp

#### 1. Cập nhật CSS & Tailwind — thêm gradient và màu sắc mới
- Thêm các gradient mới: `gradient-ocean` (xanh dương → tím), `gradient-sunset` (cam → hồng), `gradient-tropical` (xanh lá → xanh dương)
- Thêm các decorative pattern CSS (circles, blobs) cho background sections
- Thêm các keyframe animation mới: `float`, `shimmer`, `gradient-shift`

#### 2. Trang chủ (Index.tsx)
- Section giới thiệu: thêm gradient border cho các card 3 bước, mỗi card có màu accent khác nhau (xanh, cam, tím)
- Section hạng mục: mỗi category card có gradient background riêng biệt theo theme (ẩm thực → cam, biển → xanh dương, v.v.)
- Section CTA: thêm animated gradient background, decorative floating shapes
- Section đề cử: thêm decorative dots/circles pattern background

#### 3. Trang Đề cử (Nomination.tsx)
- Thêm hero banner gradient (tương tự NominationList) thay vì chỉ text trên nền trắng
- Form card: thêm gradient top-border, left accent line cho mỗi section
- Upload area: thêm gradient border khi hover, animation pulse

#### 4. Trang Danh sách (NominationList.tsx)
- Category buttons: mỗi category có gradient background riêng theo chủ đề
- Thêm decorative elements cho hero banner (floating icons, wave divider)

#### 5. NominationCard component
- Thêm gradient background khác nhau cho mỗi category thay vì cùng 1 gradient
- Thêm colored accent line ở top mỗi card

#### 6. Trang Chi tiết (PlaceDetail.tsx)
- Thêm hero banner gradient lớn phía trên thay vì chỉ có rectangle nhỏ
- Thêm breadcrumb đẹp hơn, info card có gradient sidebar
- Thêm decorative elements (wave separator, colored tags)

#### 7. Trang Thể lệ (Rules.tsx)
- Thêm hero banner gradient
- Mỗi rule card có numbered badge với gradient màu sắc
- Thêm timeline/connector line giữa các rules
- Alternating subtle background colors cho cards

#### 8. Trang Tin tức (News.tsx)
- Thêm hero banner gradient
- News cards: featured article lớn hơn, thumbnail gradient đa dạng màu theo category
- Thêm colored tag badges cho categories

#### 9. Header & Footer
- Header: thêm subtle gradient bottom border thay vì border đơn
- Footer: thêm gradient top separator, social icons với hover colors, wave shape divider

#### 10. Data — thêm color cho categories
- Mỗi category trong `data.ts` sẽ có thêm field `color` (gradient string) để sử dụng xuyên suốt

### Chi tiết kỹ thuật
- **Files sửa**: `src/index.css`, `tailwind.config.ts`, `src/lib/data.ts`, tất cả pages (`Index`, `Nomination`, `NominationList`, `PlaceDetail`, `Rules`, `News`), components (`Header`, `Footer`, `NominationCard`, `HeroSlider`)
- **Không thêm thư viện mới** — chỉ dùng Tailwind CSS + framer-motion đã có
- **Category colors**: map mỗi hạng mục với gradient riêng (ví dụ: Ẩm thực → `from-orange-500 to-red-500`, Biển đảo → `from-cyan-400 to-blue-600`)

