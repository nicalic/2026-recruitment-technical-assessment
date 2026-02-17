//
//  BuildingListView.swift
//  Freerooms Mobile
//
//  Created by Nicole Xie on 2026/2/17.
//

import SwiftUI

struct BuildingListView: View {
    var body: some View {
        HStack(spacing: 16) {
            Image("K-B16").resizable().frame(width: 96, height: 72)
                .cornerRadius(8)
            VStack(alignment: .leading, spacing: 8) {
                Text("AGSM").font(.headline).fontWeight(.bold)
                Text("9 rooms available").fontWeight(.light)
            }
            Spacer()
            HStack(spacing: 2) {
                Text("0")

                Image(systemName: "star.fill")
                    .foregroundStyle(.yellow)
                    .font(.system(size: 18))
            }
        }
    }
}

#Preview {
    BuildingListView()
}
