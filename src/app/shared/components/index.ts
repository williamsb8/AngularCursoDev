import { CardUserComponent } from "./cards/card-user/card-user.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CardLoaderComponent } from "./loaders/card-loader/card-loader.component";
import { TitleH1Component } from "./titles/title-h1/title-h1.component";

export const components: any[] = [
    CardUserComponent,
    CarouselComponent,
    TitleH1Component,
    CardLoaderComponent
];

// export all compoents
export * from "./cards/card-user/card-user.component";
export * from "./carousel/carousel.component";
export * from "./titles/title-h1/title-h1.component";
export * from "./loaders/card-loader/card-loader.component";
