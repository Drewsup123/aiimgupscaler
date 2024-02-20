const TemplateLibraryTab = () => {
    return (
        <div id="modal-template-library" className="palleon-tab">
            <div className="palleon-templates-wrap">
                <div className="palleon-tabs">
                    <ul className="palleon-tabs-menu">
                        <li
                            className="active"
                            data-target="#palleon-all-templates"
                        >
                            All
                        </li>
                        <li data-target="#palleon-templates-favorites">
                            My Favorites
                        </li>
                        <li data-target="#palleon-mytemplates">My Templates</li>
                    </ul>
                    {/* All Templates */}
                    <div
                        id="palleon-all-templates"
                        className="palleon-tab active"
                    >
                        <div className="palleon-templates-menu-wrap">
                            <input
                                id="palleon-template-search-keyword"
                                type="search"
                                className="palleon-form-field"
                                placeholder="Search by keyword..."
                                autoComplete="off"
                            />
                            <select
                                id="palleon-templates-menu"
                                className="palleon-select palleon-select2"
                                autoComplete="off"
                            >
                                <option value="all" selected={undefined}>
                                    All Categories (44)
                                </option>
                                <option value="blog-banners">
                                    Blog Banners (8)
                                </option>
                                <option value="banner-ads">
                                    Banner Ads (15)
                                </option>
                                <option value="collage">Collage (7)</option>
                                <option value="quote">Quote (5)</option>
                                <option value="medium-rectangle">
                                    Medium Rectangle Ads (2)
                                </option>
                                <option value="leaderboard">
                                    Leaderboard Ads (4)
                                </option>
                                <option value="billboard">
                                    Billboard Ads (2)
                                </option>
                                <option value="facebook-ads">
                                    Facebook Ads (3)
                                </option>
                                <option value="instagram-post">
                                    Instagram Post (5)
                                </option>
                                <option value="facebook-post">
                                    Facebook Post (4)
                                </option>
                                <option value="twitter-post">
                                    Twitter Post (3)
                                </option>
                                <option value="youtube-thumbnail">
                                    Youtube Thumbnail (2)
                                </option>
                            </select>
                            <button
                                id="palleon-template-search"
                                type="button"
                                className="palleon-btn primary"
                            >
                                <span className="material-icons">search</span>
                            </button>
                        </div>
                        <div className="palleon-templates-content">
                            <div className="palleon-grid-wrap">
                                <div
                                    id="palleon-all-templates-noimg"
                                    className="notice notice-warning d-none"
                                >
                                    Nothing found.
                                </div>
                                <div
                                    id="palleon-templates-grid"
                                    className="palleon-grid template-grid template-selection paginated"
                                    data-perpage={21}
                                >
                                    <div
                                        className="grid-item"
                                        data-keyword="Blog Banner - 2240x1260px"
                                        data-category="blog-banners"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={25}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/25.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/25.jpg"
                                                    data-title="Blog Banner - 2240x1260px"
                                                    data-preview="files/templates/img/25-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Blog Banner - 2240x1260px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Modern Collage - 2 Photos - 2000x1300px"
                                        data-category="collage"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={20}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/20.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/20.jpg"
                                                    data-title="Modern Collage - 2 Photos - 2000x1300px"
                                                    data-preview="files/templates/img/20-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                {" "}
                                                Modern Collage - 2 Photos -
                                                2000x1300px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Youtube Video Thumbnail - 1280x720px"
                                        data-category="youtube-thumbnail"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={15}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/15.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/15.jpg"
                                                    data-title="Youtube Video Thumbnail - 1280x720px"
                                                    data-preview="files/templates/img/15-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Youtube Video Thumbnail -
                                                1280x720px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Black Friday Banner - Leaderboard - 728x90px"
                                        data-category="leaderboard"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={23}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/23.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/23.jpg"
                                                    data-title="Black Friday Banner - Leaderboard - 728x90px"
                                                    data-preview="files/templates/img/23-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Black Friday Banner -
                                                Leaderboard - 728x90px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Trending Music Video - Youtube Thumbnail - 1280x720px"
                                        data-category="youtube-thumbnail"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={14}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/14.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/14.jpg"
                                                    data-title="Trending Music Video - Youtube Thumbnail - 1280x720px"
                                                    data-preview="files/templates/img/14-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Trending Music Video - Youtube
                                                Thumbnail - 1280x720px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Kids Style Collage - 2 Photos - 2000x2000px"
                                        data-category="collage"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={18}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/18.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/18.jpg"
                                                    data-title="Kids Style Collage - 2 Photos - 2000x2000px"
                                                    data-preview="files/templates/img/18-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Kids Style Collage - 2 Photos -
                                                2000x2000px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Cafe Banner - Billboard - 970x250px"
                                        data-category="billboard"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={28}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/28.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/28.jpg"
                                                    data-title="Cafe Banner - Billboard - 970x250px"
                                                    data-preview="files/templates/img/28-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Cafe Banner - Billboard -
                                                970x250px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Beauty - Leaderboard - 728x90px"
                                        data-category="leaderboard"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={36}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/36.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/36.jpg"
                                                    data-title="Beauty - Leaderboard - 728x90px"
                                                    data-preview="files/templates/img/36-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Beauty - Leaderboard - 728x90px{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Digital Agency Banner - Leaderboard - 728x90px"
                                        data-category="leaderboard"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={8}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/8.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/8.jpg"
                                                    data-title="Digital Agency Banner - Leaderboard - 728x90px"
                                                    data-preview="files/templates/img/8-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Digital Agency Banner -
                                                Leaderboard - 728x90px{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Happy Birthday - Facebook Post - 940x788px"
                                        data-category="facebook-post"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={29}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/29.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/29.jpg"
                                                    data-title="Happy Birthday - Facebook Post - 940x788px"
                                                    data-preview="files/templates/img/29-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Happy Birthday - Facebook Post -
                                                940x788px{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Blog Banner - 2240x1260px"
                                        data-category="blog-banners"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={27}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/27.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/27.jpg"
                                                    data-title="Blog Banner - 2240x1260px"
                                                    data-preview="files/templates/img/27-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Blog Banner - 2240x1260px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Collage - 3 Photos - 2000x2000px"
                                        data-category="collage"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={16}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/16.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/16.jpg"
                                                    data-title="Collage - 3 Photos - 2000x2000px"
                                                    data-preview="files/templates/img/16-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Collage - 3 Photos - 2000x2000px{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Banner - Twitter Post - 1600x900px"
                                        data-category="twitter-post"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={39}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/39.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/39.jpg"
                                                    data-title="Banner - Twitter Post - 1600x900px"
                                                    data-preview="files/templates/img/39-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Banner - Twitter Post -
                                                1600x900px{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Christmas Sale - Instagram Post - Square - 1080x1080px"
                                        data-category="instagram-post"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={12}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/12.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/12.jpg"
                                                    data-title="Christmas Sale - Instagram Post - Square - 1080x1080px"
                                                    data-preview="files/templates/img/12-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Christmas Sale - Instagram Post
                                                - Square - 1080x1080px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Quote - Instagram Post - 1080x1080px"
                                        data-category="instagram-post"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={32}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/32.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/32.jpg"
                                                    data-title="Quote - Instagram Post - 1080x1080px"
                                                    data-preview="files/templates/img/32-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Quote - Instagram Post -
                                                1080x1080px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Modern Collage - 3 Photos - 2000x2000px"
                                        data-category="collage"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={22}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/22.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/22.jpg"
                                                    data-title="Modern Collage - 3 Photos - 2000x2000px"
                                                    data-preview="files/templates/img/22-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Modern Collage - 3 Photos -
                                                2000x2000px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Quote - 900x600px"
                                        data-category="quote"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={4}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/4.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/4.jpg"
                                                    data-title="Quote - 900x600px"
                                                    data-preview="files/templates/img/4-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Quote - 900x600px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Blog Banner - 2240x1260px"
                                        data-category="blog-banners"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={26}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/26.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/26.jpg"
                                                    data-title="Blog Banner - 2240x1260px"
                                                    data-preview="files/templates/img/26-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Blog Banner - 2240x1260px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Sale Banner - Instagram Post - Discount Offer - Square - 1080x1080px "
                                        data-category="instagram-post"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={1}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/1.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/1.jpg"
                                                    data-title="Sale Banner - Instagram Post - Discount Offer - Square - 1080x1080px"
                                                    data-preview="files/templates/img/1-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Sale Banner - Instagram Post -
                                                Discount Offer - Square -
                                                1080x1080px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Summer Sale - Facebook Ad - 1200x628px "
                                        data-category="facebook-ads"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={10}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/10.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/10.jpg"
                                                    data-title="Summer Sale - Facebook Ad - 1200x628px"
                                                    data-preview="files/templates/img/10-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Summer Sale - Facebook Ad -
                                                1200x628px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Kids Style Collage - 2 Photos - 2000x1300px "
                                        data-category="collage"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={17}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/17.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/17.jpg"
                                                    data-title="Kids Style Collage - 2 Photos - 2000x1300px"
                                                    data-preview="files/templates/img/17-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Kids Style Collage - 2 Photos -
                                                2000x1300px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Happy Childrens Day - Facebook Post - 940x788px"
                                        data-category="facebook-post"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={33}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/33.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/33.jpg"
                                                    data-title="Happy Childrens Day - Facebook Post - 940x788px"
                                                    data-preview="files/templates/img/33-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Happy Childrens Day - Facebook
                                                Post - 940x788px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Fitness Banner - Medium Rectangle - 300x250px "
                                        data-category="banner-ads"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={6}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/6.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/6.jpg"
                                                    data-title="Fitness Banner - Medium Rectangle - 300x250px"
                                                    data-preview="files/templates/img/6-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Fitness Banner - Medium
                                                Rectangle - 300x250px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Quote - Twitter Post - 1600x900px "
                                        data-category="quote"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={37}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/37.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/37.jpg"
                                                    data-title="Quote - Twitter Post - 1600x900px"
                                                    data-preview="files/templates/img/37-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Quote - Twitter Post -
                                                1600x900px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Real Estate - Facebook Post - 940x788px "
                                        data-category="facebook-post"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={41}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/41.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/41.jpg"
                                                    data-title="Real Estate - Facebook Post - 940x788px"
                                                    data-preview="files/templates/img/41-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Real Estate - Facebook Post -
                                                940x788px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Sale Banner - Facebook Ad - 1200x628px "
                                        data-category="facebook-ads"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={11}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/11.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/11.jpg"
                                                    data-title="Sale Banner - Facebook Ad - 1200x628px"
                                                    data-preview="files/templates/img/11-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Sale Banner - Facebook Ad -
                                                1200x628px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Collage - 5 Photos - 2000x1000px"
                                        data-category="collage"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={21}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/21.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/21.jpg"
                                                    data-title="Collage - 5 Photos - 2000x1000px"
                                                    data-preview="files/templates/img/21-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Collage - 5 Photos - 2000x1000px{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Fitness Banner - Medium Rectangle - 300x250px"
                                        data-category="banner-ads"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={7}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/7.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/7.jpg"
                                                    data-title="Fitness Banner - Medium Rectangle - 300x250px"
                                                    data-preview="files/templates/img/7-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Fitness Banner - Medium
                                                Rectangle - 300x250px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Quote - 800x600px"
                                        data-category="quote"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={3}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/3.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/3.jpg"
                                                    data-title="Quote - 800x600px"
                                                    data-preview="files/templates/img/3-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Quote - 800x600px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Business Banner - Instagram Post - 1080x1080px"
                                        data-category="instagram-post"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={42}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/42.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/42.jpg"
                                                    data-title="Business Banner - Instagram Post - 1080x1080px"
                                                    data-preview="files/templates/img/42-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Business Banner - Instagram Post
                                                - 1080x1080px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Business Facebook Post - 940x788px "
                                        data-category="facebook-post"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={13}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/13.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/13.jpg"
                                                    data-title="Business Facebook Post - 940x788px"
                                                    data-preview="files/templates/img/13-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Business Facebook Post -
                                                940x788px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="App Banner - 2000x1300px"
                                        data-category="banner-ads"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={5}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/5.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/5.jpg"
                                                    data-title="App Banner - 2000x1300px"
                                                    data-preview="files/templates/img/5-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                App Banner - 2000x1300px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Business Blog Banner - 2240x1260px"
                                        data-category="blog-banners"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={34}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/34.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/34.jpg"
                                                    data-title="Business Blog Banner - 2240x1260px"
                                                    data-preview="files/templates/img/34-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Business Blog Banner -
                                                2240x1260px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Valentines Day - Instagram Post - Square - 1080x1080px"
                                        data-category="instagram-post"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={2}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/2.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/2.jpg"
                                                    data-title="Valentines Day - Instagram Post - Square - 1080x1080px"
                                                    data-preview="files/templates/img/2-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Valentines Day - Instagram Post
                                                - Square - 1080x1080px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Blog Banner - 2240x1260px"
                                        data-category="blog-banners"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={30}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/30.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/30.jpg"
                                                    data-title="Blog Banner - 2240x1260px"
                                                    data-preview="files/templates/img/30-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Blog Banner - 2240x1260px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Stylish Collage - 3 Photos - 2000x2000px "
                                        data-category="collage"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={19}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/19.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/19.jpg"
                                                    data-title="Stylish Collage - 3 Photos - 2000x2000px"
                                                    data-preview="files/templates/img/19-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Stylish Collage - 3 Photos -
                                                2000x2000px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Pet Shop Banner - Billboard - 970x250px"
                                        data-category="billboard"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={9}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/9.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/9.jpg"
                                                    data-title="Pet Shop Banner - Billboard - 970x250px"
                                                    data-preview="files/templates/img/9-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Pet Shop Banner - Billboard -
                                                970x250px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Blog Banner - 2240x1260px"
                                        data-category="blog-banners"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={35}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/35.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/35.jpg"
                                                    data-title="Blog Banner - 2240x1260px"
                                                    data-preview="files/templates/img/35-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Blog Banner - 2240x1260px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Christmas Banner - Leaderboard - 728x90px "
                                        data-category="leaderboard"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={24}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/24.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/24.jpg"
                                                    data-title="Christmas Banner - Leaderboard - 728x90px"
                                                    data-preview="files/templates/img/24-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Christmas Banner - Leaderboard -
                                                728x90px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Blog Banner - 2240x1260px"
                                        data-category="blog-banners"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={38}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/38.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/38.jpg"
                                                    data-title="Blog Banner - 2240x1260px"
                                                    data-preview="files/templates/img/38-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Blog Banner - 2240x1260px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Fashion Banner - Facebook Ad - 1200x628px "
                                        data-category="facebook-ads"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={40}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/40.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/40.jpg"
                                                    data-title="Fashion Banner - Facebook Ad - 1200x628px"
                                                    data-preview="files/templates/img/40-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Fashion Banner - Facebook Ad -
                                                1200x628px
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid-item"
                                        data-keyword="Quote - Twitter Post - 1600x900px "
                                        data-category="twitter-post"
                                    >
                                        <div className="template-favorite">
                                            <button
                                                type="button"
                                                className="palleon-btn-simple star"
                                                data-templateid={31}
                                            >
                                                <span className="material-icons">
                                                    star_border
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className="palleon-masonry-item-inner palleon-select-template"
                                            data-json="files/templates/json/31.json"
                                        >
                                            <div className="palleon-img-wrap">
                                                <div className="palleon-img-loader" />
                                                <img
                                                    className="lazy"
                                                    data-src="files/templates/img/31.jpg"
                                                    data-title="Quote - Twitter Post - 1600x900px"
                                                    data-preview="files/templates/img/31-large.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="palleon-masonry-item-desc">
                                                Quote - Twitter Post -
                                                1600x900px
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* My Favorites */}
                    <div
                        id="palleon-templates-favorites"
                        className="palleon-tab"
                    >
                        <div
                            id="templates-favorites"
                            className="palleon-grid template-grid template-selection"
                        >
                            <div className="notice notice-info">
                                <h6>No favorites yet</h6>
                                Click the star icon on any item, and you will
                                see it here next time you visit.
                            </div>
                        </div>
                    </div>
                    {/* My Templates */}
                    <div id="palleon-mytemplates" className="palleon-tab">
                        <div id="palleon-my-templates-menu">
                            <div />
                            <div className="palleon-search-box">
                                <input
                                    type="search"
                                    className="palleon-form-field"
                                    placeholder="Search by title..."
                                    autoComplete="off"
                                />
                                <button
                                    id="palleon-my-templates-search"
                                    type="button"
                                    className="palleon-btn primary"
                                >
                                    <span className="material-icons">
                                        search
                                    </span>
                                </button>
                            </div>
                        </div>
                        <ul
                            id="palleon-my-templates"
                            className="palleon-template-list template-selection paginated"
                            data-perpage={10}
                        ></ul>
                        <div
                            id="palleon-my-templates-noimg"
                            className="notice notice-warning d-none"
                        >
                            Nothing found.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateLibraryTab;
