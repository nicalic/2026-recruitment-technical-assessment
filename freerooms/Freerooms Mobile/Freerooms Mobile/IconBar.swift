//
//  IconBar.swift
//  Freerooms Mobile
//
//  Created by Nicole Xie on 2026/2/18.
//

import SwiftUI

struct IconBar : View {
    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: "arrow.up.arrow.down")
            
            Image(systemName: "square.grid.2x2")
        }
        .font(.system(size: 24))
        .foregroundStyle(.accent)
        .padding(.horizontal, 12)
        .padding(.vertical, 8)
        .background(.white)
        .clipShape(Capsule())
        .shadow(color: .gray.opacity(0.25), radius: 5)
    }
}

#Preview {
    IconBar()
}
