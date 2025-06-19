patch yourFileName.patchdiff 
--git a/components/sound-controls.tsx b/components/sound-controls.tsx
--- a/components/sound-controls.tsx
+++ b/components/sound-controls.tsx
@@ -52,1 +52,1 @@
-        onClick={() => setShowVolumeSlider(!showVolumeSlider)}
+        onClick={() => { setShowVolumeSlider(!showVolumeSlider); }}
@@ -73,1 +73,1 @@
-            onValueChange={(values) => onVolumeChange(values[0])}
+            onValueChange={(values) => { onVolumeChange(values[0]); }}
diff --git a/components/wallet-connector.tsx b/components/wallet-connector.tsx
--- a/components/wallet-connector.tsx
+++ b/components/wallet-connector.tsx
@@ -51,1 +51,1 @@
-    navigator.clipboard.writeText(walletAddress)
+    void navigator.clipboard.writeText(walletAddress)
@@ -53,1 +53,1 @@
-    setTimeout(() => setShowCopied(false), 2000)
+    setTimeout(() => { setShowCopied(false); }, 2000)
@@ -150,1 +150,1 @@
-                      onClick={() => connectWallet(wallet.id)}
+                      onClick={() => { connectWallet(wallet.id); }}
@@ -190,1 +190,1 @@
-            <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="border-gray-700">
+            <Button variant="outline" onClick={() => { setIsDialogOpen(false); }} className="border-gray-700">
diff --git a/components/achievements.tsx b/components/achievements.tsx
--- a/components/achievements.tsx
+++ b/components/achievements.tsx
@@ -80,1 +80,1 @@
-      const unlockedAchievements = JSON.parse(localStorage.getItem("unlockedAchievements") || "[]")
+      const unlockedAchievements = JSON.parse(localStorage.getItem("unlockedAchievements") ?? "[]")
@@ -112,1 +112,1 @@
-        onClick={() => setShowAchievements(true)}
+        onClick={() => { setShowAchievements(true); }}
@@ -135,1 +135,1 @@
-                <Button variant="ghost" size="sm" onClick={() => setShowAchievements(false)} className="h-8 w-8 p-0">
+                <Button variant="ghost" size="sm" onClick={() => { setShowAchievements(false); }} className="h-8 w-8 p-0">
@@ -218,1 +218,1 @@
-                    onClick={() => setNewAchievement(null)}
+                    onClick={() => { setNewAchievement(null); }}
diff --git a/components/market-stats.tsx b/components/market-stats.tsx
--- a/components/market-stats.tsx
+++ b/components/market-stats.tsx
@@ -10,1 +10,1 @@
-  performance: any | null
+  performance: unknown | null
diff --git a/components/pages/verify-bet-page.tsx b/components/pages/verify-bet-page.tsx
--- a/components/pages/verify-bet-page.tsx
+++ b/components/pages/verify-bet-page.tsx
@@ -8,1 +8,1 @@
-  leftFighter: any
+  leftFighter: unknown
@@ -9,1 +9,1 @@
-  rightFighter: any
+  rightFighter: unknown
diff --git a/components/betting-interface.tsx b/components/betting-interface.tsx
--- a/components/betting-interface.tsx
+++ b/components/betting-interface.tsx
@@ -84,1 +84,1 @@
-      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "info" | "bet")}>
+      <Tabs value={activeTab} onValueChange={(value) => { setActiveTab(value as "info" | "bet"); }}>
@@ -127,1 +127,1 @@
-            <Button onClick={() => setActiveTab("bet")} className="w-full flex items-center justify-center">
+            <Button onClick={() => { setActiveTab("bet"); }} className="w-full flex items-center justify-center">
@@ -162,1 +162,1 @@
-                      onClick={() => handleSelectFighter(leftFighter)}
+                      onClick={() => { handleSelectFighter(leftFighter); }}
@@ -173,1 +173,1 @@
-                      onClick={() => handleSelectFighter(rightFighter)}
+                      onClick={() => { handleSelectFighter(rightFighter); }}
@@ -197,1 +197,1 @@
-                      onClick={() => setBetAmount(Math.max(1, Math.floor(userBalance * 0.1)))}
+                      onClick={() => { setBetAmount(Math.max(1, Math.floor(userBalance * 0.1))); }}
@@ -204,1 +204,1 @@
-                      onClick={() => setBetAmount(Math.max(1, Math.floor(userBalance * 0.5)))}
+                      onClick={() => { setBetAmount(Math.max(1, Math.floor(userBalance * 0.5))); }}
@@ -209,1 +209,1 @@
-                    <Button variant="outline" onClick={() => setBetAmount(userBalance)} disabled={isMatchActive}>
+                    <Button variant="outline" onClick={() => { setBetAmount(userBalance); }} disabled={isMatchActive}>
diff --git a/components/boxing-ring.tsx b/components/boxing-ring.tsx
--- a/components/boxing-ring.tsx
+++ b/components/boxing-ring.tsx
@@ -26,1 +26,1 @@
-  leftPerformance: any | null
+  leftPerformance: unknown | null
@@ -27,1 +27,1 @@
-  rightPerformance: any | null
+  rightPerformance: unknown | null
@@ -84,1 +84,1 @@
-    return () => clearInterval(hourlyReset)
+    return () => { clearInterval(hourlyReset); }
@@ -91,1 +91,1 @@
-      setTimeout(() => setLeftAnimationState("idle"), 1000)
+      setTimeout(() => { setLeftAnimationState("idle"); }, 1000)
@@ -96,1 +96,1 @@
-      setTimeout(() => setRightAnimationState("idle"), 1000)
+      setTimeout(() => { setRightAnimationState("idle"); }, 1000)
@@ -107,1 +107,1 @@
-      performance: any | null,
+      performance: unknown | null,
@@ -124,1 +124,1 @@
-        }[action] || 0
+        }[action] ?? 0
@@ -301,1 +301,1 @@
-      ctx.strokeStyle = candle.close >= candle.open ? `${color}` : `${color}88`
+      ctx.strokeStyle = candle.close >= candle.open ? color : `${color}88`
@@ -309,1 +309,1 @@
-      ctx.fillStyle = candle.close >= candle.open ? `${color}` : `${color}88`
+      ctx.fillStyle = candle.close >= candle.open ? color : `${color}88`
@@ -746,1 +746,1 @@
-                  onClick={() => handleUserAction("jab", "left")}
+                  onClick={() => { handleUserAction("jab", "left"); }}
@@ -758,1 +758,1 @@
-                  onClick={() => handleUserAction("hook", "left")}
+                  onClick={() => { handleUserAction("hook", "left"); }}
@@ -770,1 +770,1 @@
-                  onClick={() => handleUserAction("uppercut", "left")}
+                  onClick={() => { handleUserAction("uppercut", "left"); }}
@@ -782,1 +782,1 @@
-                  onClick={() => handleUserAction("dodge", "left")}
+                  onClick={() => { handleUserAction("dodge", "left"); }}
@@ -802,1 +802,1 @@
-                  onClick={() => handleUserAction("jab", "right")}
+                  onClick={() => { handleUserAction("jab", "right"); }}
@@ -814,1 +814,1 @@
-                  onClick={() => handleUserAction("hook", "right")}
+                  onClick={() => { handleUserAction("hook", "right"); }}
@@ -826,1 +826,1 @@
-                  onClick={() => handleUserAction("uppercut", "right")}
+                  onClick={() => { handleUserAction("uppercut", "right"); }}
@@ -838,1 +838,1 @@
-                  onClick={() => handleUserAction("dodge", "right")}
+                  onClick={() => { handleUserAction("dodge", "right"); }}
@@ -856,1 +856,1 @@
-  const renderFighter = (fighter: any, isLeft: boolean, action: string, performance: any) => {
+  const renderFighter = (fighter: unknown, isLeft: boolean, action: string, performance: any) => {
@@ -874,1 +874,1 @@
-  const renderBull = (isLeft: boolean, action: string, performance: any, color: string) => {
+  const renderBull = (isLeft: boolean, action: string, performance: unknown, color: string) => {
@@ -945,1 +945,1 @@
-  const renderBear = (isLeft: boolean, action: string, performance: any, color: string) => {
+  const renderBear = (isLeft: boolean, action: string, performance: unknown, color: string) => {
@@ -1047,1 +1047,1 @@
-  const renderFox = (isLeft: boolean, action: string, performance: any, color: string) => {
+  const renderFox = (isLeft: boolean, action: string, performance: unknown, color: string) => {
@@ -1123,1 +1123,1 @@
-  const renderDog = (isLeft: boolean, action: string, performance: any, color: string) => {
+  const renderDog = (isLeft: boolean, action: string, performance: unknown, color: string) => {
@@ -1199,1 +1199,1 @@
-  const renderGenericFighter = (isLeft: boolean, action: string, performance: any, color: string, icon: string) => {
+  const renderGenericFighter = (isLeft: boolean, action: string, performance: unknown, color: string, icon: string) => {
diff --git a/components/ui/input.tsx b/components/ui/input.tsx
--- a/components/ui/input.tsx
+++ b/components/ui/input.tsx
@@ -5,1 +5,1 @@
-export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
+export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
diff --git a/components/pages/stats-page.tsx b/components/pages/stats-page.tsx
--- a/components/pages/stats-page.tsx
+++ b/components/pages/stats-page.tsx
@@ -19,1 +19,1 @@
-  leftFighter: any
+  leftFighter: unknown
@@ -20,1 +20,1 @@
-  rightFighter: any
+  rightFighter: unknown
@@ -30,1 +30,1 @@
-  onSelectFighters: (left: any, right: any) => void
+  onSelectFighters: (left: unknown, right: any) => void
@@ -91,1 +91,1 @@
-    fetchAllData()
+    void fetchAllData()
@@ -96,1 +96,1 @@
-    return () => clearInterval(intervalId)
+    return () => { clearInterval(intervalId); }
@@ -195,1 +195,1 @@
-                    onClick={() => setActiveTab("betting")}
+                    onClick={() => { setActiveTab("betting"); }}
diff --git a/components/fighter-selector.tsx b/components/fighter-selector.tsx
--- a/components/fighter-selector.tsx
+++ b/components/fighter-selector.tsx
@@ -12,1 +12,1 @@
-  onSelectFighters: (leftFighter: any, rightFighter: any) => void
+  onSelectFighters: (leftFighter: unknown, rightFighter: any) => void
@@ -13,1 +13,1 @@
-  currentLeftFighter: any
+  currentLeftFighter: unknown
@@ -14,1 +14,1 @@
-  currentRightFighter: any
+  currentRightFighter: unknown
@@ -35,1 +35,1 @@
-  const handleSelectFighter = (fighter: any) => {
+  const handleSelectFighter = (fighter: unknown) => {
@@ -117,1 +117,1 @@
-                onChange={(e) => setSearchTerm(e.target.value)}
+                onChange={(e) => { setSearchTerm(e.target.value); }}
@@ -134,1 +134,1 @@
-                  onClick={() => setSelectingFor("left")}
+                  onClick={() => { setSelectingFor("left"); }}
@@ -159,1 +159,1 @@
-                  onClick={() => setSelectingFor("right")}
+                  onClick={() => { setSelectingFor("right"); }}
@@ -185,1 +185,1 @@
-                  onClick={() => handleSelectFighter(fighter)}
+                  onClick={() => { handleSelectFighter(fighter); }}
diff --git a/README.md b/README.md
--- a/README.md
+++ b/README.md
@@ -1,1 +1,1 @@
-# KryptO KO 
+# KryptO KO 

@@ -2,1 +2,1 @@
-## Crypto Clashers Boxing
+
## Crypto Clashers Boxing
@@ -3,1 +3,1 @@
- *** Brought to you by StoneYard Games, Degan Stone McCrea & Justin William McCrea  ***
+ ***Brought to you by StoneYard Games, Degan Stone McCrea & Justin William McCrea  ***
diff --git a/components/pages/select-boxing-coin.tsx b/components/pages/select-boxing-coin.tsx
--- a/components/pages/select-boxing-coin.tsx
+++ b/components/pages/select-boxing-coin.tsx
@@ -12,1 +12,1 @@
-  onSelectFighters: (leftFighter: any, rightFighter: any) => void
+  onSelectFighters: (leftFighter: unknown, rightFighter: any) => void
@@ -74,1 +74,1 @@
-    fetchCryptoPrices()
+    void fetchCryptoPrices()
@@ -79,1 +79,1 @@
-    return () => clearInterval(intervalId)
+    return () => { clearInterval(intervalId); }
@@ -90,1 +90,1 @@
-  const handleSelectFighter = (fighter: any, position: "left" | "right") => {
+  const handleSelectFighter = (fighter: unknown, position: "left" | "right") => {
@@ -196,1 +196,1 @@
-                    onClick={() => handleSelectFighter(leftFighter, "left")}
+                    onClick={() => { handleSelectFighter(leftFighter, "left"); }}
@@ -237,1 +237,1 @@
-                    onClick={() => handleSelectFighter(rightFighter, "right")}
+                    onClick={() => { handleSelectFighter(rightFighter, "right"); }}
@@ -315,1 +315,1 @@
-                    onChange={(e) => setSearchTerm(e.target.value)}
+                    onChange={(e) => { setSearchTerm(e.target.value); }}
@@ -380,1 +380,1 @@
-                      onClick={() => handleSelectFighter(fighter, leftFighter.id === fighter.id ? "left" : "right")}
+                      onClick={() => { handleSelectFighter(fighter, leftFighter.id === fighter.id ? "left" : "right"); }}
diff --git a/app/page.tsx b/app/page.tsx
--- a/app/page.tsx
+++ b/app/page.tsx
@@ -84,1 +84,1 @@
-  const handleSelectFighters = (left: any, right: any) => {
+  const handleSelectFighters = (left: unknown, right: any) => {
diff --git a/components/pages/match-page.tsx b/components/pages/match-page.tsx
--- a/components/pages/match-page.tsx
+++ b/components/pages/match-page.tsx
@@ -17,1 +17,1 @@
-  leftFighter: any
+  leftFighter: unknown
@@ -18,1 +18,1 @@
-  rightFighter: any
+  rightFighter: unknown
@@ -142,1 +142,1 @@
-    fetchAllData()
+    void fetchAllData()
@@ -486,1 +486,1 @@
-    return () => clearInterval(timerInterval)
+    return () => { clearInterval(timerInterval); }
@@ -641,1 +641,1 @@
-                onChange={(e) => setGameSpeed(Number(e.target.value))}
+                onChange={(e) => { setGameSpeed(Number(e.target.value)); }}
@@ -661,1 +661,1 @@
-              onClick={() => setCameraAngle(cameraAngle === "side" ? "forward" : "side")}
+              onClick={() => { setCameraAngle(cameraAngle === "side" ? "forward" : "side"); }}
@@ -805,1 +805,1 @@
-                            onClick={() => handleUserAction("jab", "left")}
+                            onClick={() => { handleUserAction("jab", "left"); }}
@@ -812,1 +812,1 @@
-                            onClick={() => handleUserAction("hook", "left")}
+                            onClick={() => { handleUserAction("hook", "left"); }}
@@ -819,1 +819,1 @@
-                            onClick={() => handleUserAction("uppercut", "left")}
+                            onClick={() => { handleUserAction("uppercut", "left"); }}
@@ -826,1 +826,1 @@
-                            onClick={() => handleUserAction("dodge", "left")}
+                            onClick={() => { handleUserAction("dodge", "left"); }}
@@ -844,1 +844,1 @@
-                            onClick={() => handleUserAction("jab", "right")}
+                            onClick={() => { handleUserAction("jab", "right"); }}
@@ -851,1 +851,1 @@
-                            onClick={() => handleUserAction("hook", "right")}
+                            onClick={() => { handleUserAction("hook", "right"); }}
@@ -858,1 +858,1 @@
-                            onClick={() => handleUserAction("uppercut", "right")}
+                            onClick={() => { handleUserAction("uppercut", "right"); }}
@@ -865,1 +865,1 @@
-                            onClick={() => handleUserAction("dodge", "right")}
+                            onClick={() => { handleUserAction("dodge", "right"); }}
diff --git a/lib/sound-manager.ts b/lib/sound-manager.ts
--- a/lib/sound-manager.ts
+++ b/lib/sound-manager.ts
@@ -87,1 +87,1 @@
-      soundToPlay.play().catch((err) => {
+      soundToPlay.play().catch((err: unknown) => {
diff --git a/components/jumbotron.tsx b/components/jumbotron.tsx
--- a/components/jumbotron.tsx
+++ b/components/jumbotron.tsx
@@ -27,1 +27,1 @@
-  leftPerformance: any | null
+  leftPerformance: unknown | null
@@ -28,1 +28,1 @@
-  rightPerformance: any | null
+  rightPerformance: unknown | null
@@ -165,1 +165,1 @@
-    return () => clearInterval(interval)
+    return () => { clearInterval(interval); }
@@ -191,1 +191,1 @@
-              onClick={() => setShowLeaderboard(!showLeaderboard)}
+              onClick={() => { setShowLeaderboard(!showLeaderboard); }}
