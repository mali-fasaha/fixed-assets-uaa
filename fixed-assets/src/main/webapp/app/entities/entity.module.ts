import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'asset-acquisition',
        loadChildren: () =>
          import('./fixedAssetService/asset-acquisition/asset-acquisition.module').then(m => m.FixedAssetServiceAssetAcquisitionModule)
      },
      {
        path: 'asset-depreciation',
        loadChildren: () =>
          import('./fixedAssetService/asset-depreciation/asset-depreciation.module').then(m => m.FixedAssetServiceAssetDepreciationModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class FixedAssetsEntityModule {}
